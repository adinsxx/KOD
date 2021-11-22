//Defines what can be done to character sheets
//Only works at the USER level
function CharacterCollection(){
  let arr = [];

  arr.addCharacter = function(item){
    this.push(
      new CharacterSheet(
        item,
        ((collection) => function (){
          collection.removeCharacter(this)
        })(this)
      )
    );
    return this;
  }
  arr.removeCharacter = function(item){
    this.splice(this.indexOf(item), 1);
    return this;
  }
  return arr;

  //TODO: add editing functionality
}
