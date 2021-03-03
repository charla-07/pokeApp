import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statistics'
})
export class StatisticsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
