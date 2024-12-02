import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='bg-warning rounded-4 flex-shrink-0' style={{  width: '300px',height: '320px' }}>
    <div className='d-flex justify-content-between align-items-center m-2 bg-warning'  
    >
      <h4 className='bg-danger px-3 py-1 rounded-3 fs-6'>{data.category}</h4>
      <h4 style={{fontSize:'16px'}}>{data.date}</h4>
    </div>
    <h4 className='mx-2 fw-bolder' style={{fontSize:'26px'}}>{data.title}</h4>
    <h3 className='mx-2 text-primary' style={{fontSize:'16px'}}>{data.description}</h3>

      <div className='mt-4'>
        <button className='w-100 bg-danger p-1'>Failed</button>
    </div>
    </div>
  )
}

export default FailedTask
