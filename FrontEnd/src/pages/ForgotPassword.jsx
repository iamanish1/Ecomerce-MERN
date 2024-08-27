import { useState } from 'react';
import loginicon from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { GoEyeClosed } from "react-icons/go";
import { Link } from 'react-router-dom';


const ForgotPassword = ()=>{
    const [showPassword,setShowPassword] = useState(true)
    const [showOldPassword, setOldPassword] = useState(true)
    const [data,setdata] = useState({
        OldPassword: "",
        Password : "",
    }) 
    const handelOnChange = (e)=>{
        const{name,value} = e.target
        setdata((preve)=>{
            return{
               ...preve,
               [name]:value 
            }
        })
    }
  console.log("data login",data); 

  const handelSumbit = (e)=>{
  e.preventDefault()
  }
    const setPassword = ()=>setShowPassword(
        (preve)=>!preve
    )
    const oldPassword = ()=>setOldPassword(
        (preve)=>!preve
    )

    return (
        <>
       <section id="login">
        <div className=" container mx-auto p-4 ">
            
            <div className=" bg-white p-6 w-full max-w-md mx-auto rounded shadow-md">
                  <div className='w-20 h-20 mx-auto'>
                    <img src={loginicon} alt="login icon" className=' rounded-full'/>
                  </div>
                 
                 <form className='pt-6' onSubmit={handelSumbit}>
                  
                 <div className='my-4'>
                        <label htmlFor="password">Old Password :</label>
                        <div className="bg-slate-100 p-2  flex">
                        <input type={showOldPassword? "text":"password"}
                        placeholder='enter your password' 
                        className='w-full h-full outline-none bg-transparent'
                        name='OldPassword'
                        value={data.OldPassword}
                        onChange={handelOnChange}
                        required/>
                        <div className=' cursor-pointer' onClick={oldPassword}>
                             <span>
                             {showOldPassword ? <FaEye /> : <GoEyeClosed />}
                             </span>
                        </div>
                    </div>   
                     
                    </div>
                    <div className='my-4'>
                        <label htmlFor="password"> New Password :</label>
                        <div className="bg-slate-100 p-2  flex">
                        <input type={showPassword ? "text":"password"}
                        placeholder='enter your password' 
                        className='w-full h-full outline-none bg-transparent'
                        name='Password'
                        value={data.Password}
                        onChange={handelOnChange}
                        required/>
                        <div className=' cursor-pointer' onClick={setPassword}>
                             <span>
                             {showPassword ? <FaEye /> : <GoEyeClosed />}
                             </span>
                        </div>
                    </div>
                    <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline
                     hover:text-red-700'>
                    Forgot password
                    </Link>
                    </div>

                    <button className='bg-red-600 text-white px-6 py-2 w-full max-w-[150px]
                    rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>

                 </form>
                <p className='my-5 font-sans text-sm'
                >Don`t have account ? <Link to={"/sign-up"} className=' hover:text-blue-400 hover:underline'
                >Sign Up</Link></p>
            </div>

        </div>

       </section>
        </>
    )
};
export default ForgotPassword ; 