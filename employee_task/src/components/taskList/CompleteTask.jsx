import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='bg-danger rounded-4 flex-shrink-0' style={{  width: '300px',height: '320px' }}>
    <div className='d-flex justify-content-between align-items-center m-2 bg-danger'  
    >
      <h4 className='bg-danger px-3 py-1 rounded-3 fs-6'>{data.category}</h4>
      <h4 style={{fontSize:'16px'}}>{data.date}</h4>
    </div>
    <h4 className='mx-2 fw-bolder' style={{fontSize:'26px'}}>{data.title}</h4>
    <h3 className='mx-2 text-warning' style={{fontSize:'16px'}}>{data.description}</h3>
    <div className='mt-4'>
        <button className='w-100 bg-success p-1'>Completed</button>
    </div>
  </div>
  )
}

export default CompleteTask
