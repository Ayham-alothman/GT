import React, { useState } from 'react';

import APIServerData from '../utility/InitApierverData';

import Sucsess from '../utility/Notfication/Sucsess';
import Erorr from '../utility/Notfication/Erorr';


import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const AddClass = () => {

  const {forUniversity}=jwtDecode(Cookies.get(`token`));

  const [type, setType] = useState('');
  const [count, setCount] = useState(0);
  const [capacity, setCapacity] = useState(0);

  const handleSubmit = async(e) => {
    try{
        e.preventDefault();

        if(type&&count&&capacity){
            const Req=await APIServerData.post('/class/addgroup',{ClassUni:[{ type, count, capacity }],idUni:forUniversity});
        setType('');
        setCount('');
        setCapacity('');
        Sucsess(`add new class room `)
        }
    
    }
    catch(e){Erorr(e)}
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Register Activity</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
            Type
          </label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="count">
            Count
          </label>
          <input
            type="number"
            id="count"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="capacity">
            Capacity
          </label>
          <input
            type="number"
            id="capacity"
            value={capacity}
            onChange={(e) => setCapacity(Number(e.target.value))}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
