const acomplishments = document.querySelectorAll('.card-body__done')
const goals = document.querySelectorAll('.card-body__goal')
const allAcomplishmentOutputs = document.querySelectorAll('.card-body__done-percentage');
const allMonthsLinesDone = document.querySelectorAll('.card-footer__lines-done');

const numberOfGoals = 9;

const month1 = generateMonth(goals, acomplishments, 1, numberOfGoals);
const month2 = generateMonth(goals, acomplishments, 2, numberOfGoals)
const month3 = generateMonth(goals, acomplishments, 3, numberOfGoals)
const month4 = generateMonth(goals, acomplishments, 4, numberOfGoals)
const month5 = generateMonth(goals, acomplishments, 5, numberOfGoals)
const month6 = generateMonth(goals, acomplishments, 6, numberOfGoals)

const allGoalsList = allGoals();
const allAcomplishmentsList = allAcomplishments();



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



function generateMonth(goals, acomplishments, numberOfMonth, numberOfGoals){

  if(numberOfMonth === 1){
    const month = new Month(goals[0].value, goals[1].value, goals[2].value, goals[3].value, goals[4].value, goals[5].value, goals[6].value, goals[7].value, goals[8].value, acomplishments[0].value, acomplishments[1].value, acomplishments[2].value, acomplishments[3].value, acomplishments[4].value, acomplishments[5].value, acomplishments[6].value, acomplishments[7].value, acomplishments[8].value)
    return month;

  } else{
    const month = new Month(goals[(numberOfMonth - 1) * numberOfGoals].value, goals[(numberOfMonth - 1) * numberOfGoals + 1].value, goals[(numberOfMonth - 1) * numberOfGoals +2].value, goals[(numberOfMonth - 1) * numberOfGoals +3].value, goals[(numberOfMonth - 1) * numberOfGoals +4].value, goals[(numberOfMonth - 1) * numberOfGoals +5].value, goals[(numberOfMonth - 1) * numberOfGoals +6].value, goals[(numberOfMonth - 1) * numberOfGoals +7].value, goals[(numberOfMonth - 1) * numberOfGoals +8].value, acomplishments[(numberOfMonth - 1) * numberOfGoals].value, acomplishments[(numberOfMonth - 1) * numberOfGoals +1].value, acomplishments[(numberOfMonth - 1) * numberOfGoals +2].value, acomplishments[(numberOfMonth - 1) * numberOfGoals +3].value, acomplishments[(numberOfMonth - 1) * numberOfGoals +4].value, acomplishments[(numberOfMonth - 1) * numberOfGoals +5].value, acomplishments[(numberOfMonth - 1) * numberOfGoals +6].value, acomplishments[(numberOfMonth - 1) * numberOfGoals +7].value, acomplishments[(numberOfMonth - 1) * numberOfGoals +8].value)
    return month;
  }  
}




function changeOutputColor(llAcomplishmentOutputs, acomplishmentPercentage){
  if(acomplishmentPercentage < 100){
    llAcomplishmentOutputs.classList.add('underTheGoal')
  }
  if(acomplishmentPercentage >= 100){
    llAcomplishmentOutputs.classList.add('overTheGoal')
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
        acomplishmentPercentage = allAcomplishmentsList[i]/allGoalsList[i]*100;
      }

    allAcomplishmentOutputs[i].innerHTML = `${acomplishmentPercentage}%` 

    changeOutputColor(allAcomplishmentOutputs[i], acomplishmentPercentage);
    }
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



function displayLinesDone(){
  const linesDoneList = calculateLinesDone(numberOfGoals, allGoalsList, allAcomplishmentsList);
  for( let i = 0; i < 7; i++){
    allMonthsLinesDone[i].innerHTML = linesDoneList[i];
  }
}



function calculateTotals(acomplishments, goals, allAcomplishmentsList, allGoalsList, allAcomplishmentOutputs){
  for(let i = 0; i < numberOfGoals; i++){
    acomplishments[i+54].value = Number(allAcomplishmentsList[i]) + Number(allAcomplishmentsList[i+9]) + Number(allAcomplishmentsList[i+18]) + Number(allAcomplishmentsList[i+27])+ Number(allAcomplishmentsList[i+36])+ Number(allAcomplishmentsList[i+45])+ Number(allAcomplishmentsList[i+54]);
  }
  for(let i = 0; i < numberOfGoals; i++){
    goals[i+54].value = Number(allGoalsList[i]) + Number(allGoalsList[i+9]) + Number(allGoalsList[i+18]) + Number(allGoalsList[i+27])+ Number(allGoalsList[i+36])+ Number(allGoalsList[i+45])+ Number(allGoalsList[i+54]);
  }
}


function generateResults(){
  
  calculateTotals(acomplishments, goals, allAcomplishmentsList, allGoalsList, allAcomplishmentOutputs);
  displayLinesDone();
  showMonthGoalsAcomplishments(numberOfGoals, allGoalsList, allAcomplishmentsList);

}


generateResults();

console.log(allGoalsList, allAcomplishmentsList)

