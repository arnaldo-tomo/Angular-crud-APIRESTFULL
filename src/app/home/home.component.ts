import { UserService } from './../service/user.service';
import { DetalhesComponent } from './../detalhes/detalhes.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  photos: Array<any> = new Array();


  Api = 'http://127.0.0.1:8000/api/getTask';
  nado: any;
   id: any;

  constructor(
    private Http: HttpClient,private UserService:UserService,private route:ActivatedRoute )
  {
     this.AllUser();
  }
    AllUser(){
      this.Http.get(this.Api).subscribe((data: any) => {
          // console.log('Minhas Tarefas',data);
          this.photos = data;
      })
    }

  todos() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.Http.get(this.Api).subscribe((dados:any )=> {
               this.photos = dados;

      console.log(dados);

})

}



}
