import axios from 'axios';


const endPoint = 'http://localhost:3000';



const  ApiRepository = {
   login: (email,password)=>{
      console.log('this was called')
      return new Promise((resolve, reject) =>{
        axios
          .post(endPoint+'/users/login',{email:email,password:password})
          .then(res=> {resolve(res);})
          .catch(err=>reject(err))
      })

    },
    signup: (firstName,lastName,email,username,profilePic)=>{
      const data = {
        firstName:firstName,
        lastName:lastName,
        email:email,
        username:username,
        profilePic:profilePic};
      axios
        .post(endPoint+'/users/signup',data)
        .then(res=> {


        })
        .catch(err=>err)

    },






};


export default ApiRepository;
