
import "./App.css";
import React,{useState} from "react";

function App() {
  const[weight,SetWeight]=useState(0);
  const[height,SetHeight]=useState(0);
  const[bmi,Setbmi]=useState('');
  const[message,SetMessage]=useState('');

  //logic
 let calcbmi= (e) => {
  e.preventDefault();
  if(weight===0 || height ===0){
    alert('Please enter valid weight and height')
  }
  else{
    let bmi = (weight/(height*height)*703)
    Setbmi(bmi.toFixed(1))

    //

    if(bmi<25){
      SetMessage('you are underweight')
    }

    else if(bmi>=25 && bmi <30){
      SetMessage('you have healthy weight')
    }

    else{
      SetMessage('you are overweight')
    }
  }
 }





 //reload
 let reload=()=>{
  window.location.reload()
 }






  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcbmi}>
          <div>
            <label>Weight (lbs)</label>
            <input type="text" placeholder="Enter Weight" value={weight} onChange={(e) => SetWeight(e.target.value) }/>
          </div>
          <div>
            <label>Height (in)</label>
            <input type="text" placeholder="Enter Height" value={height} onChange={(event)=> SetHeight(event.target.value)} />
          </div>
          <div>
            <button className="btn" type="submit" >
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3> Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
