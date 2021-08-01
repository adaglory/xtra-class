import { Button, Container, Form, Input } from "reactstrap";
import "./css/login.css";
import { useState } from "react";
import xtraclass from "./images/xtra-class.png";
const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const validateForm = () => {
    return user.length > 0 && password.length > 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='login'>
      <Container>
        <img src={xtraclass} alt='' className='login__img' />
        <div className='login__form'>
          <h3>Login</h3>
          <hr />
          <Form className='login__inputs' onSubmit={handleSubmit}>
            <Input type='email' name={user} id='user' placeholder='User' onChange={(e) => setUser(e.target.value)} />

            <Input type='password' value={password} id='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />

            <Button color='primary' size='lg' disabled={!validateForm()}>
              Login
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
