// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import documenReady from './helpers/documenReady';
import lazyIMages from './modules/lazyIMages';
import validation from './modules/validation';
import inputmask from './modules/inputmask';
import newsSlider from './modules/newsSlider';
import advantagesSlider from './modules/advantagesSlider';
import initSelects from './modules/initSelects';
import equipmentSelects from './modules/equipmentSelects';
import spheresSlider from './modules/spheresSlider';
import openMenu from './modules/openMenu';
import closePreloadre from './modules/closePreloadre';
import introSlider from './modules/introSlider';
import initAccordion from './modules/initAccordion';
import contactsMap from './modules/contactsMap';
import search from './modules/search';
import casesSlider from './modules/casesSlider';
import sliderEquipment from './modules/sliderEquipment';
import suitableModelsSlider from './modules/suitableModelsSlider';
import cartImgsSlider from './modules/cartImgsSlider';
import detailSlider from './modules/detailSlider';
import tabs from './modules/tabs.js';
import sectionAnimation from './modules/sectionAnimation';
import fixedHeader from './modules/fixedHeader.js';
import anchorLInks from './modules/anchorLInks.js';
import productIntroSlider from './modules/productIntroSlider.js';
import animatedBlocks from './modules/animatedBlocks.js';
import smoothscroll from 'smoothscroll-polyfill';
import showMoreBtns from './modules/showMoreBtns.js';

smoothscroll.polyfill();

window.addEventListener("load", ()=>{
  closePreloadre();
});

documenReady(() => {
  window.lumien_API = {};

  lazyIMages();
  validation();
  inputmask();
  newsSlider();
  advantagesSlider();
  initSelects();
  equipmentSelects();
  spheresSlider();
  openMenu();
  introSlider();
  initAccordion();
  contactsMap();
  search();
  casesSlider();
  sliderEquipment();
  suitableModelsSlider();
  detailSlider();
  tabs();
  sectionAnimation();
  fixedHeader();
  anchorLInks();
  productIntroSlider();
  animatedBlocks();
  showMoreBtns();

  // always last
  cartImgsSlider();
});
