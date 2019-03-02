module.exports.function = function describe (objectName) {
  // this is a placeholder for API communication
  // all info about the game state will be stored on the external service
  var res = "";
  
  switch (String(objectName)) {
    case "Sword":
      res = "A short curved sword, a versatile weapon.";
      break;
    case "the sword":
      res = "A short curved sword, a versatile weapon.";
      break;
    case "the Trident":
      res = "A three-pronged top-heavy weapon with considerable reach.";
      break;
    case "Trident":
      res = "A three-pronged top-heavy weapon with considerable reach.";
      break;
  }
  return {desc: res,}
}
