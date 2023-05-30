import axios from 'axios';

const baseRESTUrl='http://localhost:5000/books';

export async function getAllBooks(){
    var response = await axios.get(baseRESTUrl);
    //console.log('response.status', response.status);
    return response.data;
}

export async function getBookById(id){
    const url=`${baseRESTUrl}/${id}`;

    var response = await axios.get(url);
   // console.log('response.status', response.status);
    return response.data;
}

// export async function getBookByAuthor(authorId){
//     const url=`${baseRESTUrl}/${authorId}`;

//     var response = await axios.get(url);
//    // console.log('response.status', response.status);
//     return response.data;
// }

export async function deleteBookById(id){
    const url=`${baseRESTUrl}/${id}`;
    var response = await axios.delete(url);
    return response.data;
}

export async function addBookDetails(id,title,authorId,price,rating,description){
    var response = await axios.post(baseRESTUrl,{
        id:id,
        title:title,
        authorId:authorId,
        price:price,
        rating:rating,
        description:description
    });
    //console.log('response.status', response.status);
    return response.data;
}