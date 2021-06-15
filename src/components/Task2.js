
import { useState } from "react";

const Task2 = () => {
  const [data, setData] = useState([
    {
    moduleName: "Products",
    activityName: "Juice",
    isCreate: false,
    isView: false,
    isEdit: false,
    isDelete: false,
    isApprove: false,
    },
    {
    moduleName: "Products",
    activityName: "Tea",
    isCreate: false,
    isView: false,
    isEdit: false,
    isDelete: false,
    isApprove: false,
    },
    {
    moduleName: "Products",
    activityName: "Milk",
    isCreate: false,
    isView: false,
    isEdit: false,
    isDelete: false,
    isApprove: false,
    },
    {
    moduleName: "Products",
    activityName: "Bread",
    isCreate: false,
    isView: false,
    isEdit: false,
    isDelete: false,
    isApprove: false,
    },
    {
    moduleName: "Products",
    activityName: "Eggs",
    isCreate: false,
    isView: false,
    isEdit: false,
    isDelete: false,
    isApprove: false,
    },
  ]);

// handle input checkbox
const handleCheckBox = (name, e) => {
  let newData = [];
  data.forEach(item => {
    if(item.activityName === name){
      const newItem = {...item};
      newItem[e.target.name] = e.target.checked;
      newData.push(newItem);
    }else{
      newData.push(item);
    }
  });
  setData(newData);
}

return (
    <div className="data-set container">
        <h1 className="text-center m-5">Task Two</h1>
      <table className="table">
        <thead>
          <tr>
              <th scope="col">Module Name</th>
              <th scope="col">Activity­ Name</th>
              <th scope="col">Create</th>
              <th scope="col">View</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
              <th scope="col">Approve</th>
            </tr>
        </thead>
        <tbody>
        {data.map((item) => (
          <tr key={Math.random()}>
              <th scope="row">{item.moduleName}</th>
              <td>{item.activityName}</td>
              <td>
                  <input
                  type="checkbox"
                  name="isCreate"
                  checked={item.isCreate}
                  onChange={(e) => handleCheckBox(item.activityName, e)}
                  />
              </td>
              <td>
                  <input type="checkbox" name="isView" checked={item.isView} onChange={(e) => handleCheckBox(item.activityName, e)}/>
              </td>
              <td>
                  <input type="checkbox" name="isEdit" checked={item.isEdit} onChange={(e) => handleCheckBox(item.activityName, e)}/>
              </td>
              <td>
                  <input
                  type="checkbox"
                  name="isDelete"
                  checked={item.isDelete}
                  onChange={(e) => handleCheckBox(item.activityName, e)}
                  />
              </td>
              <td>
                  <input
                  type="checkbox"
                  name="isApprove"
                  checked={item.isApprove}
                  onChange={(e) => handleCheckBox(item.activityName, e)}
                  />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task2;