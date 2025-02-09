import {  toast } from 'react-toastify';


function Erorr(str){
    toast.error(`${str}`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
}

export default Erorr