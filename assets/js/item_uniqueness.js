function itemUniqueness(array,value) {
  let error = 0;

  array.forEach(element => {
    if(element === value) {
      error = 1;
    }
  });

  if(error == 0) {
    return true;
  } else {
    return false;
  }
}