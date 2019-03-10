module.exports.function = function use (usedObjectName, usedOnObjectName) {
  var res = "You cannot do that."
    switch (String(usedObjectName)) {
    case "sword":
    case "the sword":
      switch (String(usedOnObjectName)) {
        case "enemy":
        case "the enemy":
          res = "You hit the enemy with the sword.";
          break;
      }
      break;
    case "spear":
    case "the spear":
      switch (String(usedOnObjectName)) {
        case "enemy":
        case "the enemy":
          res = "You hit the enemy with the spear.";
          break;
      }
      break;
    case "spear":
    case "the spear":
      switch (String(usedOnObjectName)) {
        case "sword":
        case "the sword":
          res = "You hit the sword with the spear. It makes a clanking noise.";
          break;
      }
      break;
    case "sword":
    case "the sword":
      switch (String(usedOnObjectName)) {
        case "spear":
        case "the spear":
          res = "You hit the spear with the sword. The spear is cut in half. It's reach is reduced.";
          break;
      }
      break;
  }
  return {resu: res,}
}
