import scrollToAction from './module/scroll-suave.js';
import scrollAnimationAction from './module/scroll-animacao.js';
import accordionAction from './module/accordion.js';
import tabMenuAction from './module/tab-menu.js';
import * as coletaneaTeste from './module/teste.js';
import {teste1 as t1, idade as id} from './module/teste.js';
import modalAction from './module/modal.js';
import tooltipAction from './module/tooltip.js';

scrollToAction();
scrollAnimationAction();
accordionAction();
tabMenuAction();
coletaneaTeste.teste1();
coletaneaTeste.teste2();
t1();
console.log(id);
modalAction();
tooltipAction();