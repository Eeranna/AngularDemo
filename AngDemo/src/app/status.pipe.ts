import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: number): string {
    console.log('In transform...');

    switch(value){
      case 1: return 'Active';
      case 2: return 'Inactive';
      case 3: return 'Disabled';
      case 4: return 'Enabled';
    }
    return null;
  }

}
