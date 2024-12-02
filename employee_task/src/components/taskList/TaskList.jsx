// import React from 'react'

import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

const TaskList = ({data}) => {  

  return (
    <div id='taskList' className="h-50 py-3 mt-3  w-100 d-flex gap-3 overflow-x-auto">

    {data.tasks.map((elem,idx) =>{
      if(elem.active){
        return <AcceptTask key={idx} data={elem} />
      }
      if(elem.new){
        return <NewTask key={idx} data={elem} />
      }
      if(elem.completed){
        return <CompleteTask key={idx} data={elem} />
    }
      if(elem.failed){
        return <FailedTask key={idx} data={elem} />
      }
    }
  )}

    {/* <div className='bg-primary rounded-4 flex-shrink-0' style={{  width: '300px',height: '320px' }}>
      <div className='d-flex justify-content-between align-items-center m-2 bg-primary'  
      >
        <h4 className='bg-danger px-3 py-1 rounded-3 fs-6'>Btn</h4>
        <h4 style={{fontSize:'16px'}}>23/64/1003</h4>
      </div>
      <h4 className='mx-2 fw-bolder' style={{fontSize:'26px'}}>make a sd sfyt video</h4>
      <h3 className='mx-2 text-warning' style={{fontSize:'16px'}}>dsf i have ot complete tjr dkds f j d kjsd in couple amoint of thie and prepare it well.</h3>
    </div> */}

    </div>
  )
}

export default TaskList
