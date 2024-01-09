import './App.css';
import React, {useState} from "react";

const dic = [

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

];


function App() {
  const [searchText, setSearchText] = useState("");
  const [ans, setAns] = useState("");

  const handleClick = () => {
    const found = dic.find((val) => (val.word).toLowerCase() === searchText.toLowerCase());
    console.log(found);
    if(found){
      setAns(found.meaning)
    }else{
      setAns("Word not found in the dictionary.");
    }
    
  }

  return (
    <div>
      <h1>Dictionary App</h1>
      <input type = 'text' placeholder = 'Search for a word...' onChange = {(e) => setSearchText(e.target.value)}></input>
      <button onClick = {handleClick}>Search</button>
      <h3>Defination:</h3>
      {ans && <p>{ans}</p>}
    </div>
  );
}

export default App;
