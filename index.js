$(function() {
 
  let pet_info = {
    name: "Squirtle", 
    weight: 30, 
    happiness: 40,
    hunger: 20}
    
    checkAndUpdatePetInfoInHtml()
  
    $('.treat-button').click(clickedTreatButton)
    $('.play-button').click(clickedPlayButton)
    $('.exercise-button').click(clickedExerciseButton)
    
    function clickedTreatButton() {
      pet_info['happiness'] = pet_info['happiness'] + 1
      pet_info['weight'] = pet_info['weight'] + 2
      checkAndUpdatePetInfoInHtml()
    }
    
    function clickedPlayButton() {
      pet_info['happiness'] = pet_info['happiness'] + 1
      pet_info['weight'] = pet_info['weight'] - 1
      checkAndUpdatePetInfoInHtml()
    }
    
    function clickedExerciseButton() {
      pet_info['weight'] = pet_info['weight'] - 1
      checkAndUpdatePetInfoInHtml()
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating()
      updatePetInfoInHtml()
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      if(pet_info.weight < 0){
        pet_info.weight = 1                 
      }                             
    }
    
    function updatePetInfoInHtml() {
      $('.name').text(pet_info.name)
      $('.weight').text(pet_info.weight)
      $('.happiness').text(pet_info.happiness)
    }
  })