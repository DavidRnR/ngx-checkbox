import { Directive, HostListener, Input, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[ngxCheckbox]',
})
export class NgxCheckboxDirective implements AfterViewInit {

    constructor(private element: ElementRef) {

    }

    /**
     * After render the element/html set the Style
     */
    ngAfterViewInit(): void {
        this.setStyle();
    }

    /**
     * Set the element checked or not and then apply the style
     * @param status 
     */
    setCheckbox(status) {
        if (status && status === 'checked') {
            this.element.nativeElement.children[0].checked = true;
            this.setStyle();
        }
        else if (status && status === 'no-checked') {
            this.element.nativeElement.children[0].checked = false;
            this.setStyle();
        }
    }

    /**
     * Check if the Input-Checkbox if checked or not - Then apply the style
     */
    private setStyle() {
        if (this.element.nativeElement.children[0].checked) {
            this.element.nativeElement.style.backgroundColor = '#002584';
            this.element.nativeElement.style.border = '1px solid #002584';
        }
        else {
            this.element.nativeElement.style.backgroundColor = '#BDC3C7';
            this.element.nativeElement.style.border = '1px solid #BDC3C7';
        }
    }

    /**
     * After click in the Input-Checkbox call setStyle
     * @param evt 
     */
    @HostListener('click', ['$event']) public onClickCheckbox(evt) {
        this.setStyle();
    }
}