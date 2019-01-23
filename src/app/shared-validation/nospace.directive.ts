import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";


@Directive({
  selector: '[appNospace]'
})
export class NospaceDirective {

  constructor() { }

}
