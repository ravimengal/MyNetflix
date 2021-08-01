import axios from 'axios'
 
const instance = axios.create({

    //baseURL to make request to the movie database
    
baseURL :"https://api.themoviedb.org/3",

})

export default instance;
