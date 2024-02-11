import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})
export class HoverAffectDirective {
  @Input() typeStyle: string = '';
  @Input() tagStyle: string = '';
  private originalBorderStyle: string | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (this.typeStyle === 'underline') {
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
    }    
    if (this.tagStyle === 'bold') {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    }
    if (this.el.nativeElement.parentElement) {
      const parentChildren = Array.from(this.el.nativeElement.parentElement.children);
      if (parentChildren.length > 0 && parentChildren[0] === this.el.nativeElement) {
        
        this.originalBorderStyle = this.el.nativeElement.style.border;
        this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid black');
      } else if (parentChildren.length > 0 && parentChildren[parentChildren.length - 1] === this.el.nativeElement) {
        
        this.originalBorderStyle = this.el.nativeElement.style.border;
        this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid black');
      }
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.typeStyle === 'underline') {
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'none');
    }

    if (this.tagStyle === 'bold') {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'normal');
    }

    if (this.originalBorderStyle !== null) {
      
      this.renderer.setStyle(this.el.nativeElement, 'border', this.originalBorderStyle);
      this.originalBorderStyle = null;
    }
  }
}
