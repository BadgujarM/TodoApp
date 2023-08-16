import Button from 'react-bootstrap/Button';


export default function todo(props) {
	return (
		<>
			<div className="container">
			<h1>{props.todo.heading}</h1>
			<p>{props.todo.note}</p>
			<Button variant="danger" onClick={() =>{props.Delete(props.todo)}}>Delete</Button>{' '}
				</div>
		<hr></hr>
		</>
	)
}
