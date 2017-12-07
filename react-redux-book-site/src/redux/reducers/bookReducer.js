import axios from "axios";

export function getBook(book) {
  return {type: "GET_BOOKS", book}
}

export default function books(prevState = [], action) {
  switch (action.type) {
    case "GET_BOOKS":
      return [...prevState, action.book];
    default:
      return prevState;
  }
}
