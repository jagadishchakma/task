import React, { useState } from "react";

const Task1 = () => {
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState({});

  const handleInput = (e) => {
    const newTemp = {...temp};
    newTemp[e.target.name] = e.target.value;
    setTemp(newTemp);
    
  };
  const handleFormSubmit = (e) => {
      e.preventDefault();
      if(temp.name && temp.email){
         const check = data.find(item => item.email === temp.email);
        if(check){
            const newTemp = {...temp};
            newTemp['email'] = 'unavilable';
            setTemp(newTemp);
        }else{
            const newData = [...data];
            newData.push(temp);
            setData(newData);
            setTemp({});
            e.target.reset();
        }
      }
  }

  // delete
 const deleteData = (email) => {
    const newData = data.filter(item => item.email !== email);
    setData(newData);
 }
  return (
    <div className="task1 container">
      <h1 className="text-center m-5">Task One</h1>
      <form onSubmit={handleFormSubmit}>
      <div className="row text-center">
        <div className="col-md-5">
          <h6>Name</h6>
          <input
            type="text"
            className= 'form-control'
            name="name"
            onChange={handleInput}
            required
          />
        </div>
        <div className="col-md-5">
          <h6>Email</h6>
          <input
            type="text"
            className="form-control"
            name="email"
            onChange={handleInput}
            required
          />
          <span className="text-warin">{temp.email === 'unavilable' ? 'Email already exist' : ''}</span>
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-info form-control mt-4" disabled={temp.name && temp.email ? false: true}>Add</button>
        </div>
      </div>
      </form>
      <div className="user-data">
        { data.length > 0 && <table className="table">
        <thead>
          <tr>
              <th scope="col"> Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item) => (
          <tr key={Math.random()}>
              <th scope="row">{item.name}</th>
              <td>{item.email}</td>
              <td><button onClick={() => deleteData(item.email)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    }
      </div>
    </div>
  );
};

export default Task1;
