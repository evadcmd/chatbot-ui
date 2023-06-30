import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import User from 'src/dto/user';
import './App.css';

function App() {
  const [aiMessages, setAIMessages] = useState([]);
  const [users, setUsers] = useState<User[]>([]);

  async function getUsers() {
    const resp = await fetch('/api/user');
    const users: User[] = await resp.json();
    setUsers(users);
  }

  async function sendMsg(msg: string) {
    const resp = await fetch('/api/chat');
    const users: User[] = await resp.json();
    setUsers(users);
  }

  return (
    <>
      <h1>Chatbot</h1>
      <div className="card">
        <button onClick={getUsers}>get users</button>
        {users.map(({ id, email }) => (
          <p key={id}>{email}</p>
        ))}
      </div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>User Input</Form.Label>
          <Form.Control type="text" placeholder="enter your question here" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>AI Output</Form.Label>
          <Form.Control as="textarea" rows={3} readOnly />
        </Form.Group>
      </Form>
    </>
  );
}

export default App;
