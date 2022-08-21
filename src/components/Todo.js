import React ,{useState} from "react";
import "./style.css";
const Todo = () => {
    const[inputData,setInputData] = useState(" ");
    const[items,setItems] = useState([]);

    const addItem = () =>{
        if(!inputData) {
            alert("please enter something todo");
        }
        else{
            // object for taking id of items so we can get the id when we need to delete
            const newItems = {
                id:new Date().getTime().toString(),
                name:inputData,
            }
            // setItems([...items,inputData]);
            // fordata with id
            setItems([...items,newItems]);
            setInputData("");
        }
    }

    // fn to delete items
    const deleteItem = (index) =>{
        const updatedItem = items.filter((curElem)=>{
            return curElem.id != index;
        })
        setItems(updatedItem);
    }
    
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input type="text" placeholder="AddItem" className="form-control"value={inputData}onChange={(event)=>setInputData(event.target.value)} />
            
            <i className="fa fa-solid fa-plus"onClick={addItem}></i>
          </div>

        
          <div className="showItems">
            {items.map((curElem)=>{
                return(
                    <div className="eachItem"key={curElem.id}>
                    <h3>{curElem.name}</h3>
                    <div className="todo-btn">
                      <i className="far fa-edit add-btn"></i>
                      <i className="far fa-trash-alt add-btn"onClick={()=>deleteItem(curElem.id)}></i>
                    </div>
                  </div>
                )
            })}
           
          </div>
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove all">
              <span>CHECKLIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
