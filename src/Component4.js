import React from "react"

function Component4(pros) {
    return(
        <>

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
export default Component4