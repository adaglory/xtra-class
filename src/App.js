import Home from "./home";
import Login from "./login";
import fire from "./firebase";
import {useState, useEffect} from 'react'

function App() {
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const clearInputs = () =>{
    setEmail('')
    setPassword('')
  }
  const clearErrors = () =>{
  setEmailError('')
  setPasswordError('')
  }
  const handleLogin = () =>{
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((err)=>{
      switch (err.code){
        case "auth/invalid-email":
          case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
              case "auth/wrong-password":
                setPasswordError(err.message);
                break;
                
      }
    });
 };

const handleSignUp = () =>{
  clearErrors();
fire
.auth()
.createUserWithEmailAndPassword(email, password)
.catch((err)=>{
  switch (err.code){
    case "auth/invalid-email":
      case "auth/email-already-in-use":
          setEmailError(err.message);
          break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
    });
}

useEffect(()=>{
const authListener = () =>{
  fire.auth().onAuthStateChanged((user)=>{
    if(user){
      clearInputs();
      setUser(user);
    } else{
      setUser("")
    }
  })
}
authListener();
},[]);
  return (
      <div>
        {user ?(<Home />):(
          <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleSignUp={handleSignUp} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError} />
        )}
        
         
      </div>
    
  );
}

export default App;
