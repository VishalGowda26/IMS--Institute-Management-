import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lpa'
})
export class LpaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value + ' LPA';
  }

}
