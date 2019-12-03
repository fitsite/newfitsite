'use strict';
//  Array
var calories = 0 ;
var Fitness = [];
var workout = [];
var quantities = [];
var form = document.getElementById('fitPlan');
var sectionEl = document.getElementById('response');

//  Constructor
function Plan(name, age, weight, height, activitiesHours, target) {
  this.name = name;
  this.age = age;
  this.weight = weight;
  this.height = height;
  this.activitiesHours = activitiesHours;
  this.target = target;
  this.perfectWeight = 0;
  this.caloriesPerDay = 0 ;
  Fitness.push(this);
  this.caloriesCalculation();
  this.suitableWeight();
  this.rateCalculate();
  this.programWorkOut();
  // console.log(this.target)
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
    workout.push('Each exercise 3 sets and 10 reps','Barbell Squat', 'ABS sit-up,Chest butterfly','Leg press','Push-ups','Plank "30sec"','Lunge');
  }
  else if (18 <= this.age < 40) {
    workout.push('Barbell Squat', 'ABS sit-up','Chest butterfly','Leg press','Push-ups','Plank "60sec"','Lunge');
  } else if (40 <= this.age) {
    workout.push('Barbell Squat', 'ABS sit-up','Chest butterfly','Leg press','Push-ups','Plank "25sec"','Lunge');
  }
// console.log(workout)
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
// console.log('hi',workout)

var lose;
var gain;
var maintenance;
var Protein=0;
var carbs=0;
var fats=0;

// console.log('calories', calories)
// function to calculate the Protein, carbohydrates and fats
// var x;
Plan.prototype.rateCalculate = function () {
  // x = 10 ; 
  // console.log(x);
  // this if statemennt work if the lose checkbox of the form is checked.
  // console.log(this.target);
  if (this.target == 'lose' || this.target == 'l'){
    calories = this.caloriesPerDay  - 200;
    Protein = (calories*0.45)/6;
    carbs = (calories*0.45)/6;  
    fats = (calories*0.10)/9;
  //  console.log(Protein,carbs,fats)
  }
  // this is work when the gain checkbox of the form is checked.
 else if (this.target == 'gain' || this.target == 'g'){
    calories = this.caloriesPerDay +200 ;
    Protein = (calories*0.25)/6 ;
    carbs = (calories*0.5)/6;
    fats =  (calories*0.25)/9 ;
  }
  // this is work when the maintenance checkbox of the form is checked.
   else if (this.target == 'maintenance' || this.target == 'm'){
    calories = this.caloriesPerDay ;
    Protein = (calories*0.5)/6;
    carbs = (calories*0.4)/6;
    fats = (calories*0.1)/9;
  }
  
  // console.log(this.target) 
  // this array is the data input for the pie chart that we use to show the values needed on a daily bases.
  quantities.push(Protein, carbs, fats);
  console.log(Protein);
  console.log(carbs);
  console.log(fats);
  // console.log('p', Protein, 'c', carbs, 'f', fats);
  // console.log(quantities)
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
  var target = event.target.target.value;
  var newplan = new Plan(name,age,weight,height,activitiesHours, target);
  newplan.render();
}



// caloriesCalculation();
// suitableWeight();
// rateCalculate();
// programWorkOut();
// console.log(this.target.lose.checked);
form.addEventListener('submit', handleSubmit);

//function for rendering
Plan.prototype.render= function(){
  var pEl = document.createElement('p');
  sectionEl.appendChild(pEl);
  pEl.textContent = `Nice to meet you ${this.name}.` 

  var pEl = document.createElement('p');
  sectionEl.appendChild(pEl);
  pEl.textContent = `Depending on your information you need ${this.caloriesPerDay} calories a day`
  
  var pEl = document.createElement('p');
  sectionEl.appendChild(pEl);
  pEl.textContent = `Because you worked ${this.activitiesHours} hour a day.` 

  var pEl = document.createElement('p');
  sectionEl.appendChild(pEl);
  pEl.textContent = `your perfect weight should be ${this.perfectWeight} kg.` 
  
  var pEl = document.createElement('p');
  sectionEl.appendChild(pEl);
  pEl.textContent = `To show you how much we love you and support your dicision here is our free workout for you ${this.name}.`
  for (var i=0; i <= workout.length-1; i++){
  var liEl = document.createElement('li');
  sectionEl.appendChild(liEl);
  liEl.textContent= `${workout[i]}`;
  }
};
// console.log(Fitness.name);
// console.log(Plan.caloriesPerDay);



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
