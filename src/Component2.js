import React from "react"


function Component2(pros) {
    return(
        <>
        <div className="part1">
            <div>
              <img className="image" src={pros.image}></img>
            </div>
           <div className="sub-part1">
            <h1 className="head">{pros.head}</h1>
            <p className="para1">{pros.para1}</p>
            <button className="btnn">{pros.btnn}</button>
            </div>  
        </div>  
        </>
    )
}
export default Component2