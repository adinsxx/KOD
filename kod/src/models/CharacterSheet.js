//information to fill out the character sheet
function CharacterSheet(name,className, subclassName){
  this.name = name || 'Character Name';
  this.className = className || 'Class Name';
  this.subclassName = subclassName || 'Subclass Name';

}
export default CharacterSheet;
