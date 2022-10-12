import { UserService } from './service/user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BigApi';

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    //chamando a funcoa que traz todos os usuarios
    // this.onGetUsers();
    //chamndo  o usuario que tras apenas o usuario espeisifacdo o ID
    // this.onGetUser();
  }

  //metos que vai retornar todos os usuarios do service
    onGetUsers(): void {
      this.UserService.getUsers().subscribe(
        //mostrar no conole
        (response) => console.log(response),
        //Mostrar Qualquer erro no console
        (errr: any) => console.log(errr),
        //printar sms no console
        () => console.log('Pronto api Chegando Com Sucessos Com todos os usuario')
      );
    }

//Metos que retonar o usario especificadom com o Id 1
 onGetUser() {
   this.UserService.getUser().subscribe(
      //mostrar no conole
        (response) => console.log(response),
        //Mostrar Qualquer erro no console
        (errr: any) => console.log(errr),
      //printar sms no console
     () => console.log('Pronto api Chegando Com Sucessos com o usuarios Especifiacdo')
   )
  }


}


