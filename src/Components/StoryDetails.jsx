import React from 'react'
import './btn.css';

const StoryDetails = ({ title,img}) => { 
  console.log(title)
  return (
    <>

<div class="col-12 mt-3" style={{ height: '400px', width: '250px', float: 'left', overflow: 'hidden' }}>
  
  <div class="card d-inline-block my-3 mx-2 px-2 py-2" style={{ maxWidth: '345px', marginRight: '120px',marginLeft:'260px', overflow: 'auto' }}> 
    <img src={`https://ik.imagekit.io/dev24/${img}`} style={{ width: '100%' }} />
    <div class="card-body">
      <h5 class="card-title">{title}</h5> 
      <button class="btn btn-success" style={{ marginLeft: '100px',  }}>New</button>
    </div>
  </div> 
</div>


                      


    
    </>
  )
}

export default StoryDetails 


