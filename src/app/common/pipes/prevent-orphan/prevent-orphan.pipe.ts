import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preventOrphan'
})
export class MaPreventOrphanPipe implements PipeTransform {
  protected regex = new RegExp(/(\s)([\S])[\s]+/g);
  protected replacement = '$1$2&nbsp;';

  transform(value: string, args?: any): any {
    return value.replace(this.regex, this.replacement);
  }

}
