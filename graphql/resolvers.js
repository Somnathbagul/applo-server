import books from './data/books.js';
import authors from './data/authors.js';
import {getPosts} from './services/author-service.js';
const resolvers={

    Query:{
        books: ()=>{  return books;   },
        book: (_, args)=>{  return books.find((book) => book.id === args.id );} ,
        recommendedBooks: ()=>{  return books[0];     },
        authors: ()=>{
            getPosts(); 
            return authors },
        author(_, args){ return {id:args.id};  }

    },

    Mutation:{
        addAuthor(_,args) {return null},
        addBook(_,args) {return null},         
    }

};


export default resolvers;