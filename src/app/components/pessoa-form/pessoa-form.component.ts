import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListService } from 'src/app/service/list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/Pessoa';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css'],
})
export class PessoaFormComponent {
  form!: FormGroup;
  submitted = false;
  pessoas: Pessoa [] = []


  constructor(
    private fb: FormBuilder,
    private listService: ListService,
    private router: Router,
    private route: ActivatedRoute,

  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const id = params['id'];
      if (id) {
        const pessoa$ = this.listService.loadById(id) as Observable<Pessoa>;
        pessoa$.subscribe((pessoa: Pessoa) => {
          this.updateForm(pessoa);
        });
      }
    });

    this.form = this.fb.group({
      id: [null],
      name: [null, [Validators.required, Validators.maxLength(30)]],
      age: [null, [Validators.required, Validators.maxLength(3)]],
      job: [null, [Validators.required, Validators.maxLength(40)]],
    });
  }

  updateForm(pessoa: Pessoa) {
    this.form.patchValue({
      id: pessoa.id,
      name: pessoa.name,
      age: pessoa.age,
      job: pessoa.job,
    });
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.form.valid) {
      
      if (this.form.value.id) {
        this.listService.update(this.form.value).subscribe((success) => console.log('sucesso update'));
      } else {
        this.listService.create(this.form.value).subscribe((success) => console.log('sucesso create'));
      }
      this.form.reset();
      this.router.navigate(['list']);
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
    this.router.navigate(['list']);
  }
}
