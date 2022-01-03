const acomplishments = document.querySelectorAll('.card-body__done')
const goals = document.querySelectorAll('.card-body__goal')
const allAcomplishmentOutputs = document.querySelectorAll('.card-body__done-percentage');
const allMonthsLinesDone = document.querySelectorAll('.card-footer__lines-done');
const semesterLinesAcomplished = document.querySelector('#results__main-title-value')

const loadProfileButton = document.querySelector('#header__button');
loadProfileButton.addEventListener('click', populateFields);

const calculateResults = document.querySelector('#input__button');
const headerSelect = document.querySelector('#header__select');
calculateResults.addEventListener('click', generateResults);

const numberOfGoals = 9;

let allGoalsList = allGoals();
let allAcomplishmentsList = allAcomplishments();


// Profile management functions - LOading the profile
function loadProfileName(){
  const profile = document.querySelector('#header__select').value;
  return profile;
}


function loadProfileData(){
  let allGoalsList = allGoals();
  let allAcomplishmentsList = allAcomplishments();
  let profileName = loadProfileName();
  let data = [];
  
  data = JSON.parse(localStorage.getItem(profileName));
  if(data != null){
    allGoalsList.concat(data[0]);
    allAcomplishmentsList.concat(data[1]);    
  }
  if(data === null){
    alert('Atenção, esta simulação está vazia, selecione uma simulação salva válida ou preencha os campos abaixo');
    document.location.reload(true);
  }
  return data;
}


function populateFields(){ 
  let data = loadProfileData();
  let loadedGoals = data.goals;
  let loadedAcomplishments = data.acomplishments;

  let cont = 0;
  let goalsImput = document.querySelectorAll('.card-body__goal');
  goalsImput.forEach(element => {
    element.value = loadedGoals[cont];
    cont++;  
  }) 

  let cont2 = 0;
  let acomplishmentsInput = document.querySelectorAll('.card-body__done');
  acomplishmentsInput.forEach(element => {
    element.value = loadedAcomplishments[cont2];
    cont2++;  
  }) 
}



// Saving the profille
function saveProfileData(){
  const profile = loadProfileName();

  const data = joinLists();
  localStorage.setItem(profile, JSON.stringify(data))
}


function verifySave(){
  
}


function joinLists(){
  const goalPlusAcomplishment = {
    acomplishments,
    goals
  }

  let allGoalsList = allGoals();
  let allAcomplishmentsList = allAcomplishments();

  goalPlusAcomplishment.acomplishments = allAcomplishmentsList;
  goalPlusAcomplishment.goals = allGoalsList;

  return goalPlusAcomplishment;
}



//Capturing all input values and turning it into a array
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
  semesterLinesAcomplished.innerHTML = linesDoneList[6]
}



function calculateTotals(){
  const acomplishments = document.querySelectorAll('.card-body__done')
  const goals = document.querySelectorAll('.card-body__goal')
  const allGoalsList = allGoals();
  const allAcomplishmentsList = allAcomplishments();

  for(let i = 0; i < numberOfGoals; i++){    
    acomplishments[i+54].value = Number(allAcomplishmentsList[i]) + Number(allAcomplishmentsList[i+9]) + Number(allAcomplishmentsList[i+18]) + Number(allAcomplishmentsList[i+27])+ Number(allAcomplishmentsList[i+36]) + Number(allAcomplishmentsList[i+45]);
  }
  for(let i = 0; i < numberOfGoals; i++){    
    goals[i+54].value = Number(allGoalsList[i]) + Number(allGoalsList[i+9]) + Number(allGoalsList[i+18]) + Number(allGoalsList[i+27])+ Number(allGoalsList[i+36])+ Number(allGoalsList[i+45]);
  }
}


