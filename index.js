(function(){
  'use strict';

  const itemsToAdd = [
    {
      name: 'banana',
      price: '$2.99',
      description: 'It is a yellow banana!',
      created: new Date().getTime()
    },
    {
      name: 'apple',
      price: '$4.99',
      description: 'It is a red apple!',
      created: new Date().getTime()
    },
    {
      name: 'orange',
      price: '$0.99',
      description: 'It is an orange orange!',
      created: new Date()
    }
  ]
  const addItemInput = document.getElementById('input-add')
  const addItemButton = document.getElementById('btn-add')
  const getItemButton = document.getElementById('btn-read')
  const removeItemInput = document.getElementById('input-remove')
  const removeItemButton = document.getElementById('btn-remove')
  const displayResultElement = document.getElementById('table-body')
  
  let db;

  addItemButton.addEventListener('click', function(){
    const itemToAdd = addItemInput.value
    addItem(itemToAdd);
  });
  getItemButton.addEventListener('click', function(){
    getItem();
  });
  removeItemButton.addEventListener('click', function(){
    const itemToRemove = removeItemInput.value;
    removeItem(itemToRemove);
  });

  function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
      if (myArray[i].name === nameKey) {
          return myArray[i];
      }
    }
  }

  //

})();