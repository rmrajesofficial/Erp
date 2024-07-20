import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { Images } from '../Constants/Images';

const StudentPortalLogin = () => {
  const { setIsAuthenticated } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    setIsAuthenticated(true)
  };

  return (
    <div className="h-screen w-full bg-slate-200 flex items-center justify-center">
      <div className='bg-white rounded-3xl p-4 max-w-96 w-full flex flex-col items-center shadow-sm'>
        <img src={Images.logo} alt="logo" className='size-32' />
        <h1 className="text-xl font-bold mb-4 mt-2">Student Portal</h1>

        <form onSubmit={handleSubmit} className='w-full p-4'>
          <h1 className="font-bold mb-4 mt-4">Sign In</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm  mb-2" htmlFor="username">
              Username:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              placeholder='Enrollment Number'
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm  mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder='Password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login

          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentPortalLogin;