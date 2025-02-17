import axios from "axios";

const InstanceAxios=axios.create({
    baseURL:`http://localhost:4000/`,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
})


export default InstanceAxios ;