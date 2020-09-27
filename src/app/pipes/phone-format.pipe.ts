import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(phoneNumber: number, args?: any): string {
   // \d meanns any  not digit char between 0 - 9
   // () group chars 
   // I concated with string to convert number into string;
   // (\d\d\d) 3 not digit chars
   // $n replaces by order in regex
   // I can solve it without using regex as well.

   const result = (phoneNumber + '').replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
    return result;
  }

}
