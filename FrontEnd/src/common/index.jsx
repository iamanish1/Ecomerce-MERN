// Assuming this is in '../common.js'
const SumaryApi = {
    Singup: {
        url: "http://localhost:3000/api/signup",
        method: "POST",
    },

    Singin :  {
        url: "http://localhost:3000/api/signin",
        method : "POST"
     },
     userLogout : {
        url : "http://localhost:3000/api/logout",
        method : "GET",
     }
};

export default SumaryApi;
