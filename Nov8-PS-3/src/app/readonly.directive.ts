




import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReadonly]'
})
export class ReadonlyDirective {
  private _readOnly: boolean = false;

  @Input() set appReadonly(value: boolean) {
    this._readOnly = value;
    this.renderer.setProperty(this.el.nativeElement, 'readOnly', value);
  }

  @Input() set value(val: any) {
    if (this._readOnly) {
      this.renderer.setProperty(this.el.nativeElement, 'value', val);
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
