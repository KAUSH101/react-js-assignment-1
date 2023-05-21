import React from 'react'

const Container = ({title,thumb,short_description,id,slug}) => {
  return (
    <div>
        <h3>{title}</h3>
<img style={{width:'100px',height:'100px'}} src={thumb} alt="" />
<p>{short_description}</p>

      
    </div>
  )
}

export default Container
