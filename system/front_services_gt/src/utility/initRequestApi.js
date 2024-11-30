import axios from "axios";

const InstanceAxios=axios.create({
    baseURL:`http://localhost:4000/`,
})


export default InstanceAxios ;