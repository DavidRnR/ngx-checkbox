import { Directive, HostListener, Input, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[ngxCheckbox]',
})
export class NgxCheckboxDirective implements AfterViewInit {

    @Input() checkedClass: string;
    @Input() nocheckedClass: string;

    private defaultClass: string = 'ngx-checkbox-default';

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
            // If there is not a custom class - Set a default
            if (this.checkedClass) {
                this.element.nativeElement.classList.remove(this.defaultClass);
                this.element.nativeElement.classList.remove(this.nocheckedClass);
                if (!this.hasClass(this.element.nativeElement, this.checkedClass)) {
                    this.element.nativeElement.className += ' ' + this.checkedClass;
                }
            }
            else if (!this.hasClass(this.element.nativeElement, this.defaultClass)) {
                this.element.nativeElement.classList.remove(this.nocheckedClass);
                this.element.nativeElement.className += ' ' + this.defaultClass;
            }
        }
        else {
            // If there is not a custom class - Set a default
            if (this.nocheckedClass) {
                this.element.nativeElement.classList.remove(this.defaultClass);
                this.element.nativeElement.classList.remove(this.checkedClass);
                if (!this.hasClass(this.element.nativeElement, this.nocheckedClass)) {
                    this.element.nativeElement.className += ' ' + this.nocheckedClass;
                }
            }
            else if (!this.hasClass(this.element.nativeElement, this.defaultClass)) {
                this.element.nativeElement.classList.remove(this.checkedClass);
                this.element.nativeElement.className += ' ' + this.defaultClass;
            }

        }
    }

    //Check if element has class
    private hasClass(target: any, elementClassName: string) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    }

    /**
     * After click in the Input-Checkbox call setStyle
     * @param evt 
     */
    @HostListener('click', ['$event']) public onClickCheckbox(evt) {
        this.setStyle();
    }
}