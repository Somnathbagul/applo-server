//import books from './data/books.js';
//import authors from './data/authors.js';
import {getAllAuthors, getAuthorById, addAuthorDetails, updateAuthorDetails, deleteAuthorDetails} from './services/author-service.js';
import {getAllBooks, getBookById, deleteBookById,addBookDetails} from './services/book-service.js';
const resolvers={

    Book:{
        author: async (parent) => {
            
          return await getAuthorById(parent.authorId);
        },
        //price: ()=> 0,
    },
    // Author:{
    //     book: async (parent) => {
    //       var authorId = parent.id;
    //       return await getBookByAuthor(authorId);
    //     },
    // },
    Query:{
        books: ()=>{  return getAllBooks();   },
        book: (_, args)=>{
              return getBookById(args.id);
        },
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
        addAuthor(_,args) {
            return addAuthorDetails(args.id, args.name, args.philosophy);
        },
        updateAuthor(_,args) {
            return updateAuthorDetails(args.id, args.name, args.philosophy);
        },
        deleteAuthor(_,args) {
         return deleteAuthorDetails(args.id);
        }, 
        addBook(_,args) {
            return addBookDetails(args.id, args.title, args.authorId, args.price, args.rating, args.description);
        }       
    }

};


export default resolvers;