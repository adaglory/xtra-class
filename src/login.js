import { Button, Container, Form, Input } from "reactstrap";
import "./css/login.css";
import xtraclass from "./images/xtra-class.png";
const Login = ({email, setEmail, password, setPassword, handleLogin, setHasAccount, hasAccount, handleSignUp, emailError, passwordError}) => {
  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='login'>
      <Container>
        <img src={xtraclass} alt='' className='login__img' />
        <div className='login__form'>
          <div className="login__header">
            {hasAccount ? (
              <><h3>Log In</h3></>
            ):(<><h3>Sign Up</h3></>)}
          </div>
          <hr />
          <Form className='login__inputs' onSubmit={handleSubmit}>
            <Input type='email' value={email} id='user' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required/>
            {emailError ? (
              <><p className="error__message">{emailError}</p></>
            ):('')}
            

            <Input type='password' value={password} id='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} required/>
              {passwordError ? (
              <><p className="error__message">{passwordError}</p></>
            ):('')}
             <div className="button__container">
               {hasAccount ? (
                 <>
            <Button color='primary' size='lg' disabled={!validateForm()} onClick={handleLogin}>
              Login
            </Button>
            <p>Don't have an account? <span onClick={()=> setHasAccount(!hasAccount)}>signUp</span></p>
               </>
               ):(
                       <>
            <Button color='primary' size='lg' disabled={!validateForm()} onClick={handleSignUp}>
              SignUp
            </Button>
            <p>Have an account? <span onClick={()=>setHasAccount(!hasAccount)}>Login</span></p>
               </>
               )}
             </div>
         
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
