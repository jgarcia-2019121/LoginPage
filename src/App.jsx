import { IoPerson } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
const App = () => {

  const [action, setAction] = useState('Register')
  return (
    <div className="bg-banner-image bg-cover h-[100vh]">
      <div className="flex justify-center items-center h-full">
        <div className="lg:w-[450px] bg-white py-20 px-10 rounded-bl-[40px] rounded-se-[40px]">
          <h1 className="text-4xl text-orange-500 text-center mb-6 font-extrabold tracking-wide uppercase">{action}</h1>
          <div className="w-full">
            {
              action === 'Login' ? <div className="transition-all"></div> : <div className="bg-gray-200 flex items-center gap-5 my-4 p-4 rounded transition-all">
                <IoPerson className="text-gray-700 text-xl" />
                <input type="text" className="bg-transparent border-none outline-none" placeholder="Your Name" />
              </div>
            }
            <div className="bg-gray-200 flex items-center gap-5 my-4 p-4 rounded">
              <MdEmail className="text-gray-700 text-xl" />
              <input type="email" className="bg-transparent border-none outline-none" placeholder="Your Email" />
            </div>
            <div className="bg-gray-200 flex items-center gap-5 my-4 p-4 rounded">
              <RiLockPasswordFill className="text-gray-700 text-xl" />
              <input type="password" className="bg-transparent border-none outline-none" placeholder="Your Password" />
            </div>
            <div className="flex justify-center gap-8 mt-10">
              <button className={`text-xl text-white py-2 w-36 rounded-3xl ${action === 'Register' ? 'bg-blue-600' : 'bg-gray-700'}`} onClick={() => setAction('Register')}>Register</button>
              <button className={`text-xl text-white py-2 w-36 rounded-3xl ${action === 'Login' ? 'bg-blue-600' : 'bg-gray-700'}`} onClick={() => setAction('Login')}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;