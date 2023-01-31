/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
    this.num1 = a;
    this.num2 = b;
    this.addition = function () {
      return this.num1 + this.num2;
    }
    this.subtraction = function () {
      return this.num1 - this.num2;
    }
    this.multiplication = function () {
      return this.num1 * this.num2;
    }
    this.division = function () {
      return this.num1 / this.num2;
    }
  }
  
  const calcula = new Calculator(2, 5);
  console.log(calcula.addition());
  console.log(calcula.subtraction());
  console.log(calcula.multiplication());
  console.log(calcula.division());