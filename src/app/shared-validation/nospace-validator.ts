import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noSpace(control: AbstractControl): ValidationErrors | null {
  let noSpace = null;
// debugger;
  if(control.value.indexOf(' ') >=0) {
    return{ noSpace: true }
  }
  return { noSpace: false }
}

export function cannotContainSpace(control: AbstractControl): ValidationErrors | null {
  if((control.value as string).indexOf(' ') >=0) {
    return{ cannotContainSpace: true }
  }
  return{ cannotContainSpace: false }
}