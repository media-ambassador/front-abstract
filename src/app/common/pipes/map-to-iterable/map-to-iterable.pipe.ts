import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapToIterable'
})
export class MapToIterablePipe implements PipeTransform  {
  transform(dictionary: any): any {
    const result = [];
    for (const key in dictionary) {
      if (dictionary.hasOwnProperty(key)) {
        result.push({key: key, val: dictionary[key]});
      }
    }

    return result;
  }
}
