import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../article-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recentarticle',
  templateUrl: './recentarticle.component.html',
  styleUrls: ['./recentarticle.component.css']
})
export class RecentarticleComponent implements OnInit {
  onearticle$:[];
  comments$: [];
  user$:[]
  formcontent: FormGroup;
  recentarticles$ :[]
  constructor(private data:DataService, private dataarticle:ArticleServiceService,private fb:FormBuilder,private router:Router) {
    this.formcontent = this.fb.group({
      nomAuthor:'',
      prenomAuthor:'',
      commentContent:'',
  })
   }

  ngOnInit() {
 
    this.getrecentArticle()
    this.getonearticle();
    this.getuserbyemail()
    this.getAllcomments()
    this.getuserbyemail()
  }

  getonearticle(){

    var idarticle;
    idarticle=sessionStorage.getItem('idart');
    console.log(  idarticle);
    return this.dataarticle.getarticlebyId(idarticle).subscribe((info:any)=>{
      this.onearticle$=info.article;
  
      console.log(this.onearticle$);
  
    })
  }
  //reuperation de toutes les commentaires

getAllcomments(){
  var idarticle=sessionStorage.getItem('idart');
   return this.dataarticle.getComments(idarticle).subscribe((info:any)=>{
     this.comments$ = info.article.articleComments;
     console.log(  this.comments$)
    
   });
  }   
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('iduser');
}
  getrecentArticle()
  {
    return this.data.getnewAarticles().subscribe((recentdatas:any)=>{
      console.log(recentdatas);
      this.recentarticles$ = recentdatas.recentarticles;
    });
    }
  supprimerComment(id){
    return this.dataarticle.deleteComment(id).subscribe(res=>{
    console.log("suppresssion")
    this.ngOnInit()
    })
   
  }
 //creation commentaire
createComment(){

  var id=localStorage.getItem('id');

  console.log(this.formcontent.value);
  this.getuserbyemail()
  console.log(this.formcontent.value);
 return this.dataarticle.addCommentadmin(id,this.formcontent.value).subscribe(res => {
  this.ngOnInit()
 });
}
//add author comment
getuserbyemail(){

  var  email=localStorage.getItem('iduser')
 return this.data.adminData().subscribe((res:any)=>{
   this.user$=res.users;
   console.log(this.user$);
   for( var item of res.users){
     if(item.userEmail==email) {
     this.formcontent.value.nomAuthor=item.userLastname; 
     this.formcontent.value.prenomAuthor=item.userName;
     break
   }
   }
 })
 
 }
//supprimer un article
supprimerArticle(id){
  return this.dataarticle.deleteArticle(id).subscribe(res=>{
 
  this.router.navigate(['dashboard'])

  })
 
}


}
