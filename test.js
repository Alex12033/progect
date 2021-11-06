const howMany = +prompt("How many films you see?");

const personalMovieDB = {
    count: howMany,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("Last movies which you see", ""),
      b = +prompt("Please to grade film from 1 to 10"),
      c = prompt("Last movies which you see", ""),
      d = +prompt("Please to grade film from 1 to 10");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


