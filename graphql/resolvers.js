//import books from './data/books.js';
//import authors from './data/authors.js';
import {getAllAuthors, getAuthorById} from './services/author-service.js';
import {getAllBooks,getBookById, deleteBookById} from './services/book-service.js';
const resolvers={

    Query:{

        books: ()=>{  return getAllBooks();   },
        book: (_, args)=>{
              return getBookById(args.id);
        } ,
        deleteBook:(_, args)=>{
           return deleteBookById(args.id);
        },
        recommendedBooks: ()=>{  return books[0];     },
        authors: ()=>{
           return getAllAuthors(); 
           
         },
        author:(_, args)=>{
             return  getAuthorById(args.id);
        }


    },

    Mutation:{
        addAuthor(_,args) {return null},
        addBook(_,args) {return null},         
    }

};


export default resolvers;