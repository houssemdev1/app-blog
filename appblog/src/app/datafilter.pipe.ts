import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'datafilter'
})
export class DatafilterPipe implements PipeTransform {
  blog: []
  search
  transform(blogs$: any, search):any[] {

    
   

    return blogs$.filter(async (blog:any) => {
      
    await blog.articleTitle.toString().toLocaleLowerCase().includes(search);

   
    
   })

  


  }
}
