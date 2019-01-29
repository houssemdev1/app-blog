import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  onearticle$;
  constructor(private http:HttpClient) { }

//article by id
getarticlebyId(id){

  return this.http.get('http://localhost:3000/auth/onearticle/'+id);
}



addCommentadmin(idart,content){
   idart=localStorage.getItem('id');
  console.log(content)
  console.log(idart);
  return this.http.post('http://localhost:3000/auth/addcomment/'+idart,content);
}
//comment by id

addComment(idart,content){
  console.log(content)
  console.log(idart);
  return this.http.post('http://localhost:3000/auth/addcomment/'+idart,content);
}
//bolg by email
returnblogbyemail(email){
  return this.http.get('http://localhost:3000/auth/getblogbyemail/'+email);
}
sendmessage(content){
  return this.http.post('http://localhost:3000/auth/sendmessage',content);
}

//retourner les messages
returnmessages(id){
  return this.http.get('http://localhost:3000/auth/getmessage/'+id);
}

//comments for articles
getComments(id){
  
  return this.http.get('http://localhost:3000/auth/getcoment/'+id);

}
deleteComment(id){
  return this.http.delete('http://localhost:3000/auth/deletecoment/'+id)
}
enableArticle(id){
  return this.http.post('http://localhost:3000/auth/activerarticle/'+id,id)
}

deleteArticle(id){
  return this.http.delete('http://localhost:3000/auth//deleteArt/'+id,id)
}

}
