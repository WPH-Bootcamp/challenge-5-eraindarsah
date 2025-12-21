// Type definition for Book
type Book = {
  title: string;
  author: string;
  publicationYear: number;
};

// Array to store books
let books: Book[] = [];

/**
 * Function to add a new book to the collection
 * @param title - The title of the book
 * @param author - The author of the book
 * @param publicationYear - The publication year of the book
 * @returns void
 */
function addBook(title: string, author: string, publicationYear: number): void {
  const newBook: Book = {
    title,
    author,
    publicationYear,
  };

  books.push(newBook);
  console.log(`Book added: "${title}" by ${author} (${publicationYear})`);
}

/**
 * Function to display all stored books
 * @returns void
 */
function listBooks(): void {
  console.log('All Books:');

  books.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
  });
}

/**
 * Function to find books by title (optional parameter)
 */
function searchBook(title?: string, caseSensitive: boolean = true): void {
  if (title === undefined || title === '') {
    console.log('Please provide a title to search.');
    return;
  }

  let searchResults: Book[];

  if (caseSensitive) {
    // Case-sensitive search as required by tests
    searchResults = books.filter((book) => book.title.includes(title));
  } else {
    // Case-insensitive search for real-world use
    searchResults = books.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  console.log(`Search Results for "${title}":`);

  if (searchResults.length === 0) {
    console.log(`No books found with title containing "${title}".`);
  } else {
    searchResults.forEach((book) => {
      console.log(
        `- ${book.title} by ${book.author} (${book.publicationYear})`
      );
    });
  }
}

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
