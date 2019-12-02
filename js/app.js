'use strict';
//  Array
var Fitness = [];
var workout = [];
var quantities = [];
var form = document.getElementById('fitPlan');
var sectionEl = document.getElementById('response');

//  Constructor
function Plan(name, age, weight, height, activitiesHours) {
  this.name = name;
  this.age = age;
  this.weight = weight;
  this.height = height;
  this.activitiesHours = activitiesHours;
  // this.target = target;
  this.perfectWeight = 0;
  this.caloriesPerDay = 0 ;
  Fitness.push(this);
  this.caloriesCalculation();
  this.suitableWeight();
  this.rateCalculate();
  this.programWorkOut();
}

// Function for caloriesCal by the activities Hours and weight
Plan.prototype.caloriesCalculation = function () {
  var calories = 0 ;
  if (this.activitiesHours <= 5) {
    calories = this.weight * 1.3;
    this.caloriesPerDay = calories * 24;
  }
  if (5 < this.activitiesHours < 10) {
    calories = this.weight * 1.4;
    this.caloriesPerDay = calories * 24;
  }
  if (this.activitiesHours >= 10) {
    calories = this.weight * 1.5;
    this.caloriesPerDay = calories * 24;
  }
};

// Function for workout by age and calories
Plan.prototype.programWorkOut = function () {
  if ( this.age < 18) {
    workout.push('Each exercise 3 sets and 10 reps,Barbell Squat, ABS sit-up,Chest butterfly,Leg press,Push-ups,Plank "30sec",Lunge');
  }
  else if (18 <= this.age < 40) {
    workout.push('Barbell Squat, ABS sit-up,Chest butterfly,Leg press,Push-ups,Plank "60sec",Lunge');
  } else if (40 <= this.age) {
    workout.push('Barbell Squat, ABS sit-up,Chest butterfly,Leg press,Push-ups,Plank "25sec",Lunge');
  }

};


// Function for suitable weight for the height
Plan.prototype.suitableWeight = function() {
  this.perfectWeight = (this.height - 1.02) * 100 ;
  // var bmi = this.weight / (this.height * this.height);
  // console.log(this.height);
  // console.log(bmi);
  // this.perfectWeight = 2.2 * bmi + (3.5 * bmi) * (this.height - 1.5);
  // console.log(this.perfectWeight);
};


var lose;
var gain;
var maintenance;
var Protein;
var carbs;
var fats;
var calories = 0 ;
// function to calculate the Protein, carbohydrates and fats
Plan.prototype.rateCalculate = function () {
  // this if statemennt work if the lose checkbox of the form is checked.
  if (this.target === lose){
    calories = this.caloriesPerDay - 200;
    Protein = (calories*0.35)/4;
    carbs = (calories*0.35)/4;
    fats = (calories*0.15)/9;
  }
  // this is work when the gain checkbox of the form is checked.
  if (this.target === gain){
    calories = this.caloriesPerDay +200 ;
    Protein = (calories*0.25)/4 ;
    carbs = (calories*0.5)/4 ;
    fats =  (calories*0.25)/9 ;
  }
  // this is work when the maintenance checkbox of the form is checked.
  if (this.target === maintenance){
    calories = this.caloriesPerDay ;
    Protein = (calories*0.5)/4;
    carbs = (calories*0.4)/4;
    fats = (calories*0.1)/9;
  }
  // this array is the data input for the pie chart that we use to show the values needed on a daily bases.
  quantities.push(Protein, carbs, fats);
  console.log(Protein);
  console.log(carbs);
  console.log(fats);
};

function handleSubmit(event) {
  event.preventDefault();
  var name = event.target.name.value;
  var age = parseInt(event.target.age.value);
  var weight = parseInt(event.target.weight.value);
  var height = parseFloat(event.target.height.value);
  // var lose = event.target.lose.checked;
  // var gain = event.target.gain.checked;
  // var Maintenance = event.target.Maintenance.checked;


  var activitiesHours = parseInt(event.target.activitiesHours.value);
  // var target = event.target.target.value;
  var newplan = new Plan(name,age,weight,height,activitiesHours,);
  newplan.render();
}
// console.log(this.target.lose.checked);
form.addEventListener('submit', handleSubmit);

//function for rendering
Plan.prototype.render= function(){
  var liEl = document.createElement('li');
  sectionEl.appendChild(liEl);
  // console.log(Fitness.name);
  // console.log(Plan.caloriesPerDay);
  liEl.textContent = `Nice to meet you ${this.name} Depend on your information you need ${Math.floor(this.caloriesPerDay)} calories daily , because you worked ${this.activitiesHours} hour/day, your perfect weight should be 
  ${this.perfectWeight}kg`;
  var li2El = document.createElement('li');
  sectionEl.appendChild(li2El);
  li2El.textContent= `Enjoy Our Free workOut Program: ${workout}`;

};



// Local storage
// function updateUsersName() {
//     var Users = JSON.stringify(Fitness);
//     localStorage.setItem("name", Users);
// }
// function getItem() {
//     var itemUsers = localStorage.getItem("name");
//     if (itemUsers) {
//         Fitness = JSON.parse(itemUsers);
//       }
//   }
