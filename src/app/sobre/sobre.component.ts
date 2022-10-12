import { User } from './../interface/user';
import { Observable, tap } from 'rxjs';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  photos: Array<any> = new Array();
  User: any;
  erro: any;
  constructor( private UserService: UserService) { }

  ngOnInit(): void {
    this.GetAllUser();
    // this.ongetUser();
    // this.ongetterUser();
  }

  GetAllUser() {
    this.UserService.getUsers().subscribe((data: any) => {
      this.User = data;

      console.log('API Pronta',this.User);

    },
      (error: any) => {
        this.erro = error;
        console.log('FALHOU A CENA PUTO');
        console.error(error);


      }
    );
  }

  // ongetterUser(): void{
  //   this.UserService.getUsers().forEach((res: any) => {
  //     this.photos = res;
  //   }); }

  // ongetUser(): void{
  //  this.UserService.getUsers().subscribe((res: any) => {
  //    this.photos = res;
  //    console.log('photos',res);
  //   }); }
}
