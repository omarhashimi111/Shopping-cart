import {AiFillStar,AiOutlineStar} from "react-icons/ai"
import React from "react"

function Rating({rating,style,onClick}) {
  return (
    <>
      {
        [...Array(5)].map((_,index)=>(
            <span key={index} onClick={()=>onClick(index+1)} style={style}>
                {rating > index ? <AiFillStar fontSize="15px" /> : <AiOutlineStar fontSize="15px" />}
            </span>
        ))
      }
    </>
  )
}

export default Rating
