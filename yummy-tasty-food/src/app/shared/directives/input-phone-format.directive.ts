import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputPhoneFormat]'
})
export class InputPhoneFormatDirective {
  
  @HostListener ( 'blur' ) onBlur( value : string ) {
    let phone = this.el.nativeElement.value;
    if ( !phone || phone === '' ) return;
    console.log('blur',phone)
  }
  
  constructor(private el: ElementRef) { }
  

}
