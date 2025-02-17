// AddDepart.js
import React, { useState } from 'react';
import Navbar from "../component/frequentcomponent/Navbar";
import APIServerData from '../utility/InitApierverData';

import Sucsess from '../utility/Notfication/Sucsess';
import Erorr from '../utility/Notfication/Erorr';

import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

function AddDepart() {
    const [departmentName, setDepartmentName] = useState('');
    const {forUniversity}=jwtDecode(Cookies.get(`token`));

    const handleAddDepartment = async (e) => {
        e.preventDefault();

        try {
            await APIServerData.post('/depart/addgroup',{departs:[departmentName],idUni:forUniversity});
            setDepartmentName('');
            Sucsess('add new department')
        } catch (error) {
            Erorr(error)
            // Handle error
        }
    };

    return (
        <div className="h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
                <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
                    <h1 className="text-2xl font-bold mb-4 text-center text-p4">Add New Department</h1>
                    <form onSubmit={handleAddDepartment}>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="departmentName">Department Name</label>
                            <input
                                type="text"
                                id="departmentName"
                                value={departmentName}
                                onChange={(e) => setDepartmentName(e.target.value)}
                                required
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                        >
                            Add Department
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddDepart;
