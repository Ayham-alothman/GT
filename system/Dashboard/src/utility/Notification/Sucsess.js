import {  toast } from 'react-toastify';

function Sucsses(str){
    toast.success(`${str}`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}

export default Sucsses;
