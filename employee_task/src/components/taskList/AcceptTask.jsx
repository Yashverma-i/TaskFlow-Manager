import React from 'react'

const AcceptTask = ({data}) => {

  // console.log(data.title)

  return (
    <div className='bg-primary rounded-4 flex-shrink-0' style={{  width: '300px',height: '320px' }}>
      <div className='d-flex justify-content-between align-items-center m-2 bg-primary'  
      >
        <h4 className='bg-danger px-3 py-1 rounded-3 fs-6'>{data.category}</h4>
        <h4 style={{fontSize:'16px'}}>{data.date}</h4>
      </div>
      <h4 className='mx-2 fw-bolder' style={{fontSize:'26px'}}>{data.title}</h4>
      <h3 className='mx-2 text-warning' style={{fontSize:'16px'}}>{data.description}</h3>

      <div className='flex justify-content-between  mt-4'>
        <button className='bg-success py-1 px-2 ts-3'>Mark as Completed</button>
        <button className='bg-danger py-1 px-2 ts-3'>Mark as Failed</button>
      </div>
    </div>

  )
}

export default AcceptTask
