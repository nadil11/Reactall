import Footer2 from "./Footer2";


function Foot() {
    return(
        <>
         <div  className="footer">
        <div>
             <h3 className="fh3">Basic Elements</h3>
             <div>
                 <h4 className="fh4">Buttons</h4>
                 <div className="btnall">
                    <button className="btn2">Default button</button>
                    <button className="btn3">Filled button</button>
                    <button className="btn4">Round button</button>
                    <button className="btn5"><img className="btn5img" src="https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeMU9InmOAgzbMmGCDKRcZGMCYTzQhrMlRCA&usqp=CAU" alt="" />Button with icon</button>
                    <button className="btn6">Simple button</button>
                 </div>
             </div>
         </div> 
         <Footer2/>
        </div> 
        </>
    );
}

export default Foot