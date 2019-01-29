import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  userRegister(datas) {
    console.log('register ==>', datas);
    return this.http.post('http://localhost:3000/auth/userRegister', datas);
  }

//enregistrer admin
adminRegister(datas) {
  console.log('register ==>', datas);
  return this.http.post('http://localhost:3000/auth/adminRegister', datas);
}



  articleRegister(datas) {
    console.log('register ==>', datas);
    return this.http.post('http://localhost:3000/auth/articleRegister/', datas);
  }

//affichage des articles non validé par l'administrateur
getnewAarticles(){

  return this.http.get('http://localhost:3000/auth/recentarticles');
}

//users liste
  userData(){
    return this.http.get("http://localhost:3000/auth/users");
  }
//admins liste
adminData(){
  return this.http.get("http://localhost:3000/auth/admins");
}
  //verifier login
verifLogin(datas){
  return this.http.post('http://localhost:3000/auth/veriflogin', datas);
}

  //return user by id
  userByid(datas){
    return this.http.get('http://localhost:3000/auth/uerbyid/'+datas);
  }
  
  //les articles enregistrés
  articleData(){
    return this.http.get("http://localhost:3000/auth/articles");
  }
  //comment by id
addCommentAdmin(idart,content){
  console.log(content)
  console.log(idart);
  return this.http.post('http://localhost:3000/auth/addcomment/'+idart,content);
}

//affichage des users
getAllusers(){
  return this.http.get('http://localhost:3000/auth//users')
}

//supprimer user
deleteuser(id){
  return this.http.delete('http://localhost:3000/auth//deleteuser/'+id,id)
}
}
