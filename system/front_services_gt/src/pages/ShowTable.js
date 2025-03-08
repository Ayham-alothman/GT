import React from 'react';

import { useSelector } from "react-redux";


function ShowTable() {

    let blobfile=useSelector((s)=>s.semster.file);

    const handleDownload = () => {
        const url = window.URL.createObjectURL(new Blob([blobfile]));
        const a = document.createElement('a');
        a.href = url;
        a.download = 'download.xlsx'; // You can customize the filename
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h1 className="text-5xl text-p4 mt-60 font-bold mb-4">Congratulations on Generating the Table!</h1>
            <button 
                onClick={handleDownload}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
                Download
            </button>
        </div>
    );
}

export default ShowTable;
