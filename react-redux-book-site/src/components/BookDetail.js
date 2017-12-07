import React, {Component} from "react";
import {connect} from "react-redux";
import {getBook} from "../redux/reducers/bookReducer";

const styles = {
  fontStyle: "italic",
  textAlign: "center",
  color: "white"
}

function BookDetail(props) {

    let isbn = "";

    let book = props.books.find(book => {
      isbn = Object.keys(book)[0];
      const bookIsbn = book[isbn]
      return props.match.params.book === bookIsbn.details.title
    })
    if (isbn === ""){
      return (
      <div>
        <h1 style={styles}>No Title Found</h1>
        <h2 style={styles}>No Author Found</h2>
      </div>)
    } else {
      book = book[isbn]
      return (
        <div className="container2">
          <h1 style={styles}>{book.details.title}</h1>
          <h1 style={styles}>{book.details.authors[0].name}</h1>
          <h2 style={styles}>{book.details.languages ? book.details.languages[0].key.slice(1) : null}</h2>
          <h2 style={styles}> Subjects </h2>
          <h2 style={styles}>
            {book.details.subjects ? book.details.subjects.map((subject) => {
            const isbn = Object.keys(book)[0];
            return <p style={styles}>{subject}</p>
            }) : null}
          </h2>

    </div>
      )
    }

}



export default connect(state => state, {getBook})(BookDetail)
