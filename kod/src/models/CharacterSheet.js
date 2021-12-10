//information to fill out the character sheet

function CharacterSheet(user, name, className, subclassName, raceName, subrace, background, abilityScores, proficiencies, options, spells, equipment, description){
  this.user = user || { };
  this.name = name || '';
  this.className = className || '';
  this.subclassName = subclassName || '';
  this.raceName = raceName || '';
  this.subrace = subrace || '';
  this.background = background || '';
  this.abilityScores = abilityScores || 0 ;
  this.proficiences = proficiencies || '';
  this.options = options || '';
  this.spells = spells || '';
  this.equipment = equipment || '';
  this.description = description || '';


  this.toFirestore = function(){
    return {
      user: this.user,
      name: this.name,
      className: this.className,
      subclassName: this.subclassName,
      raceName: this.raceName,
      subrace: this.subrace,
      background: this.background,
      abilityScores: this.abilityScores,
      proficiences: this.proficiences,
      options: this.options,
      spells: this.spells,
      equipment: this.equipment,
      description: this.description,


    }
  }
}

CharacterSheet.collectionName = 'sheets';

CharacterSheet.fromFirestore = function (snapshot, option){
  const data = snapshot.data(option);
  return new CharacterSheet(
      data.user,
      data.name,
      data.className,
      data.subclassName,
      data.raceName,
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
