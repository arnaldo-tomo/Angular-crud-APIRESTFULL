import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
//no contrutor essa importcao do servico
  constructor(private http: HttpClient) { }

  //Outra forma mas complicada
  //Arquivo no environment
  private ApiUrl = environment.ApiUrl;

  //Arrasy de todos Api
  getUsers(): Observable<User[]> {
    //Diretamento da Api
    // return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');

    //Outra forma mas complicada
     //Arquivo no environment
    return this.http.get<User[]>(`${this.ApiUrl}/getTask`);
  }

  //Metedo Para Obter de usuario Na API
  getUser(): Observable<User> {
    return this.http.get<User>('http://127.0.0.1:8000/api',);
  }

//Metedo Para Criacao de usuario Na API
  createUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.ApiUrl}/store`,user);
  }

//Metedo Para Actualizar o usuario Na API
  updateUser(user: User): Observable<User>{
    return this.http.put<User>(`${this.ApiUrl}/users/${user.id}`,user);
  }

//Metedo Para Editar o usuario Na API
  patchUser(user: User): Observable<User>{
    return this.http.patch<User>(`${this.ApiUrl}/users/${user.id}`,user);
  }

//Metedo Para deletar o usuario Na API
  deleteUser(id:number): Observable<boolean>{
    return this.http.delete<boolean>(`${this.ApiUrl}/users/${id}`);
  }

}
