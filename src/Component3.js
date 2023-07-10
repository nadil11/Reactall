import React from "react"

function Component3(pros) {
    return(
        <>

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

        
        </>
    )
}
export default Component3