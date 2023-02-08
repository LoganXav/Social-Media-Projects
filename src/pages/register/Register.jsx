import './register.scss'
import { Link } from 'react-router-dom'

const Register = () => {
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
                    <input type="text" placeholder='Username' />
                    <input type="email"  placeholder='Email'/>
                    <input type="password"  placeholder='Password'/>
                    <input type="password"  placeholder='Name'/>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register
