// import React from 'react'
import "./tash.css";

const TaskListNumber = ({data}) => {
//  console.log(data)

  return (
     <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1
     gy-2">

      <div>
      <div className="col asd bg-primary rounded-3 p-3">
      <h3>{data.taskCount.new}</h3>
      <h4>New Task</h4>
      </div>
      </div>

      <div>
      <div className="col asd bg-danger rounded-3 p-3">
      <h3>{data.taskCount.active}</h3>
      <h4>Active Task</h4>
      </div>
      </div>

      
      <div>
      <div className="col asd bg-warning rounded-3 p-3">
      <h3>{data.taskCount.completed}</h3>
      <h4>Completed Task</h4>
      </div>
      </div>

      
      <div>
      <div className="col asd bg-success rounded-3 p-3">
      <h3>{data.taskCount.failed}</h3>
      <h4>Failed Task</h4>
      </div>
      </div>

      </div>
      
      
  );
};

export default TaskListNumber;
