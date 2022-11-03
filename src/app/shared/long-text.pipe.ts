import { HostListener, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'longText'
})
export class LongTextPipe implements PipeTransform {



  transform(value: any, ...args: unknown[]): unknown {

    value = value.split(' ').filter( (x:any,id: any) => id < 15 );
    value.push('...')

    return value.join(' ')
  }

}
