import { Directive, HostListener, Input, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[ngxCheckbox]',
})
export class NgxCheckboxDirective implements AfterViewInit {

    @Input() checkedClass: string;
    @Input() nocheckedClass: string;

    private defaultClass: string = 'ngx-checkbox-default';
    private defaultfocusClass: string = 'ngx-checkbox-focus-default'

    constructor(private element: ElementRef) {

    }

    /**
     * After render the element/html set the Style
     */
    ngAfterViewInit(): void {
        this.setStyle();
    }

    /**
     * Set the element by param, checked or not and then apply the style
     * @param status 
     */
    setCheckbox(status: boolean) {
        console.log('innnn', status);

        if (status) {
            this.element.nativeElement.children[0].checked = true;
            this.setAttributes('aria-checked', 'true');
            this.setStyle();
        } else {
            this.element.nativeElement.children[0].checked = false;
            this.setAttributes('aria-checked', 'false');
            this.setStyle();
        }
    }

    /**
     * After Press Key-Space set Clicked/No-Clicked
     */
    setCheckboxByKeyPressed() {
        let status: boolean;

        if (this.element.nativeElement.children[0].checked) {
            status = false;
        }
        else {
            status = true;
        }
        this.setCheckbox(status);
    }

    /**
     * Set Focus Class if Exist
     */
    setFocusClass(focusClass: string) {
        if (focusClass) {
            if (!this.hasClass(this.element.nativeElement, focusClass)) {
                this.element.nativeElement.className += ' ' + focusClass;
            }
            else {
                this.element.nativeElement.classList.remove(focusClass);
            }
        }
        else {
            // Set Focus Default 
            if (!this.hasClass(this.element.nativeElement, this.defaultfocusClass)) {
                this.element.nativeElement.className += ' ' + this.defaultfocusClass;
            }
            else {
                this.element.nativeElement.classList.remove(this.defaultfocusClass);
            }
        }

    }

    /**
     * Check if the Input-Checkbox if checked or not - Then apply the style
     */
    private setStyle() {

        if (this.element.nativeElement.children[0].checked) {
            // Set ARIA
            this.setAttributes('aria-checked', 'true');

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
            // Set ARIA
            this.setAttributes('aria-checked', 'false');

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

    /**
     * Set Attributes to the component like ARIA 
     */
    private setAttributes(attr: string, attrValue: string) {
        // Set Attribute for the <span>
        this.element.nativeElement.children[1].setAttribute(attr, attrValue);
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

    /**
     * After key-space pressed in the Input-Checkbox call setStyle
     * @param evt 
     */
    @HostListener('keypress', ['$event']) public onKeyPressCheckbox(evt) {
        // If key is Space
        if (evt.keyCode === 32) {
            this.setCheckboxByKeyPressed();
        }
    }
}