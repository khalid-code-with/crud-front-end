
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// export default function Login() {
//     const navigate = useNavigate();
//     const [input, setInput] = useState({
//         email: "",
//         password: ""
//     });

//     const handleLogin = (e) => {
//         e.preventDefault();
//         const loggedUser = JSON.parse(localStorage.getItem("user"));
//         if (input.email === loggedUser?.email && input.password === loggedUser?.password) {
//             navigate("/home");
//         } else {
//             alert("Wrong email or password");
//         }
//     };
//     return (
//         <div className='mask d-flex align-items-center h-100 gradient-custom-3'>
//             <div className='container h-100'>
//                 <div className='row d-flex justify-content-center align-items-center h-100'>
//                     <div className='col-12 col-md-9 col-lg-7'>
//                         <div className='card' style={{ borderRadius: "15px" }}>
//                             <div className='card-body p-5'>
//                                 <h2 className='text-uppercase text-center mb-5'>
//                                     Login
//                                 </h2>
//                                 <form onSubmit={handleLogin}>
//                                     <div className='form-outline mb-4'>
//                                         <input
//                                             name="email"
//                                             value={input.email}
//                                             onChange={(e) => setInput(
//                                                 { ...input, [e.target.name]: e.target.value }
//                                             )}
//                                             type='email'
//                                             id='formexample3clg'
//                                             className='form-control form-control-lg'
//                                         />
//                                         <label htmlFor="formexample3clg" className='form-label'>
//                                             Your email
//                                         </label>
//                                     </div>
//                                     <div className='form-outline mb-4'>
//                                         <input
//                                             name="password"
//                                             value={input.password}
//                                             onChange={(e) => setInput(
//                                                 { ...input, [e.target.name]: e.target.value }
//                                             )}
//                                             type='password'
//                                             id='formexample3clg'
//                                             className='form-control form-control-lg'
//                                         />
//                                         <label htmlFor="formexample3clg" className='form-label'>
//                                             Password
//                                         </label>
//                                     </div>
//                                     <div className='d-flex justify-content-center'>
//                                         <button type='submit' className='btn btn-success btn-block btn-lg gradient-custom-4 text-body text-white'>
//                                             Login
//                                         </button>
//                                     </div>
//                                     <p className='text-center text-muted mt-5 mb-0'>
//                                         Don't have an account?
//                                         <a href="/" className='fw-bold text-body'>
//                                             <u>Register here</u>
//                                         </a>
//                                     </p>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const handleLogin = (e) => {
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem("user"));
        if (input.email === loggedUser?.email && input.password === loggedUser?.password) {
            navigate("/home");
        } else {
            alert("Wrong email or password");
        }
    };

    return (
        <div className='mask d-flex align-items-center h-75 gradient-custom-3 mt-2'>
            <div className='container h-100'>
                <div className='row d-flex justify-content-center align-items-center h-100'>
                    <div className='col-12 col-md-9 col-lg-6'>
                        <div className='card' style={{ borderRadius: "15px" }}>
                            <div className='card-body p-4'>
                                <h2 className='text-uppercase text-center mb-4'>
                                    Login
                                </h2>
                                <form onSubmit={handleLogin}>
                                    <div className='form-outline mb-4'>
                                        <label htmlFor="formexample3clg" className='form-label'>
                                            Your email
                                        </label>
                                        <input
                                            name="email"
                                            value={input.email}
                                            onChange={(e) => setInput(
                                                { ...input, [e.target.name]: e.target.value }
                                            )}
                                            type='email'
                                            id='formexample3clg'
                                            className='form-control form-control-lg'
                                        />
                                    </div>
                                    <div className='form-outline mb-4'>
                                        <label htmlFor="formexample3clg" className='form-label'>
                                            Password
                                        </label>
                                        <input
                                            name="password"
                                            value={input.password}
                                            onChange={(e) => setInput(
                                                { ...input, [e.target.name]: e.target.value }
                                            )}
                                            type='password'
                                            id='formexample3clg'
                                            className='form-control form-control-lg'
                                        />
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <button type='submit' className='btn btn-success btn-block btn-lg gradient-custom-4 text-body text-white'>
                                            Login
                                        </button>
                                    </div>
                                    <p className='text-center text-muted mt-4 mb-0'>
                                        Don't have an account?
                                        <a href="/" className='fw-bold text-body'>
                                            <u>Register here</u>
                                        </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
