import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer"
import "./Component2.css"
// import "./App1.css"
// import Component from "./component";
import Component2 from "./Component2";

function App1() {
    return(
        <>
         {/* <Header></Header>
        <Main></Main>
        <Footer></Footer>  */}
        <Component2
            image="https://media.discordapp.net/attachments/1103207862521561162/1126755241371635732/reusable-banners-card-1-bg-1.png?width=1025&height=276"
            head="The Seasons Latest"
            para1="Get the seasons all latest design in aflick of your hand"
            btnn="Show More"

            image1="https://media.discordapp.net/attachments/1103207862521561162/1126755241749135380/reusable-banners-card-2-bg-1.png?width=1025&height=276"
            head2="Our New Designs"
            para2="Get the designs developed by our in housw team all for yourself"
            btnn2="Show More"

            image3="https://media.discordapp.net/attachments/1103207862521561162/1126755242210492426/reusable-banners-card-3-bg-1.png?width=1025&height=276"
            head3="Insiders"
            para3="Get the designs developed by our in housw team all for yourself"
            btnn3="Show More"

            
        />
        </>

    );
}
export default App1