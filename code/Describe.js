module.exports.function = function describe (objectName) {
  // this is a placeholder for API communication
  // all info about the game state will be stored on the external service
  var res = "";
  
  switch (String(objectName)) {
    case "sword":
      res = "A short curved sword, a versatile weapon.";
      break;
    case "the sword":
      res = "A short curved sword, a versatile weapon.";
      break;
    case "the spear":
      res = "A sharp top-heavy weapon with considerable reach.";
      break;
     case "situation":
      res = "You are standing by the entrance to a circular arena. A crowd watches you from above and is buzzing with anticipation. Behind you there is a rack with two weapons to choose from. A sword and a trident.";
      break;
     case "the situation":
      res = "You are standing by the entrance to a circular arena. A crowd watches you from above and is buzzing with anticipation. Behind you there is a rack with two weapons to choose from. A sword and a spear.";
      break;
  }
  return {desc: res,}
}
