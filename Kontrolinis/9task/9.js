/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
      this.movieTitle = title;
      this.movieDir = director;
      this.movBudget = budget;
    }
    wasExpensive = function () {
      let highBudget = 1e8;
      let comparison = (this.movBudget > highBudget) ? console.log(true) : console.log(false);
      return comparison;
    }
  };
  
  let myMovie = new Movie("Terminator2:JudgmentDay", "James Cameron", 1.2e8);
  myMovie.wasExpensive();