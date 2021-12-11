import Vue from 'vue'
import VueRouter from 'vue-router'
import ProfilePage from "../views/Webpage/ProfilePage";
import ResourceWiki from "../views/Webpage/ResourceWiki";
import Race from "../views/CharacterCreator/Race";
import Class from "../views/CharacterCreator/Class";
import Background from "../views/CharacterCreator/Background";
import AbilityScores from "../views/CharacterCreator/AbilityScores";
import Proficiencies from "../views/CharacterCreator/Proficiencies";
import Options from "../views/CharacterCreator/Options";
import KnownSpells from "../views/CharacterCreator/KnownSpells";
import Equipment from "../views/CharacterCreator/Equipment";
import Description from "../views/CharacterCreator/Description";
import SheetPreview from "../views/CharacterCreator/SheetPreview";
import HomePage from "../views/Webpage/HomePage";
import SheetPage from "../views/Webpage/SheetPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage,
  },
  {
    path: '/wiki',
    name: 'ResourceWiki',
    component: ResourceWiki,
  },
  {
    path: '/character-creator/race',
    name: 'Race',
    component: Race,
  },
  {
    path: '/character-creator/class',
    name: 'Class',
    component: Class,
  },

  {
    path: '/character-creator/background',
    name: 'Background',
    component: Background,
  },
  {
    path: '/character-creator/ability-scores',
    name: 'AbilityScores',
    component: AbilityScores,
  },
  {
    path: '/character-creator/proficiencies',
    name: 'Proficiencies',
    component: Proficiencies,
  },
  {
    path: '/character-creator/options',
    name: 'Options',
    component: Options,
  },
  {
    path: '/character-creator/spells',
    name: 'Spells',
    component: KnownSpells,
  },
  {
    path: '/character-creator/equipment',
    name: 'Equipment',
    component: Equipment,
  },
  {
    path: '/character-creator/description',
    name: 'Description',
    component: Description,
  },
  {
    path: '/character-creator/sheet-preview',
    name: 'SheetPreview',
    component: SheetPreview,
  },
  {
    path: '/sheet-pages',
    name: 'SheetPage',
    component: SheetPage
  }



]

const router = new VueRouter({
  routes
})

export default router

