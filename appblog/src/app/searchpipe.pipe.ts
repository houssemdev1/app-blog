import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {
 itemList: []

    transform(itemList: any, searchKeyword: string) {
      if (!itemList)
        return [];
      if (!searchKeyword)
        return itemList;
      let filteredList = [];
      if (itemList.length > 0) {
        searchKeyword = searchKeyword.toLowerCase();
        itemList.forEach(item => {

          let ValueList = Object.values(item);
          for(let i=0;i<ValueList.length;i++)
          {
            if (ValueList[i]) {
              if (ValueList[i].toString().toLowerCase().includes(searchKeyword) )
              {
                filteredList.push(item);
                console.log("blog=>", filteredList)
                break;
              } 
            }
          }
        });
      }
      return filteredList;
    }

}
