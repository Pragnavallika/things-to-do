import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ToDOLists from './ToDoLists';




const App = () =>{

  const[inputList, setInputList] = useState("");

  const [Items, setItems] = useState([]);


  const itemEvent = (event) => { 
    setInputList(event.target.value);
  };

  const ListOfItems = () => {
    setItems((oldItems) => {
       return[...oldItems, inputList];
    });
    setInputList('');
     
  }

  const deleteItems = (id) => {
    console.log('deleted');

    setItems((oldItems) =>{
      return oldItems.filter((arrElem, index) => {
        return index !== id;

      });
    });
  }

  return (
     <>
    <div className="main_div">

      <div className="prag">
        <br></br>

        <h1>To do list</h1>
        <br></br>
        <input type="text" placeholder ="Add a items" 
         value={inputList}
        onChange={itemEvent}/>
        <button onClick={ListOfItems}>+</button>


        <ol>
          {/* <li> {inputList} </li> */}

          {Items.map( (itemval, index )  => {
            return < ToDOLists 
            key={index}
            id={index} 
            text= {itemval} 
            onSelect = {deleteItems}
            
            />;
          })}



        </ol>

      </div>

    </div>




 


</>);
  

}


export default App;
