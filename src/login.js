import { Button, Container, Form, Input } from "reactstrap";
import "./css/login.css";
import xtraclass from "./images/xtra-class.png";
const Login = () => {
  return (
    <div className='login'>
      <Container>
        <img src={xtraclass} alt='' className='login__img' />
        <div className='login__form'>
          <h3>Login</h3>
          <hr />
          <Form className='login__inputs'>
            <Input type='email' name='email' id='exampleEmail' placeholder='User' />

            <Input type='password' name='password' id='examplePassword' placeholder='Password' />

            <Button color='primary' size='lg' block>
              Login
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
