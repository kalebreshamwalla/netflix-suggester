/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

let dramaShows = [
  "Ginny & Georgia",
  "Outlander",
  "Grey's Anatomy",
  "Ozark",
  "The Queen's Gambit",
];

let fantasyShows = [
  "Supernatural",
  "The Sandman",
  "Wednesday",
  "The Witcher",
  "Avatar: The Last Airbender",
];

let comedyShows = [
  "Arrested Development",
  "Dead to Me",
  "Seinfeld",
  "Emily in Paris",
  "The Good Place",
];

function chooseRandomGenre() {
  // Deliverable 1: Your code here 👇
  let randomNumber = getRandomNumber(0, 2);
  if (randomNumber === 0) {
    return "drama";
  } else if (randomNumber === 1) {
    return "fantasy";
  } else {
    return "comedy";
  }
}

function displayRandomShow(genre) {
  // Deliverable 2: Your code here 👇
  if (genre === "random") {
    genre = chooseRandomGenre();
  }

  let randomIndex = getRandomNumber(0, 4);

  if (genre === "drama") {
    displayShow(dramaShows[randomIndex]);
  } else if (genre === "fantasy") {
    displayShow(fantasyShows[randomIndex]);
  } else {
    displayShow(comedyShows[randomIndex]);
  }
}
