import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'some'
})
export class SomePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
