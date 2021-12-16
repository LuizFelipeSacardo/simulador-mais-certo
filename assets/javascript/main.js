const acomplishments = document.querySelectorAll('.card-body__done')
const goals = document.querySelectorAll('.card-body__goal')
const allAcomplishmentOutputs = document.querySelectorAll('.card-body__done-percentage');
const allMonthsLinesDone = document.querySelectorAll('.card-footer__lines-done');

const loadProfileButton = document.querySelector('#header__button');
loadProfileButton.addEventListener('click', loadProfileName);

const calculateResults = document.querySelector('#input__button');
calculateResults.addEventListener('click', generateResults);

const numberOfGoals = 9;

let allGoalsList = allGoals();
let allAcomplishmentsList = allAcomplishments();


function loadProfileName(){
  const profile = document.querySelector('#header__select').value;
  return profile;
}



function loadProfileData(profile){
  let profileName = loadProfileName();
  let data = [];
  
  data = JSON.parse(localStorage.getItem(profileName));
  if(data != null){
    allGoalsList.concat(data[0]);
    allAcomplishmentsList.concat(data[1]);
    console.log(allGoalsList)
    console.log(allAcomplishmentsList);
  }
}




function allGoals(){
  const goals = document.querySelectorAll('.card-body__goal')
  const values = []
  goals.forEach(element => {
    const value = element.value;
    values.push(value);    
  });
  return values;
}



function allAcomplishments(){
  const acomplishments = document.querySelectorAll('.card-body__done')
  const values = []
  acomplishments.forEach(element => {
    const value = element.value;
    values.push(value);    
  });
  return values;
}



function joinLists(){
  const goalPlusAcomplishment = {
    acomplishments,
    goals
  }

  goalPlusAcomplishment.acomplishments = allAcomplishmentsList;
  goalPlusAcomplishment.goals = allGoalsList;

  return goalPlusAcomplishment;
}




function saveProfileData(){
  const profile = loadProfileName();
  const data = joinLists();
  localStorage.setItem(profile, JSON.stringify(data))
}




function changeOutputColor(llAcomplishmentOutputs, acomplishmentPercentage){
  if(acomplishmentPercentage < 100){
    llAcomplishmentOutputs.classList.add('underTheGoal')
  }
  if(acomplishmentPercentage >= 100){
    llAcomplishmentOutputs.classList.add('overTheGoal')
  }
}




function calculateLinesDone(numberOfGoals, allGoalsList, allAcomplishmentsList){
  let linesDoneList = [];

  let month1LinesDone = 0;
  for(let i = 0; i < numberOfGoals; i++){
    if(allAcomplishmentsList[i]/allGoalsList[i] >= 1){
      month1LinesDone++;
    }
  }
  linesDoneList.push(month1LinesDone);

  let month2LinesDone = 0;
  for(let i = 0; i < numberOfGoals; i++){
    if(allAcomplishmentsList[i+9]/allGoalsList[i+9] >= 1){
      month2LinesDone++;
    }
  }
  linesDoneList.push(month2LinesDone);
  
  let month3LinesDone = 0;
  for(let i = 0; i < numberOfGoals; i++){
    if(allAcomplishmentsList[i+18]/allGoalsList[i+18] >= 1){
      month3LinesDone++;
    }
  }
  linesDoneList.push(month3LinesDone);
  
  let month4LinesDone = 0;
  for(let i = 0; i < numberOfGoals; i++){
    if(allAcomplishmentsList[i+27]/allGoalsList[i+27] >= 1){
      month4LinesDone++;
    }
  }
  linesDoneList.push(month4LinesDone);

  let month5LinesDone = 0;
  for(let i = 0; i < numberOfGoals; i++){
    if(allAcomplishmentsList[i+36]/allGoalsList[i+36] >= 1){
      month5LinesDone++;
    }
  }
  linesDoneList.push(month5LinesDone);

  let month6LinesDone = 0;
  for(let i = 0; i < numberOfGoals; i++){
    if(allAcomplishmentsList[i+45]/allGoalsList[i+45] >= 1){
      month6LinesDone++;
    }
  }
  linesDoneList.push(month6LinesDone);

  let totalLinesDone = 0;
  for(let i = 0; i < numberOfGoals; i++){
    if(allAcomplishmentsList[i+54]/allGoalsList[i+54] >= 1){
      totalLinesDone++;
    }
  }
  linesDoneList.push(totalLinesDone);

  return linesDoneList;
}



function displayLinesDone(linesDoneList){
  for( let i = 0; i < 7; i++){
    allMonthsLinesDone[i].innerHTML = linesDoneList[i];
  }
}



