import React from 'react';

const BookList = ({ books, addReview }) => {
    return (
        <div>
            <h2>Book List</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <h3>{book.title}</h3>
                        <button onClick={() => addReview(book.id, 'A great book!')}>
                            Add Review
                        </button>
                        <ul>
                            {book.reviews.map((review, index) => (
                                <li key={index}>{review}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
