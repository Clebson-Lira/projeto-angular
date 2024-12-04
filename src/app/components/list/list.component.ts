import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Pessoa } from 'src/app/Pessoa';
import { ListService } from 'src/app/service/list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @ViewChild('confirmationModal') confirmationModal!: TemplateRef<any>;
  pessoaToRemove: any;
  pessoas: Pessoa [] = [];
  private modalRef!: NgbModalRef;

  constructor(private listService: ListService, private router: Router, private route: ActivatedRoute, private modalService: NgbModal) {
    this.getPessoas();
  }

  ngOnInit(): void {
    // ...existing code...
  }

  openConfirmationModal(pessoa: any): void {
    this.pessoaToRemove = pessoa;
    this.modalRef = this.modalService.open(this.confirmationModal);
  }

  confirmRemovePessoa(modal: NgbModalRef): void {
    this.removePessoa(this.pessoaToRemove);
    modal.close();
  }

  removePessoa(pessoa: Pessoa): void {
    this.pessoas = this.pessoas.filter((a) => pessoa.name !== a.name);
    this.listService.remove(pessoa.id).subscribe();
  }

  getPessoas(): void {
    this.listService.getAll().subscribe((pessoas) => (this.pessoas = pessoas));
  }
}
