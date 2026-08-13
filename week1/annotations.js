"use strict";
let movieTitle = "Interstellar";
let releaseYear = 2014;
let isSciFi = true;
function getMovieRelease(title, year) {
    return `${title} is a movie released in ${year}.`;
}
let leadActors = ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Matt Damon"];
const summary = getMovieRelease(movieTitle, releaseYear);
console.log(summary);
console.log(`Starring: ${leadActors.join(", ")}`);
console.log(`Is it a Sci-Fi movie? ${isSciFi ? "Yes" : "No"}`);
