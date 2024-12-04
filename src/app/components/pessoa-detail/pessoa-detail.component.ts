import { Component } from '@angular/core';
import { Pessoa } from 'src/app/Pessoa';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-pessoa-detail',
  templateUrl: './pessoa-detail.component.html',
  styleUrls: ['./pessoa-detail.component.css']
})
export class PessoaDetailComponent {
  pessoa?: Pessoa;

  constructor(private listService : ListService, private route: ActivatedRoute){
    this.getPessoa()
  }

  getPessoa(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getItem(id).subscribe((pessoa)=>(this.pessoa = pessoa));

  }

}
