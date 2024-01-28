class Movie {
  constructor(title, genre, availableCopies) {
    this.title = title;
    this.genre = genre;
    this.availableCopies = availableCopies;
    this.rentedCopies = 0;
  }

  rent() {
    if (this.availableCopies > 0) {
      this.availableCopies--;
      this.rentedCopies++;
      console.log(`Successfully rented "${this.title}". Enjoy your movie!`);
    } else {
      console.log(`Sorry, "${this.title}" is currently not available for rent.`);
    }
  }

  returnMovie() {
    if (this.rentedCopies > 0) {
      this.availableCopies++;
      this.rentedCopies--;
      console.log(`"${this.title}" has been returned. Thank you for using our service.`);
    } else {
      console.log(`All copies of "${this.title}" are currently available. No need to return.`);
    }
  }
}

class MovieStore {
  constructor() {
    this.movies = [];
  }

  addMovie(movie) {
    this.movies.push(movie);
    console.log(`"${movie.title}" has been added to the movie store.`);
  }

  rentMovie(title) {
    const movie = this.findMovie(title);
    if (movie) {
      movie.rent();
    } else {
      console.log(`Movie "${title}" not found in the movie store.`);
    }
  }

  returnMovie(title) {
    const movie = this.findMovie(title);
    if (movie) {
      movie.returnMovie();
    } else {
      console.log(`Movie "${title}" not found in the movie store.`);
    }
  }

  findMovie(title) {
    return this.movies.find(movie => movie.title === title);
  }

  displayMovies() {
    console.log("Available Movies:");
    this.movies.forEach(movie => {
      console.log(`"${movie.title}" - ${movie.genre} - Available Copies: ${movie.availableCopies}`);
    });
  }
}

// Example usage
const movieStore = new MovieStore();

const movie1 = new Movie("Aquman", "Sci-Fi", 5);
const movie2 = new Movie("Bset way to die", "Drama", 3);
const movie3 = new Movie("A man called God", "Action", 8);

movieStore.addMovie(movie1);
movieStore.addMovie(movie2);
movieStore.addMovie(movie3);

movieStore.displayMovies();

movieStore.rentMovie("Inception");
movieStore.rentMovie("Best way to die");
movieStore.rentMovie("Non-existent Movie");

movieStore.displayMovies();

movieStore.returnMovie("Inception");
movieStore.returnMovie("Non-existent Movie");

movieStore.displayMovies();
