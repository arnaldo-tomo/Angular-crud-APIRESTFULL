import { DetalhesComponent } from './../detalhes/detalhes.component';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { take } from 'rxjs';
import { LocalizedString } from '@angular/compiler';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  formValores !: FormGroup;

  constructor(private FormBuilder:FormBuilder, private UserService:UserService) { }

  ngOnInit(): void {
    this.formValores = this.FormBuilder.group({
      tarefa: ['']
      // nome: [''],
      // duracao: ['']
      // tarefa: ['']
    })
  }

  go() {
    this.UserService.createUser(this.formValores.value).subscribe((data : any)=> {
      console.log(this.formValores.value);
    });
  }




}


