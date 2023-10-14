export const addBook = (book) => ({
    type: 'ADD_BOOK',
    payload: book,
  });
  
  export const addReview = (id, review) => ({
    type: 'ADD_REVIEW',
    payload: {
      id,
      review,
    },
  });
  