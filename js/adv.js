////////////////////////////////////////////////health page////////////////////////////////////////////////////////
Plan.prototype.healthAdvices = function () {
    if (target === lose) {
      advices.push (
        '1.Write down what you eat for one week, and you will lose weight',
        '2.Add a little padding number of daily calories you think you’re eating',
        '3.Get an online weight loss buddy to lose more weight.',
        '4.After breakfast, stick to water.',
        '5.Wait until your stomach rumbles before you reach for food.',
        '6.Spend ten minutes a day walking up and down stairs and Walk five minutes for at least every two hours.',
        '7.Try to avoid prepared food.',
        '8.Eat 90 percent of your meals at home.',
        '10.Avoid white foods.'
        );
        if (target === gain){
        advices.push (
          '1.Eat More Calories Than Your Body Burns The most important thing you can do to gain weight is to create a calorie surplus, meaning you eat more calories than your body needs.',
          '2.Eat Plenty of Protein The single most important nutrient for gaining healthy weight is protein.Muscle is made of protein and without it most of those extra calories may end up as body fat',
          '3.Fill up on Plenty of Carbs and Fat and Eat at Least 3 Times per Day',
          '4.Dont Skip Breakfast.',
          '5.Lift Heavy Weights and Improve Your Strength',
          '6.Eat More of Your Favorite Foods.',
          '7.Alot of prepared food.',
          '8.Use Herbs and Spices.',
          '10.Alot of white foods.'
          
          );
     if (target === maintenance) {
      advices.push (
    '1. Exercise Often:It may help you burn off some extra calories.',
    '2.Try Eating Breakfast Every Day.',
    '3.Eat Lots of Protein:since protein can help reduce appetite and promote fullness.',
    '4.Weigh Yourself Regularly:keeping you aware of your progress and behaviors.',
    '5.Be Mindful of Your Carb Intake.',
    '6. Stay Hydrated:Drinking water is helpful for weight maintenance for a few reasons.',
    '7. Eat Plenty of Vegetables.',
    '8.Control Stress Levels.'
      )
    }
    
    
    //function for rendering health page
    
    // Plan.prototype.render2= function(){
    //   var liEl = document.createElement('li');
    //   sectionEl.appendChild(liEl);
      
    //   liEl.textContent = `Hi ${this.name} Depend on your information you need to be careful about your life style, Here is a few advices for you : 
    //    ${this.healthAdvices}`;
    //   var li2El = document.createElement('li');
    //   sectionEl.appendChild(li2El);
    //   li2El.textContent= `Hope you can get your goals !:`;
    // }