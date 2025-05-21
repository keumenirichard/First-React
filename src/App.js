
import {useState} from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    const [fruits,setfruits]=useState([
        {id:1, nom:'orange'},
        {id:2, nom:'mandarine'},
        {id:3, nom:'cerise'},
        {id:4, nom:'abricot'}]);
const handleDelete=(id)=>{
    const fruitsCopy=[...fruits];
    const fruitsDelete=fruitsCopy.filter(fruit => fruit.id !== id);
    setfruits(fruitsDelete);
}
const [NewFruit, setNewFruit]=useState("");
const handleChange = (e) => {
    e.preventDefault();
    setNewFruit(e.target.value);
}
const handleSubmit = (e) => {
     e.preventDefault();
      const  fruitsUpdate=[...fruits]
      const id=new Date().getTime();
      const name=NewFruit;
      fruitsUpdate.push({id:id, nom:name});
      setfruits(fruitsUpdate);
      setNewFruit("");
}


  return (
      <div>
          <ul>
              {fruits.map(fruit => (
                  <li key={fruit.id}>{fruit.nom}
                    <button onClick={()=>handleDelete(fruit.id)}>X</button>
                  </li>
              ))}
          </ul>
          <form action="submit"  >
              <input type="text"
                     value={NewFruit}
                     placeholder="Rechercher..."
              onChange={handleChange}/>
              <button onClick={handleSubmit} >Ajouter +</button>
          </form>
      </div>
  );
}

export default App;