function calculateFinalLines(){
  const acomplishments = document.querySelectorAll('.card-body__done')
  const goals = document.querySelectorAll('.card-body__goal')
  const allGoalsList = allGoals();
  const allAcomplishmentsList = allAcomplishments();

  console.log(allGoalsList)

  for(let i = 0; i < 3; i++){ 
    if(allGoalsList[i+48] > 0){
      goals[i+57].value = allGoalsList[i+48]      
    }
    if(allGoalsList[i+39] > 0){
      goals[i+57].value = allGoalsList[i+39]      
    }
    if(allGoalsList[i+30] > 0){
      goals[i+57].value = allGoalsList[i+30]      
    }
    if(allGoalsList[i+21] > 0){
      goals[i+57].value = allGoalsList[i+21]      
    }
    if(allGoalsList[i+12] > 0){
      goals[i+57].value = allGoalsList[i+12]      
    }
    if(allGoalsList[i+3] > 0){
      goals[i+57].value = allGoalsList[i+3]      
    } 
  }

  for(let i = 0; i < 3; i++){ 
    if(allAcomplishmentsList[i+48] > 0){
      acomplishments[i+57].value = allAcomplishmentsList[i+48]
    }
    if(allAcomplishmentsList[i+39] > 0){
      acomplishments[i+57].value = allAcomplishmentsList[i+39]
    }
    if(allAcomplishmentsList[i+30] > 0){
      acomplishments[i+57].value = allAcomplishmentsList[i+30]
    }
    if(allAcomplishmentsList[i+21]> 0){
      acomplishments[i+57].value = allAcomplishmentsList[i+21]
    }
    if(allAcomplishmentsList[i+12]> 0){
      acomplishments[i+57].value = allAcomplishmentsList[i+12]
    }
    if(allAcomplishmentsList[i+3] > 0){
      acomplishments[i+57].value = allAcomplishmentsList[i+3]
    }        
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

    if(acomplishmentPercentage){
      allAcomplishmentOutputs[i].innerHTML = `${acomplishmentPercentage.toFixed(0)}%`   
      changeOutputColor(allAcomplishmentOutputs[i], acomplishmentPercentage);   
      } else{
        allAcomplishmentOutputs[i].innerHTML = `-`
      }
    }
  }
}


function elegibleLines(numberOfGoals, allGoalsListUpdated, allAcomplishmentsListUpdated){
  const targets = [2550, 1020, 1020, 1020, 1020, 1020, 1020, 1020, 510];
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




//calculating Multipliers and Boots
function calculateLinesMultiplier(allGoalsListUpdated, allAcomplishmentsListUpdated){
  let linesDoneList = calculateLinesDone(numberOfGoals, allGoalsListUpdated, allAcomplishmentsListUpdated);
  let linesDoneFinal = linesDoneList[6];

  if(linesDoneFinal < 3){
    return 0;
  } if(linesDoneFinal === 3){
    return 1;
  } if(linesDoneFinal === 4){
    return 1.5;
  } if(linesDoneFinal === 5){
    return 2.5;
  } if(linesDoneFinal === 6){
    return 3;
  } if(linesDoneFinal === 7){
    return 3.5;
  } if(linesDoneFinal >= 8){
    return 4;
  }
}


function calculateBoostsMultiplier(){
  const exc = document.querySelector('#boosts__exc').value;
  const exo = document.querySelector('#boosts__exo').value;
  const index = document.querySelector('#boosts__index').value;

  return 1 + Number(exc) + Number(exo) + (index * 3.3334 / 100);
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


function saveAlert(){  
  if(confirm(`Os dados serão salvos em "${headerSelect.value}", caso já existam dados salvos neste perfil, os mesmos serão sobreescritos. Deseja continuar?`)){
    alert(`Simulação salva com sucesso em "${headerSelect.value}"`);
    return true;
  } else{
    alert(`Se preferir, selecione outro perfil no topo de página para salvar esta simulação`)
    return false;
  }
}


//Main Function
function generateResults(){ 
  let alertAnswer = saveAlert();
  if(alertAnswer){
    calculateTotals();
    calculateFinalLines();
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

    saveProfileData();    
  }  
}
