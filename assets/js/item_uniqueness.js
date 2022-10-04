function itemUniqueness(array,value) {
  // check whether the value is unique
  let error = 0;

  array.forEach(element => {
    if(element === value) {
      // if the value is not unique, set error to 1
      error = 1;
      // break the loop and clear the value of todo
      todo.value = ''
    }
  });

  if(error == 0) {
    // if the value is unique, return true
    return true;
  } else {
    // if the value is not unique, return false
    return false;
  }
}