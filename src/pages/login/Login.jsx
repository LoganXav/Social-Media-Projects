import './login.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/authContext'

const Login = () => {

    const [inputs, setInputs] = useState({      // creating a state for our input values that will be set in the register input fields
        username: "",        
        password: ""       
    })  

    const [err, setErr] = useState(null)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))   //[e.target.name] gives us access to the unique input fields even though they have the same triggers
    }

    const { login } = useContext(AuthContext)

    const handleLogin = async (e) => {
        e.preventDefault()
        try{
            await login(inputs)
            navigate("/")
        } catch(err){
            
            setErr(err.response.data)
        }
    }

  return (
    <div className='login'>
        <div className="card">
            <div className="left">
                <h1>Welcome Back.</h1>
                <p>
                    It's another day to serve soldier.
                </p>
                <span>Don't you have an account?</span>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form action="">
                    <input type="text" placeholder='Username' name='username' onChange={handleChange}/>
                    <input type="password"  placeholder='Password' name='password' onChange={handleChange}/>
                    {err && err}
                    <button onClick={handleLogin}>Login</button>
                   
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
