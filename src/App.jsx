import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from './components/Navbar.jsx';
import Todo from './components/todo.jsx';
import GetTodo from './components/getTodo.jsx';
import './App.css';

export default function App() {
  let [changeVal, setChangeVal] = useState("Add Task");
  let [todos, setTodos] = useState([]);
  let [isGet, setIsGet] = useState(false);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  let addTodo = (headtitle, desc) => {
    let srno = todos.length > 0 ? (todos[todos.length - 1].sno + 1) : 1;
    let toAdd = {
      sno: srno,
      heading: headtitle,
      note: desc
    };
    setTodos([...todos, toAdd]);
    localStorage.setItem('todos', JSON.stringify([...todos, toAdd]));
  }

  let change = () => {
    isGet ? setIsGet(false) : setIsGet(true);
    (changeVal === "Add Task") ? setChangeVal("Show Tasks") : setChangeVal("Add Task");
  }

  let Delete = (todo) => {
    console.log("deleted", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem('todos', JSON.stringify(todos.filter((e) => {
      return e !== todo;
    })));
  }

  return (
    <>
      <Navbar title='ToDo App' />
      <div className='container my-3'>
        {isGet ? <GetTodo addTodo={addTodo} /> : (
          <>
            <h1 className="my-3">Todo List</h1>
            <div className="scroll">
              {todos.length === 0 ? <h3>No Task to Show Here. Add Some</h3> :
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
