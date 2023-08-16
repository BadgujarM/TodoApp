import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import Alert from 'react-bootstrap/Alert';


function GetTodo(props) {


	const [show, setShow] = useState(false);
	const [err, setErr] = useState(false);
	
	let submit = (e) => {
		e.preventDefault();
		if (!headTitleValue || !descValue){
			setErr(true);
		}
		else{
		props.addTodo(headTitleValue, descValue)
		setHeadTitleValue('');
		setDescValue('');
		setShow(true);
		setTimeout(() => {setShow(false);}, 2000);
		}
		
	}
	
	let [headTitleValue, setHeadTitleValue] = useState("");
	let [descValue, setDescValue] = useState("");
  return (
	  <>
    <Form className="mb-3" onSubmit={submit}>
		{err?<Alert variant="danger" onClose={() => setErr(false)} dismissible>
        <h5>Title or description can't be empty</h5>
      </Alert>:""}
		{show?<Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Task Added Successfully!</Alert.Heading>
      </Alert>:<h4>Please add a task</h4>}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control value={headTitleValue} onChange={(e) => setHeadTitleValue(e.target.value)} type="name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Desc</Form.Label>
        <Form.Control type="name" value={descValue} onChange={(e) => setDescValue(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Add ToDo
      </Button>{' '}
    </Form>
		  <hr></hr>
	  </>
  );
}

export default GetTodo;