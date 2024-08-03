import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'lpad',
  standalone: true
})
export class LpadPipe implements PipeTransform {

  transform(value: string, size: number = 2, ...args: unknown[]): unknown {
    return this.padWithZeroes(value, size);
  }

  padWithZeroes(value: string, size: number) {
    let newValue = value + "";
    while (newValue.length < size) newValue = "0" + newValue;
    return newValue;
  }

}
