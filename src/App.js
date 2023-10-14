import React from 'react';
import { connect } from 'react-redux';
import { addBook, addReview } from './action/book'
import BookList from './component/BookList';
import AddBook from './component/AddBook';

const App = ({ books, addBook, addReview }) => {
  return (
    <div>
      <h1>Book Review App</h1>
      <AddBook addBook={addBook} />
      <BookList books={books} addReview={addReview} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books.books,
});

export default connect(mapStateToProps, { addBook, addReview })(App);
