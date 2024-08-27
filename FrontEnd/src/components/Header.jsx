import { RiSearchLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = ()=>{
    return (
        <>
        <header className="h-16 shadow-md bg-white">
        <div className="h-full container mx-auto flex items-center px-4 justify-between">
            <div className="">
            <Link to ={"/"}>
            <h2>Logo Name</h2>
            </Link>

            </div>

            <div className=" hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full
             focus-within:shadow-md pl-2">
                <input type="text" 
                 placeholder="Search your product here..."
                 className="w-full outline-none "
                 />
                 <div className="text-lg min-w-[50px] h-8 bg-red-400 flex items-center justify-center
                 rounded-r-full  ">
                <RiSearchLine />
                 </div>
            </div>

            <div className="flex items-center gap-7">
                <div className="text-3xl cursor-pointer">
                <FaRegUserCircle />
                </div>

                <div className="text-2xl relative">
                <span><FaShoppingCart /></span>
                <div>
                    <p className="text-xs bg-red-600 text-white h-5 w-5 p-1 flex items-center
                     justify-center rounded-full absolute -top-2 -right-3 ">0</p>
                </div>
                </div>

                <div>
                    <Link to={'/login'}>
                    <button className="px-3 py-1 rounded-full text-white bg-red-600 
                     hover:bg-red-700">Login</button>
                     </Link>
                </div>
            </div>
        </div>
        </header>
        </>
    )
};
export default Header ; 