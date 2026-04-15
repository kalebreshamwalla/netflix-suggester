🎬 Netflix Random Show Suggester
Overview

This project is a simple web-based Netflix-style recommendation tool that suggests random TV shows based on a selected genre. Users can choose a category (Drama, Comedy, Fantasy, or Random), and the app will dynamically display a randomly selected show from that selection.

The goal of this project is to practice JavaScript fundamentals such as arrays, functions, randomization, and DOM manipulation.

Features
🎭 Select a genre from a dropdown menu
🎲 Get a completely random show suggestion
📺 Instantly display results on the webpage
🧠 Built using modular JavaScript functions
🎨 Simple frontend UI with HTML/CSS
How It Works

When a user selects a genre:

A random show is picked from that category
If “Random” is selected, the app first chooses a random genre, then selects a show from it
The selected show is displayed dynamically on the page
Project Structure
index.html – Main webpage layout
style.css – Styling for the UI
script.js – Core logic (main file you modify)
provided.js – Helper functions (prebuilt utilities)
shows.js – Show data organized by genre
Core Logic
Random Genre Selection

The app randomly selects between:

Drama
Comedy
Fantasy
Random Show Selection

Once a genre is chosen, a random show from that category is displayed using a helper random function.
