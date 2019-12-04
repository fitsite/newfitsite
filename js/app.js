

/////Global variable
var targetPass;

//  Array
var calories = 0 ;
var Fitness = [];
var workout = [];
var quantities = [];
var advices = [];
// var advices = [];
var form = document.getElementById('fitPlan');
var sectionEl = document.getElementById('response');
var sectionUl = document.getElementById('health');

//  Constructor
function Plan(name, age, weight, height, activitiesHours, target) {
  this.name = name;
  this.age = age;
  this.weight = weight;
  this.height = height;
  this.activitiesHours = activitiesHours;
  this.target = target;
  targetPass = this.target;
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
    workout.push('Each exercise 3 sets and 10 reps','Barbell Squat', 'ABS sit-up','Chest butterfly','Leg press','Push-ups','Plank "35sec"','Lunge');
  }
  else if (18 <= this.age < 40) {
    workout.push('Each exercise 4 sets and 12 reps','Barbell Squat', 'ABS sit-up','Chest butterfly','Leg press','Push-ups','Plank "60sec"','Lunge');
  } else if (40 <= this.age) {
    workout.push('Each exercise 3 sets and 10 reps','Barbell Squat', 'ABS sit-up','Chest butterfly','Leg press','Push-ups','Plank "30sec"','Lunge');
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
var Protein = 0;
var carbs = 0;
var fats = 0;

// console.log('calories', calories)
// function to calculate the Protein, carbohydrates and fats
// var x;
Plan.prototype.rateCalculate = function () {
  // x = 10 ;
  // console.log(x);
  // this if statemennt work if the lose checkbox of the form is checked.
  // console.log(this.target);
  if (this.target == 'lose' || this.target == 'l'){
    calories = this.caloriesPerDay - 200;
    Protein = (calories * 0.45) / 6;
    carbs = (calories * 0.45) / 6;
    fats = (calories * 0.10) / 9;
  //  console.log(Protein,carbs,fats)
  }
  // this is work when the gain checkbox of the form is checked.
  else if (this.target == 'gain' || this.target == 'g'){
    calories = this.caloriesPerDay + 200 ;
    Protein = (calories * 0.25) / 6 ;
    carbs = (calories * 0.5) / 6;
    fats = (calories * 0.25) / 9 ;
  }
  // this is work when the maintenance checkbox of the form is checked.
  else if (this.target == 'maintenance' || this.target == 'm'){
    calories = this.caloriesPerDay ;
    Protein = (calories * 0.5) / 6;
    carbs = (calories * 0.4) / 6;
    fats = (calories * 0.1) / 9;
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

  ///////////CHANGES WERE MADE HERE/////////////////////////
  ///////////BUTTON ADDED


  // if (target === 'lose') {
  //   var sectionNew = document.getElementById('health');
  //   var loseP = document.createElement('p');
  //   loseP.textContent = 'TESTING OUR CONTENT I WANT TO LOSE WEIGHT';
  //   sectionNew.appendChild(loseP);
  //   console.log(loseP);}




  // var buttonToHealth = document.createElement('button');

  // buttonToHealth.textContent = 'Take Your Advice';
  switch (target) {
  case 'lose':

    var buttonToHealth = document.createElement('button');
    sectionEl.appendChild(buttonToHealth);
    var link = document.createElement('a');
    link.textContent = 'To Lose weight >>';
    link.setAttribute('href', 'lose.html');
    buttonToHealth.appendChild(link);
    break;


  case 'gain':
    var buttonToHealth = document.createElement('button');
    sectionEl.appendChild(buttonToHealth);
    var link = document.createElement('a');
    link.textContent = ' Steps To How Gain weight>>';
    link.setAttribute('href', 'gain.html');
    buttonToHealth.appendChild(link);
    break;

     case 'maintenance':
    var buttonToHealth = document.createElement('button');
    sectionEl.appendChild(buttonToHealth);
    var link = document.createElement('a');
    link.textContent = 'How To Keep Fit >>';
    link.setAttribute('href', 'main.html');
    buttonToHealth.appendChild(link);
    break;
    default:
      alert (' Please Tell Us What You Need, How We Can Help  You ?!');
    break;

  }
  // var link = document.createElement('a');
  // link.textContent = 'Take Your Advice';

  /////if/switch (target === lose)
  // link.setAttribute('href', 'health.html');
  // buttonToHealth.appendChild(link);
  // buttonToHealth.setAttribute ('action',"health.html")

  ///////////CHANGES WERE MADE HERE/////////////////////////
}



// caloriesCalculation();
// suitableWeight();
// rateCalculate();
// programWorkOut();
// console.log(this.target.lose.checked);
form.addEventListener('submit', handleSubmit);

//function for rendering
Plan.prototype.render = function(){
  var pEl = document.createElement('p');
  sectionEl.appendChild(pEl);
  pEl.textContent = 'Nice to meet you /${this.name}.';

  var pEl = document.createElement('p');
  sectionEl.appendChild(pEl);
  pEl.textContent = 'Depending on your information you need ${this.caloriesPerDay} calories a day';

  var pEl = document.createElement('p');
  sectionEl.appendChild(pEl);
  pEl.textContent = 'Because you worked ${this.activitiesHours} hour a day.';

  var pEl = document.createElement('p');
  sectionEl.appendChild(pEl);
  pEl.textContent = 'your perfect weight should be ${this.perfectWeight} kg.';

  var pEl = document.createElement('p');
  sectionEl.appendChild(pEl);
  pEl.textContent = 'This is a special workout for you!';
  for (var i = 0; i <= workout.length - 1; i++){
    var liEl = document.createElement('li');
    liEl.textContent = (workout[i]);
    sectionEl.appendChild(liEl);
    // console.log(Fitness.name);
    // console.log(Plan.caloriesPerDay);
  }

};
// console.log(Fitness.name);
// console.log(Plan.caloriesPerDay);

// }}
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
///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////health page////////////////////////////////////////////////////////




// advices.push (
//   '1.Write down what you eat for one week, and you will lose weight',
//   '2.Add a little padding number of daily calories you think you’re eating',
//   '3.Get an online weight loss buddy to lose more weight.',
//   '4.After breakfast, stick to water.',
//   '5.Wait until your stomach rumbles before you reach for food.',
//   '6.Spend ten minutes a day walking up and down stairs and Walk five minutes for at least every two hours.',
//   '7.Try to avoid prepared food.',
//   '8.Eat 90 percent of your meals at home.',
//   '10.Avoid white foods.'
// );

// if (targetPass === 'gain'){
//   advices.push (
//     '1.Eat More Calories Than Your Body Burns The most important thing you can do to gain weight is to create a calorie surplus, meaning you eat more calories than your body needs.',
//     '2.Eat Plenty of Protein The single most important nutrient for gaining healthy weight is protein.Muscle is made of protein and without it most of those extra calories may end up as body fat',
//     '3.Fill up on Plenty of Carbs and Fat and Eat at Least 3 Times per Day',
//     '4.Dont Skip Breakfast.',
//     '5.Lift Heavy Weights and Improve Your Strength',
//     '6.Eat More of Your Favorite Foods.',
//     '7.Alot of prepared food.',
//     '8.Use Herbs and Spices.',
//     '10.Alot of white foods.'


//   );
//   console.log(advices);
// }
// if (targetPass === 'maintenance') {
//   advices.push (
//     '1. Exercise Often:It may help you burn off some extra calories.',
//     '2.Try Eating Breakfast Every Day.',
//     '3.Eat Lots of Protein:since protein can help reduce appetite and promote fullness.',
//     '4.Weigh Yourself Regularly:keeping you aware of your progress and behaviors.',
//     '5.Be Mindful of Your Carb Intake.',
//     '6. Stay Hydrated:Drinking water is helpful for weight maintenance for a few reasons.',
//     '7. Eat Plenty of Vegetables.',
//     '8.Control Stress Levels.'
//   );  console.log(advices);
// }

// function for rendering health page

// var ulEl = document.createElement('ul');
// sectionUl.appendChild(ulEl);
// ulEl.textContent = 'Hi \${this.name}, You need to be careful about your life style, Here is a few advices for you :';
// for (var i=0; i <= workout.length-1; i++){
//   var liEl = document.createElement('li');
//   liEl.textContent = (advices[i]);
//   sectionUl.appendChild(liEl);
// }
