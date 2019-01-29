import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ArticleServiceService } from '../article-service.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-ajoutarticle',
  templateUrl: './ajoutarticle.component.html',
  styleUrls: ['./ajoutarticle.component.css']
})
export class AjoutarticleComponent implements OnInit {
  htmlContent = '';

  config2: AngularEditorConfig = {


    editable: true,
    spellcheck: true,
    height: '5rem',
    minHeight: '5rem',
    placeholder: 'Entrer le contenu ici...',
    translate: 'no',
  
  }


  formearticle:FormGroup;
  user$:[];
  image: string | ArrayBuffer;
  currentmessages$:[];
  constructor(private dataarticle:ArticleServiceService, private data:DataService,private router: Router, private fb: FormBuilder) { 
    this.formearticle = this.fb.group({
      emailAuthor:"",
      nomAuthor:"",
      prenomAuthor:"",
      articleTitle: ['', [Validators.required, Validators.minLength(4)]],
      articleContent: ['', [Validators.required, Validators.minLength(4)]],
      articleImg: ""
       });
  }
  

  ngOnInit() {
    this.getmessages()
  }

  
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('iduser');
    localStorage.removeItem('tok');
}
getuserbyemail(){

 var  email=localStorage.getItem('iduser')
return this.data.userData().subscribe((res:any)=>{
  this.user$=res.users;
  console.log(this.user$);
  for( var item of res.users){
    if(item.userEmail==email) {
      console.log(item.userName)
      this.formearticle.value.emailAuthor=email; 
    this.formearticle.value.nomAuthor=item.userLastname; 
    this.formearticle.value.prenomAuthor=item.userName;
  }
  }
})

}

getmessages(){
   
  var email=localStorage.getItem('iduser')
  return this.dataarticle.returnmessages(email).subscribe((datas:any) =>{
    this.currentmessages$=datas.messages

console.log( this.currentmessages$)
});
}


  addArticle(){
 
    this.data.articleRegister(this.formearticle.value).subscribe(res => {
      console.log('register respone ==>', res);
this.ngOnInit()
alert('votre article sera publier apres la confirmation')
this.router.navigate(['listearticle']);

    });
  }

  changeListener($event) : void {
    this.readThis($event.target);
  }
  
  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
  
    myReader.onloadend = (e) => {
      this.formearticle.value.articleImg = myReader.result;
      this.getuserbyemail();
    }
    myReader.readAsDataURL(file);
  }
  
makeblob(dataURL) {
  
    const BASE64_MARKER = ';base64,';
    const parts = dataURL.split(BASE64_MARKER);
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  }

}
