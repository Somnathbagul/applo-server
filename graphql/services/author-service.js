import axios from 'axios';

const baseRESTUrl='http://localhost:5000/posts';

export function getPosts(){

    axios.get(baseRESTUrl)
    .then(response => console.log('total no of posts : ', response.data.length));
}