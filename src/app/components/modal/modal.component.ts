import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Pessoa } from 'src/app/Pessoa';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() pessoaSelecionada: Pessoa | null = null;

  constructor(public activeModal: NgbActiveModal) {
    console.log('ModalComponent inicializado');
  }

  ngOnInit() {
    console.log('Pessoa selecionada:', this.pessoaSelecionada);
  }

  confirmRemovePessoa() {
    console.log('Confirmando remoção de:', this.pessoaSelecionada);
    this.activeModal.close('confirm');
  }

  closeModal() {
    console.log('Fechando modal');
    this.activeModal.dismiss('cancel');
  }
}
