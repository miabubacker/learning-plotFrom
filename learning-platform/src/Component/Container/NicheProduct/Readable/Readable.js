import React, { useState } from 'react'

export default function Readable(props) {
     const{details}=props
    const [isReadMore,setisReadMore]=useState(true)
    const toggleReadMore = () => { 
     setisReadMore(!isReadMore); 
   }; 
    const text=details
     console.log(text.length)
  return (
    <>  {isReadMore ? text.slice(0, 300) : text} 
    {text.length>129&&<span onClick={()=>toggleReadMore()} className="read-or-hide"> 
      {isReadMore ? "...read more" : " show less"} 
    </span>} </>
  )
}
