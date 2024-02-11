import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})
export class HoverAffectDirective {
  @Input() typeStyle: string = '';
  @Input() tagStyle: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (this.typeStyle === 'underline') {
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
    } else if (this.tagStyle === 'bold') {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.typeStyle === 'underline') {
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'none');
    } else if (this.tagStyle === 'bold') {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'normal');
    }
  }
}
