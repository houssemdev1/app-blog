import { Component, OnInit, PipeTransform } from '@angular/core';
import { DataService } from '../data.service';
import { ArticleServiceService } from '../article-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css']
})
export class MyblogsComponent implements OnInit {
 
  formcontent:FormGroup;
  onearticle$:[];
    comments$:[] ;
    user$:[]
    c:any;
  blogs$:[];
  search:String;
  searchText='';
  currentmessages$:[];
    constructor(private data:DataService,private dataarticle:ArticleServiceService,private fb:FormBuilder) {
      this.formcontent = this.fb.group({
        
        nomAuthor:'',
        prenomAuthor:'',
        commentContent:'',
      
    })
     }
  
    ngOnInit() {
      console.log(this.searchText)
      this.findblogs()
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

findblogs(){
  var  email=localStorage.getItem('iduser')
 
  return this.dataarticle.returnblogbyemail(email).subscribe((res:any)=>{
    this.blogs$=res.article;
    console.log("blogs=>",this.blogs$);
   this.blogs$.filter((blog: any) => {
      blog.articleTitle ==this.search;

      console.log(blog)
  } )
  })
  
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
    
       for( var item of res.users){
         if(item.userEmail==email) {
          
    
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
 
  return this.dataarticle.getarticlebyId(idarticle).subscribe((info:any)=>{
    this.onearticle$=info.article;

 

  })
   
}

//reuperation de toutes les commentaires

getAllcomments(){
 var idarticle=localStorage.getItem('id');
  return this.dataarticle.getComments(idarticle).subscribe((info:any)=>{
    this.comments$ = info.article.articleComments;
  
  
  });
 
  }
}
