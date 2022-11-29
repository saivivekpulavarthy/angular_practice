import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultValue'
})
export class DefaultValuePipe implements PipeTransform {

  transform(value: String): String {
   value=value.trim();
    if(value && value != "" && value != " "){
      return value;
    }
    else return "--";
  }

}
