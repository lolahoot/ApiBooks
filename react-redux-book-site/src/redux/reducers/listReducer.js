export function addBook(book) {
  return{
    type: 'ADD_BOOK',
    book
  }
}

export default function list(prevState = [], action) {
  switch(action.type){
    case "ADD_BOOK":
      return [...prevState, action.book];
    default:
      return prevState;
  }
}
