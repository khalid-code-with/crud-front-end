// // import React, { useState } from 'react'
// //  import { useNavigate } from 'react-router-dom';
// // export default function Register() {
// //     const navigate=useNavigate();
// //       const[input,setinput]=useState({
// //         name:"",
// //         email:"",
// //         password:""
// //       });
// //         const handlesubmit=(e)=>{
// //             e.preventdefault();
// //             localStorage.setItem("user",JSON.stringify(input));
// //             navigate("/login")
// //         }
// //   return (
// //     <div className='mask d-flex align-item-center h-100 gradient-custom-3'>
// //         <div className='container h-100'>
// //             <div className='row d-flex justify-content align-items h-100'>
// //                 <div className='col-12 col-md-9 col-1g -7col-kl-6'>
// //                     <div className='card' style={{borderRadius:"15px"}}>
// //                         <div className='card-body p-5'>
// //                             <h2 className='text-uppercase text-center mb-5'>
// //                                 Create an account
// //                             </h2>
// //                             <form action="" onSubmit={handlesubmit}>
// //                                 <div className='form-outline mb-4'>
// //                                     <input
// //                                     name="name"
// //                                     value={input.name}
// //                                     onChange={(e)=>setinput(
// //                                         {...input,[e.target.name] :e.target.value})}
// //                                      type="text"
// //                                     id='form3examplelcg'
// //                                     className='form="formcontrol for-control-lg' />
// //                                     <label htmlFor="" className='form-label'htmlFor="formexamplelcg">
// //                                         your name
// //                                     </label>
// //                                      <div className='form-outline mb-4'>
// //                                         <input 
// //                                          name="email"
// //                                          value={input.email}
// //                                          onChange={(e)=>setinput(
// //                                              {...input,[e.target.name] :e.target.value})}
// //                                         type='email'
// //                                         id='formexample3clg'
// //                                         className='form-label' htmlFor="formexample3cl"></input>
// //                                         <label htmlFor=""className='form-label'htmlFor="formexample3cl">
// //                                             Your email
// //                                         </label>

// //                                      </div>
// //                                      <div className='form-outline mb-4'>
// //                                      <input 
// //                                          name="password"
// //                                          value={input.password}
// //                                          onChange={(e)=>setinput(
// //                                              {...input,[e.target.name] :e.target.value})}
// //                                         type='password'
// //                                         id='formexample3clg'
// //                                         className='form-label' htmlFor="formexample3cl"></input>
// //                                      </div>
// //                                      <label className='form-label'htmlFor="formexample3cl">
// //                                             password
// //                                         </label>
// //                                 </div>
// //                                 <div className='d-flex justify-content-center'>
// //                                     <button type='submit'
// //                                     className='btn btn-success btn-block btn-lg fradient-custom-4 text-body text-white'>
// //                                           Register

// //                                     </button>
                                  
// //                                 </div>
// //                                  <p className='text-center text-muted mt-5 mb-0'>
// //                                     Have already an account
// //                                     <a href="/login" className='fw-bold text-body'>
// //                                     <u>login here</u>
// //                                     </a>
// //                                  </p>

// //                             </form>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
     
// //     </div>
// //   )
// // }
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Register() {
//     const navigate = useNavigate();
//     const [input, setInput] = useState({
//         name: "",
//         email: "",
//         password: ""
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         localStorage.setItem("user", JSON.stringify(input));
//         navigate("/login");
//     }

//     return (
//         <div className='mask d-flex align-items-center h-100 gradient-custom-3'>
//             <div className='container h-100'>
//                 <div className='row d-flex justify-content-center align-items-center h-100'>
//                     <div className='col-12 col-md-9 col-lg-7'>
//                         <div className='card' style={{ borderRadius: "15px" }}>
//                             <div className='card-body p-5'>
//                                 <h2 className='text-uppercase text-center mb-5'>
//                                     Create an account
//                                 </h2>
//                                 <form action="" onSubmit={handleSubmit}>
//                                     <div className='form-outline mb-4'>
//                                         <input
//                                             name="name"
//                                             value={input.name}
//                                             onChange={(e) => setInput(
//                                                 { ...input, [e.target.name]: e.target.value }
//                                             )}
//                                             type="text"
//                                             id='form3examplelcg'
//                                             className='form-control form-control-lg'
//                                         />
//                                         <label htmlFor="form3examplelcg" className='form-label'>
//                                             Your name
//                                         </label>
//                                     </div>
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
//                                             Register
//                                         </button>
//                                     </div>
//                                     <p className='text-center text-muted mt-5 mb-0'>
//                                         Have already an account?
//                                         <a href="/login" className='fw-bold text-body'>
//                                             <u>Login here</u>
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

export default function Register() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/login");
    }

    return (
        <div className='mask d-flex align-items-center h-100 gradient-custom-3'>
            <div className='container h-100'>
                <div className='row d-flex justify-content-center align-items-center h-100'>
                    <div className='col-12 col-md-8 col-lg-6'>
                        <div className='card' style={{ borderRadius: "15px" }}>
                            <div className='card-body p-5'>
                                <h2 className='text-uppercase text-center mb-4'>
                                    Create an account
                                </h2>
                                <form onSubmit={handleSubmit}>
                                    <div className='form-outline mb-3'>
                                        <label htmlFor="form3examplelcg" className='form-label'>
                                            Your name
                                        </label>
                                        <input
                                            name="name"
                                            value={input.name}
                                            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                            type="text"
                                            id='form3examplelcg'
                                            className='form-control form-control-lg'
                                        />
                                    </div>
                                    <div className='form-outline mb-3'>
                                        <label htmlFor="formexample3clg" className='form-label'>
                                            Your email
                                        </label>
                                        <input
                                            name="email"
                                            value={input.email}
                                            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                            type='email'
                                            id='formexample3clg'
                                            className='form-control form-control-lg'
                                        />
                                    </div>
                                    <div className='form-outline mb-3'>
                                        <label htmlFor="formexample3clg" className='form-label'>
                                            Password
                                        </label>
                                        <input
                                            name="password"
                                            value={input.password}
                                            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                            type='password'
                                            id='formexample3clg'
                                            className='form-control form-control-lg'
                                        />
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <button type='submit' className='btn btn-success btn-block btn-lg gradient-custom-4 text-body text-white'>
                                            Register
                                        </button>
                                    </div>
                                    <p className='text-center text-muted mt-4 mb-0'>
                                        Already have an account? 
                                        <a href="/login" className='fw-bold text-body'>
                                            <u>Login here</u>
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

