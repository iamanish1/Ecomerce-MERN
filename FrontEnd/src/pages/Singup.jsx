import { useState } from 'react';
import loginicon from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { GoEyeClosed } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';
import SumaryApi from '../common';
import axios from 'axios'
import { toast } from 'react-toastify';

const Singup = ()=>{
    const [showPassword,setShowPassword] = useState(false)
    const [showConfirmPassword,setConfirmShowPassword] = useState(false)
    const [data,setdata] = useState({
        email : "",
        Password : "",
        name : "",
        ConfirmPassword :"",
        profilePic : "", 
        
    }) 
    const navigate = useNavigate()

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

  const handleSumbit = async(e)=>{
  e.preventDefault() 

  

  if(data.Password === data.ConfirmPassword){
    navigate("/login")
    console.log("data:",SumaryApi.Singup.url)
    
    e.preventDefault();
      
    axios
      .post(`http://localhost:3000/api/signup` , {
        name: data.name,
        email: data.email,
        password: data.Password,
      },
      toast.success("Account create succesfully")
    )
      .then((res) => {
        if (res.data.status === 200) {
          alert("data send ....")
         
  }
   })}
else {
    toast.error("please enter Same Password")
    }

}



  
    const setPassword = ()=>setShowPassword(
        (preve)=>!preve
    )
    const setConfirmPassword= ()=>setConfirmShowPassword(
        (preve)=>!preve
    )


  return (
        <>
       <section id="Singup">
        <div className=" container mx-auto p-4 ">
            
            <div className=" bg-white p-6 w-full max-w-md mx-auto rounded shadow-md">
                  <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                    <img src={loginicon} alt="login icon" className=' rounded-full'/>
                  </div>
                 
                 <form className='pt-6' onSubmit={handleSumbit}>
                     
                 <div>
                        <label htmlFor="Name">Name :</label>
                        <div className="bg-slate-100 p-2 ">
                        <input type="text"
                        placeholder='enter your Name..' 
                        className='w-full h-full outline-none bg-transparent'
                        name='name'
                        value={data.name}
                        onChange={handelOnChange}
                        required/>
                        
                        
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email">Email :</label>
                        <div className="bg-slate-100 p-2 ">
                        <input type="Email"
                        placeholder='enter your email @gamil.com..' 
                        className='w-full h-full outline-none bg-transparent'
                        name='email'
                        value={data.email}
                        onChange={handelOnChange}
                        required/>
                        
                        </div>
                    </div>

                    <div className='my-4'>
                        <label htmlFor="password">Password :</label>
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
                   </div> 

                    <div className='my-4'>
                        <label htmlFor="password"> Confirm Password :</label>
                        <div className="bg-slate-100 p-2  flex">
                        <input type={showConfirmPassword ? "text":"password"}
                        placeholder='enter New your password' 
                        className='w-full h-full outline-none bg-transparent'
                        name='ConfirmPassword'
                        value={data.ConfirmPassword}
                        onChange={handelOnChange}
                        required/>
                        <div className=' cursor-pointer' onClick={setConfirmPassword}>
                             <span>
                             {showConfirmPassword ? <FaEye /> : <GoEyeClosed />}
                             </span>
                        </div>
                    </div>
                    </div>

                    <button className='bg-red-600 text-white px-6 py-2 w-full max-w-[150px]
                    rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Sing Up</button>

                 </form>
                <p className='my-5 font-sans text-sm'
                >Already have account ? <Link to={"/Login"} className=' hover:text-blue-400 hover:underline'
                >Login</Link></p>
            </div>

        </div>

       </section>
        </>
    )

  
};

export default Singup ; 