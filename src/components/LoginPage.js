import React from 'react'
import { useNavigate } from 'react-router-dom'
// import TodoListHomePage from './TodoListHomePage'

function LoginPage() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/todo');
    }
    return (
        <>
        <div style={{display:"flex", alignItems:"center", justifyItems:"center", flexDirection:"column"}} >
            <div className="mt-3">
                <h3 className="text-primary" style={{fontWeight:"bold"}}>Login</h3>

            </div>
            <form onSubmit={handleSubmit}>
                <div className="mt-6">
                    <label htmlFor="name" className='form-label'>
                        Name
                    </label>
                        <input
                            type="text"
                            className="form-control"
                            id='name'
                            name='name'
                            placeholder='Enter your Full Name'
                            style={{ width: "500px", textAlign:"center", marginBottom:"10px", fontWeight:"lighter" }}
                            required
                        />
                    <label htmlFor="email">
                        E-mail
                    </label>
                    <input
                        type="text"
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Enter your E-mail'
                            style={{ width: "500px", textAlign: "center", marginTop: "8px", marginBottom: "10px", fontWeight: "lighter" }}
                        required
                    />

                    <label htmlFor="tel">
                        Contact No.
                    </label>
                    <input
                        type="number tel"
                        id='number'
                        className='form-control'
                        name='number'
                        placeholder='Enter your Contact No.'
                        maxLength={10}
                            style={{ width: "500px", textAlign: "center", marginTop: "8px", fontWeight: "lighter" }}
                        required
                    />
                </div>
                <button className="btn btn-primary" style={{marginTop:"25px", width:"50%", marginLeft:"25%"}} >
                    Submit
                </button>
            </form>
            </div>
        </>
    )
}

export default LoginPage