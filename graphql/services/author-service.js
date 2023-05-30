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



export async function deleteAuthorDetails(id){
    const url=`http://localhost:5000/authors/${id}`;
    var response = await axios.delete(url);
    return response.data.message("authordetails deleted");
}

export async function addAuthorDetails(id, name, biography){
    const url=`http://localhost:5000/authors`;

    var response = await axios.post(url, { 
        id:id, 
        name:name,
        biography:biography
    });
    return response.data;

}

export async function updateAuthorDetails(id, name, biography){
    const url = 'http://localhost:5000/authors'; 
    try {
      const response = await axios.patch(url, {
        id: id,
        name: name,
        biography: biography
      });
  
      console.log('Author details updated successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error updating author details:', error.message);
    }
  }