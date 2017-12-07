import React from "react";
import {Switch, Route} from "react-router-dom";
import {connect} from "react-redux";

import Navbar from "./Navbar";
import Home from "./Home";
import Book from "./Book";
import BookDetail from "./BookDetail";
import MyList from "./MyList";
import NotFound from "./NotFound";



export default function App() {
  return(
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/book" component={Book} />
        <Route path="/book-detail/:book" component={BookDetail} />
        <Route exact path="/my-list" component={MyList} />
        <Route path="/" component={NotFound} />
      </Switch>
    </main>
  )
}
