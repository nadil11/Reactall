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


        <div className="part2">
            <div>
              <img className="image1" src={pros.image1}></img>
            </div>
           <div className="sub-part2">
            <h1 className="head2">{pros.head2}</h1>
            <p className="para2">{pros.para2}</p>
            <button className="btnn2">{pros.btnn2}</button>
            </div>  
        </div>

        <div className="part3">
            <div>
              <img className="image3" src={pros.image3}></img>
            </div>
           <div className="sub-part3">
            <h1 className="head3">{pros.head3}</h1>
            <p className="para3">{pros.para3}</p>
            <button className="btnn3">{pros.btnn3}</button>
            </div>  
        </div>

        
        </>
    )
}
export default Component2