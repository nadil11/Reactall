import React from 'react'
// import Header from './Header'
// import Footer from './Footer'
// import Main from './Main'
import "./style.css"

function App() {
  var loading = true;

  let num1 = 10;
  let num2 = 20;
  let sum = 0;
  sum=num1+num2;
  // if (num1>num2) {
  //   document.write(num1+"is greater than"+num2);
  // }else{
  //   document.write(num2+" is greater than "+num1);
  // }

  // let number = prompt("Enter a number");
  // if (number%2 === 0) {
  //   alert("The number is even");
  // }else{
  //   alert("the number is odd");
  // }

  return (
    <div>
      {/* <Header></Header>
      <Main></Main>
      <Footer></Footer> */}
      <h1>Sum is : {sum}</h1>
      {
        // true condition
        loading ?
        <div>
          <h1>loading......</h1>
        </div> 
        :                       /*to separate true and false*/
        // false condition
        <div>
          <table>
            <tr>
              <td>Name</td>
              <td>Address</td>
            </tr>
            <tr>
              <td>Nadil</td>
              <td>calicut</td>
            </tr>
          </table>
        </div>
      }
    </div>
  );
}
export default App;