import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../article-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-enablearticle',
  templateUrl: './enablearticle.component.html',
  styleUrls: ['./enablearticle.component.css']
})
export class EnablearticleComponent implements OnInit {
  onearticle$: any;
  formcontent: FormGroup;
  recentarticles$ :[]
  constructor(private data:DataService,private dataarticle:ArticleServiceService,private fb:FormBuilder) {
    this.formcontent = this.fb.group({
      
    idAuthor:'',
    messageContent:''
    
  })
   }

  ngOnInit() {
    this.getrecentArticle()
    this.getonearticle()
  }
  //afficher les information d'un article par id
  getonearticle(){ 

    var idarticle;
    idarticle=sessionStorage.getItem('idenable');
    console.log(  idarticle);
    return this.dataarticle.getarticlebyId(idarticle).subscribe((info:any)=>{
      this.onearticle$=info.article;
  
      console.log(this.onearticle$);
  
    })
     
  }
  getrecentArticle()
{
  return this.data.getnewAarticles().subscribe((recentdatas:any)=>{
    console.log(recentdatas);
    this.recentarticles$ = recentdatas.recentarticles;
  });
  }


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('iduser');
    localStorage.removeItem('tok');
}
  
  enableAart(idarticle)
  {
  
    idarticle=sessionStorage.getItem('idenable');
    return this.dataarticle.enableArticle(idarticle).subscribe((res:any) => {
      console.log('register respone ==>', res);
      this.formcontent.value.idAuthor=res.articles.emailAuthor;
      this.formcontent.value.messageContent=res.articles.articleTitle;
      console.log(this.formcontent.value);
      this.envoyermsg()
    
  })}
  //envoyer un message a l'utilisateur pour lui informer que son article a été publié
envoyermsg(){
  return this.dataarticle.sendmessage(this.formcontent.value).subscribe((res:any) => {
    console.log('register respone ==>', res);
})}
  }
