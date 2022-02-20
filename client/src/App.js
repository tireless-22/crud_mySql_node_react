
import './App.css';
import { useState } from "react";
import Axios from "axios";


function App() {

  const [name, setName] = useState(" ");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState(" ");
  const [position, setPosition] = useState(" ");
  const [wage, setWage] = useState(0);



  const addEmployee = () => {

    Axios.post("http://localhost:3001/create",
      {
        name: name,
        age: age,
        country: country,
        position: position,
        wage: wage
      }).then(() => {
        console.log("success");
      })
      .catch(() => {
        console.log("error");
      });


    console.log(name);
    console.log(age);
    console.log(country);
    console.log(position);
    console.log(wage);
  };
  


  return (
    <div className="App">
      <h1>hello this is from app.js</h1>
      <label>Name</label>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <br></br>

      <label>Age</label>
      <input
        type="number"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />

      <br></br>

      <label>Country</label>
      <input
        type="text"
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />

      <br></br>

      <label>Position</label>
      <input
        type="text"
        onChange={(e) => {
          setPosition(e.target.value);
        }}
      />

      <br></br>

      <label>Salary</label>
      <input
        type="number"
        onChange={(e) => {
          setWage(e.target.value);
        }}
      />

      <br></br>

      <button onClick={addEmployee}>Add Employee</button>
    </div>
  );
}

export default App;
