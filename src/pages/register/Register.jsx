import './register.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {

    

    const [inputs, setInputs] = useState({      // creating a state for our input values that will be set in the register input fields
        username: "",
        email: "",
        password: "",
        name: ""
    })
    console.log(inputs)

    const [err, setErr] = useState(null)

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))   //[e.target.name] gives us access to the unique input fields even though they have the same triggers
    }

    const handleClick = async (e) => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/api/auth/register", inputs)

        }catch(err){
            setErr(err.response.data)
        }
    }


  return (
    <div className='register'>
        <div className="card">
            <div className="left">
                <h1>Xavier Institute</h1>
                <p>
                    The X-men is an elite CODM clan that was founded by Professor Charles Xavier to train mutants and help them achieve the peak of their superhuman powers in order to compete at the highest level. Join us today!
                </p>
                <span>Already have an account?</span>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form action="">
                    <input type="text" placeholder='Username' name="username" onChange={handleChange}/>
                    <input type="email"  placeholder='Email'name="email" onChange={handleChange}/>
                    <input type="password"  placeholder='Password'name="password" onChange={handleChange}/>
                    <input type="text"  placeholder='Name'name="name" onChange={handleChange}/>
                    {err && err}
                    <button onClick={handleClick}>Register</button>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register
