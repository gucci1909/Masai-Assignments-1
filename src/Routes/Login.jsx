import {useContext,useState} from 'react';
import {Navigate} from 'react-router-dom';
import {AppContext} from "../Context/AppContext"
import { Link } from "react-router-dom";

function Login() {
   const [formState,setFormState] = useState({email:"",password:""});

   const {authState,loginUser} = useContext(AppContext)

   const handleChange=(e)=>{
      const {name,value} = e.target;
      setFormState({...formState,[name]:value})
   }
   console.log(formState);

   const handleSubmit= async(e)=>{
    e.preventDefault();
    e.currentTarget.disabled = true;
    try {
      const res = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        body: JSON.stringify(formState),
        headers: {
          "Content-Type": "application/json"
        },
      })
      const data = await res.json();
      if(data.token){
        loginUser(data);
      }
      
    } catch (error) {
      
    }
    }
    if(authState.isAuth){
      return <Navigate to="/dashboard"/>
    }

  return (
    <div className="login-page">
      <h1>Login with correct credentials</h1>
        <h3>(email : "eve.holt@reqres.in" , password : "cityslicka" )</h3>
      <form className="form" data-testid="login-form">
        <div>
          <label>
            <input value={formState.email} 
            data-testid="email-input" 
            type="email" 
            placeholder="email" name="email"
            onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            <input
            value={formState.password}
              data-testid="password-input"
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button  data-testid="form-submit" type="submit" onClick={handleSubmit} >
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;