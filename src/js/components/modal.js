'use strict';

class Modal {
  constructor(modalOpenButton) {
    this.body = document.querySelector('body');
    this.modal = document.querySelector('.modal-section-container');
    this.modalOpenButton = modalOpenButton;
    this.modalFormType = this.modalOpenButton.getAttribute('data-form');
    this.modalForms = document.querySelectorAll('.modal-form');
    this.modalCloseButton = document.querySelector('.modal-close-button');
    this.addEventListeners();
  }

  openModal() {
    for(let i = 0; this.modalForms.length > i; i++) {
      if(this.modalForms[i].getAttribute('data-form') === this.modalFormType){
        this.modalForms[i].setAttribute('data-state', 'active');
      };
    }
    this.body.setAttribute('data-state', 'inactive');
    this.modal.setAttribute('data-state', 'active');
  }

  closeModal() {
    for(let i = 0; this.modalForms.length > i; i++) {
      this.modalForms[i].setAttribute('data-state', 'inactive');
    }
    this.body.setAttribute('data-state', 'active');
    this.modal.setAttribute('data-state', 'inactive');
  }

  addEventListeners() {
    this.modalOpenButton.addEventListener('click', this.openModal.bind(this));
    this.modalCloseButton.addEventListener('click', this.closeModal.bind(this));
  }
}

export default Modal;
