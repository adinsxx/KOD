//information to fill out the character sheet
function CharacterSheet(name,className, subclassName, race, subrace, background, abilityScores, proficiencies, options, spells, equipment, description){
  this.name = name || 'Character Name';
  this.className = className || 'Class Name';
  this.subclassName = subclassName || 'Subclass Name';
  this.race = race || 'Race Name';
  this.subrace = subrace || 'Sub-Race Name';
  this.background = background || 'Character Background';
  this.abilityScores = abilityScores || 8 ;
  this.proficiences = proficiencies || 'Proficiencies';
  this.options = options || 'Options';
  this.spells = spells || 'Spells';
  this.equipment = equipment || 'Equipment';
  this.description = description || 'Description';


  this.toFirestore = function(){
    return {
      name: this.name = name,
      className: this.className = className,
      subclassName: this.subclassName = subclassName,
      race: this.race = race,
      subrace: this.subrace = subrace,
      background: this.background = background,
      abilityScores: this.abilityScores = abilityScores,
      proficiences: this.proficiences = proficiencies,
      options: this.options = options,
      spells: this.spells = spells,
      equipment: this.equipment = equipment,
      description: this.description = description,


    }
  }
}

CharacterSheet.collectionName = 'sheets';

CharacterSheet.fromFirestore = function (snapshot, option){
  const data = snapshot.data(option);
  return new CharacterSheet(
      data.name,
      data.className,
      data.subclassName,
      data.race,
      data.subrace,
      data.background,
      data.abilityScores,
      data.proficiences,
      data.options,
      data.spells,
      data.equipment,
      data.description
  );
}

export default CharacterSheet;