function calculateTotals(acomplishments, goals, allAcomplishmentsList, allGoalsList){
  for(let i = 0; i < numberOfGoals; i++){
    acomplishments[i+54].value = Number(allAcomplishmentsList[i]) + Number(allAcomplishmentsList[i+9]) + Number(allAcomplishmentsList[i+18]) + Number(allAcomplishmentsList[i+27])+ Number(allAcomplishmentsList[i+36]) + Number(allAcomplishmentsList[i+45])+ Number(allAcomplishmentsList[i+54]);
  }
  for(let i = 0; i < numberOfGoals; i++){
    goals[i+54].value = Number(allGoalsList[i]) + Number(allGoalsList[i+9]) + Number(allGoalsList[i+18]) + Number(allGoalsList[i+27])+ Number(allGoalsList[i+36])+ Number(allGoalsList[i+45]) + Number(allGoalsList[i+54]);
  }
}


function showMonthGoalsAcomplishments(numberOfGoals, allGoalsList, allAcomplishmentsList){
  const allAcomplishmentOutputs = document.querySelectorAll('.card-body__done-percentage');

  for(let i = 0; i < (numberOfGoals * 7); i++){

  let acomplishmentPercentage = 0; 
    if(allAcomplishmentsList[i] === 0 || allGoalsList[i] === 0){
      acomplishmentPercentage = 0;
    } else{
      if(allAcomplishmentsList[i]/allGoalsList[i] > 1.5){
        acomplishmentPercentage = 150;
      } else{
        acomplishmentPercentage = (allAcomplishmentsList[i]/allGoalsList[i])*100;
      }

    allAcomplishmentOutputs[i].innerHTML = `${acomplishmentPercentage.toFixed(2)}%` 

    changeOutputColor(allAcomplishmentOutputs[i], acomplishmentPercentage);
    }
  }
}



function calculateBoostsMultiplier(){
  const exc = document.querySelector('#boosts__exc').value;
  const exo = document.querySelector('#boosts__exo').value;
  const index = document.querySelector('#boosts__index').value;

  return 1 + Number(exc) + Number(exo) + (index * 3.3334 / 100);
}



function calculateLinesMultiplier(allGoalsListUpdated, allAcomplishmentsListUpdated){
  let linesDoneList = calculateLinesDone(numberOfGoals, allGoalsListUpdated, allAcomplishmentsListUpdated);
  let linesDoneFinal = linesDoneList[6];

  if(linesDoneFinal < 3){
    return 0;
  } if(linesDoneFinal >= 3 && linesDoneFinal <= 4){
    return 1;
  } if(linesDoneFinal > 4 && linesDoneFinal <= 5){
    return 2;
  } if(linesDoneFinal > 5 && linesDoneFinal <= 6){
    return 3;
  } if(linesDoneFinal = 7){
    return 3.5;
  } if(linesDoneFinal > 7 && linesDoneFinal <= 9){
    return 4;
  }
}



function elegibleLines(numberOfGoals, allGoalsListUpdated, allAcomplishmentsListUpdated){
  const targets = [1000, 2000, 3000, 1000, 2000, 3000, 1000, 5000, 3000];
  let elegibleLinesList  = [];
  
  for(let i = 0; i < numberOfGoals; i++){
    if(allAcomplishmentsListUpdated[i + 54] >= allGoalsListUpdated[i + 54]){
      elegibleLinesList.push(targets[i]);
    } else{
      elegibleLinesList.push(0);
    }
  }  
  return elegibleLinesList;
}



function multiplyLines(elegibleLinesList, linesMultiplier){
  let multipliedLines = [];

  elegibleLinesList.forEach(element =>{
    multipliedLines.push(element * linesMultiplier);
  })
  return multipliedLines;  
}



function applyBootsAndSum(multipliedLines, boostsMultiplier){
  let total = multipliedLines.reduce(function(total, number){
    return total + number;
  }, 0);
  return total * boostsMultiplier;
}




function generateResults(){
  saveProfileData();
  calculateTotals(acomplishments, goals, allAcomplishmentsList, allGoalsList);
  const allGoalsListUpdated = allGoals();
  const allAcomplishmentsListUpdated = allAcomplishments();  
  const linesDoneList = calculateLinesDone(numberOfGoals, allGoalsListUpdated, allAcomplishmentsListUpdated)
  displayLinesDone(linesDoneList);
  showMonthGoalsAcomplishments(numberOfGoals, allGoalsListUpdated, allAcomplishmentsListUpdated);

  const linesMultiplier = calculateLinesMultiplier(allGoalsListUpdated, allAcomplishmentsListUpdated);
  const boostsMultiplier = calculateBoostsMultiplier();
  const elegibleLinesList = elegibleLines(numberOfGoals, allGoalsListUpdated, allAcomplishmentsListUpdated);
  const multipliedLines = multiplyLines(elegibleLinesList, linesMultiplier);
  const finalValue = applyBootsAndSum(multipliedLines, boostsMultiplier);

  const finalValueOutput = document.querySelector('#results__value');
  finalValueOutput.innerHTML = finalValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

}
