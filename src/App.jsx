
import Button from 'react-bootstrap/Button';
import Navbar from './components/Navbar.jsx';
import Todo from './components/todo.jsx';
import GetTodo from './components/getTodo.jsx';
import './App.css';

import { useState } from 'react';

export default function App() {

	

	let [changeVal, setChangeVal] = useState("Add Task");

  let addTodo = (headtitle, desc) => {
	  let srno = todos.length>0?(todos[todos.length-1].sno+1):1;
	  let toAdd = {
		  sno: srno,
		  heading: headtitle,
		  note: desc
	  }
	  console.log(toAdd);
	  setTodos([...todos, toAdd]);
  }

  let [isGet, setIsGet] = useState(false);

  let change = () => {
    isGet?setIsGet(false):setIsGet(true);
		(changeVal==="Add Task")?setChangeVal("Show Tasks"):setChangeVal("Add Task");
  }

  let Delete = (todo) => {
    console.log("deleted", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }

  let [todos, setTodos] = useState([
    {
      sno: 1,
      heading: "Task1",
      note: 'Note'
    },
    {
      sno: 2,
      heading: "Task2",
      note: "Note2"
    },
    {
      sno: 3,
      heading: "Task3",
      note: "Note3"
    }
  ]);

  return (
    <>
      <Navbar title='ToDo App' />
      <div className='container my-3'>
        {isGet ? <GetTodo addTodo = {addTodo}/> : (
          <>
            <h1 className="my-3">Todo List</h1><div className="scroll">
            {todos.length === 0 ? <h3>No Task to Show Here</h3> :
              todos.map((todo) => (
                <Todo todo={todo} key={todo.sno} Delete={Delete} />
              ))}
				</div>
          </>
        )}
		  <div className="btn-cont">
        <Button className="btn-center" variant="warning" onClick={() => { change() }}>{changeVal}</Button>{' '}
			  </div>
      </div>
    </>
  );
}
