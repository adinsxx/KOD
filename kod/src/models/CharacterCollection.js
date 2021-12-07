//Defines what can be done to character sheets
//Only works at the USER level
const CharacterSheet = require("./CharacterSheet");
const CharacterCollection = function(arr){
  if (!Array.isArray(arr)) {
    arr = [];
  }
  arr.add = function(csheet){
    this.push(
      new CharacterSheet(
        csheet,
        ((collection) => function (){
          collection.remove(this)
        })(this)
      )
    );
    return this;
  }
  arr.remove = function(csheet){
    this.splice(this.indexOf(csheet), 1);
    return this;
  }
  return arr;

}
