// pages/About.jsx (updated with personalized content)
import React from "react";

export default function About() {
  return (
    <section className="section about-section">
      <h1 className="section-title">About MixMaster</h1>
      <p>
        Welcome to MixMaster, your personal cocktail companion! I created this application 
        to solve a common problem: finding the perfect cocktail recipe for any occasion. 
        Whether you're hosting a party, enjoying a quiet evening, or looking to impress 
        guests, MixMaster helps you discover delicious drink recipes.
      </p>
      <p>
        As a cocktail enthusiast myself, I often found it challenging to remember all the 
        ingredients for my favorite drinks or discover new ones that matched my taste. 
        That's why I built MixMaster - to create a personalized collection of cocktail 
        recipes that I love and want to share with others.
      </p>
      <p>
        This application uses TheCocktailDB API to fetch thousands of cocktail recipes, 
        and allows you to save your favorites for quick access. The clean, intuitive 
        interface makes it easy to search for cocktails by name, explore different 
        categories, and view detailed instructions for preparation.
      </p>
      <p>
        MixMaster represents my journey into web development, combining my passion for 
        coding with my interest in mixology. I hope you enjoy using it as much as I enjoyed 
        creating it!
      </p>
    </section>
  );
}