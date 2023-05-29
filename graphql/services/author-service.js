import axios from 'axios';

const baseRESTUrl='http://localhost:5000/authors';

export async function getAllAuthors(){
    var response = await axios.get(baseRESTUrl);
   // console.log('response.status', response.status);
    return response.data;
}

export async function getAuthorById(id){
    const url=`http://localhost:5000/authors/${id}`;

    var response = await axios.get(url);
    //console.log('response.status', response.status);
    return response.data;

}