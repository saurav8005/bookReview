const initialState = {
    books: [],
};

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return {
                ...state,
                books: [...state.books, action.payload],
            };
        case 'ADD_REVIEW':
            return {
                ...state,
                books: state.books.map(book =>
                    book.id === action.payload.id
                        ? { ...book, reviews: [...book.reviews, action.payload.review] }
                        : book
                ),
            };
        default:
            return state;
    }
};

export default booksReducer;
