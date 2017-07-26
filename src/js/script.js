'use strict';

import Modal from './components/modal';


function appInit() {
  let modalButtons = document.querySelectorAll('.modal-button');
  if (modalButtons) {
    for(let i = 0; modalButtons.length > i; i++) {
      new Modal(modalButtons[i]);
    }
  }
}

appInit();
