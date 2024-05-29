import React from 'react'
import { Link } from 'react-router-dom'

const ResetPassword = () => {
  return (
    <div className='w-full max-w-sm mx-auto py-4'>
                    <form   className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
            <h1 className='text-blue-500 font-bold text-xl mb-2'>Reset Password</h1>
        
            <div className="mb-4">
                {/* <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                Email
                </label> */}
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email"/>
            </div>
            <div className="mb-6">

                <p className="text-red-500 text-sm italic ">Go back to Sign In<span className='px-2'><Link className='font-bold	no-underline bg-red-500 text-white rounded-full	px-3 py-1 ' id='link' to='/SignIn'>Sign In</Link></span></p>
            </div>
            <div className="flex items-center justify-between">
                <button id='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Reset Password
                </button>

        
            </div>
            </form>
    </div>
  )
}

export default ResetPassword