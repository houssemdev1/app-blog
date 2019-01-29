import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../article-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-infoarticle',
  templateUrl: './infoarticle.component.html',
  styleUrls: ['./infoarticle.component.css']
})
export class InfoarticleComponent implements OnInit {

formcontent:FormGroup;
onearticle$:[];
  comments$:[] ;
  user$:[]
  c:any;
  currentmessages$:[];
  constructor(private data:DataService,private dataarticle:ArticleServiceService,private fb:FormBuilder) {
    this.formcontent = this.fb.group({
      
      nomAuthor:'',
      prenomAuthor:'',
      commentContent:'',
    
  })
   }

  ngOnInit() {
this.getmessages()
    this.getuserbyemail()
   this.getonearticle();
  this.getAllcomments();
 

  } 

  getmessages(){
   
    var email=localStorage.getItem('iduser')
    return this.dataarticle.returnmessages(email).subscribe((datas:any) =>{
      this.currentmessages$=datas.messages

console.log( this.currentmessages$)
});
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('iduser');
    localStorage.removeItem('tok');
}
  //add author comment
  getuserbyemail(){

    var  email=localStorage.getItem('iduser')
   return this.data.userData().subscribe((res:any)=>{
     this.user$=res.users;
     console.log(this.user$);
     for( var item of res.users){
       if(item.userEmail==email) {
         console.log(item.userName)
  
       this.formcontent.value.nomAuthor=item.userLastname; 
       this.formcontent.value.prenomAuthor=item.userName;
       break
     }
     }
   })
   
   }
  //afficher les information d'un article par id
getonearticle(){

  var idarticle;
  idarticle=localStorage.getItem('id');
  console.log(  idarticle);
  return this.dataarticle.getarticlebyId(idarticle).subscribe((info:any)=>{
    this.onearticle$=info.article;

    console.log(this.onearticle$);

  })
   
}
//creation commentaire
createComment(){
 var id=localStorage.getItem('id');

 console.log(this.formcontent.value);
return this.dataarticle.addComment(id,this.formcontent.value).subscribe(res => {
  console.log('register respone ==>', res);

  this.ngOnInit();

});

}
//reuperation de toutes les commentaires

getAllcomments(){
 var idarticle=localStorage.getItem('id');
  return this.dataarticle.getComments(idarticle).subscribe((info:any)=>{
    this.comments$ = info.article.articleComments;
    console.log(  this.comments$)
    this.ngOnInit();
  });
 
  }

}






