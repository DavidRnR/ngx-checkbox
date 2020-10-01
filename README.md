# NgxCheckbox

Implement a custom Checkbox compatible with all the browsers.
Set your icon and style.

<p align="center">
  <img src="https://github.com/DavidRnR/ngx-checkbox/raw/master/src/assets/browsers.png">
</p>

## Demo: https://stackblitz.com/edit/ngx-checkbox

## Getting Started

Install `ngx-checkbox` from `npm`:
```bash
npm install ngx-checkbox --save
```

#### Add to NgModule imports:
```
import { NgxCheckboxModule } from 'ngx-checkbox';

@NgModule({
  ...
  imports: [NgxCheckboxModule,...]
  ...
})
```

#### API:
<ul>
  <li>@Input() isChecked: boolean;</li>
  <li>@Input() iconClass: string;</li>
  <li>@Input() checkedClass: string;</li>
  <li>@Input() nocheckedClass: string;</li>
  <li>@Input() focusClass: string;</li>
  <li>@Input() size: number = 16; // default </li>
  <li>@Input() tabIndex: number;</li>
  <li>@Input() id: number;</li>
  <li> @Output() isClicked = new EventEmitter();</li> 
</ul>

#### Add component to your page:
```
    <!-- Example with FontAwesome icon-->
    <ngx-checkbox [iconClass]="'fas fa-check'"> </ngx-checkbox>

```

```
    <!-- Example with FontAwesome icon && Output when is Clicked-->
    <ngx-checkbox [iconClass]="'fas fa-check'" (isClicked)="myFunction($event)"> </ngx-checkbox>

```
#### Output when is Clicked && Clicked by default (true/false)
```
    <!-- Example with FontAwesome icon --> 
    <ngx-checkbox [iconClass]="'fas fa-check'" [isChecked]="true" (isClicked)="myFunction($event)"> </ngx-checkbox>

```
#### Add a class when is Checked and when is not Checked.
``` 
    <!-- Example with FontAwesome icon -->

    <!--HTML-->
    <ngx-checkbox [iconClass]="'fas fa-check'"    
                  [checkedClass]="'checkbox-checked'"
                  [nocheckedClass]="'checkbox-no-checked'"> </ngx-checkbox>
    
    <!-- CSS -->
    .checkbox-checked {
     background-color: goldenrod;
     border: 1px solid goldenrod;
     border-radius: 2px;
    }

    .checkbox-no-checked {
     background-color: grey;
     border: 1px solid grey;
     border-radius: 2px;
    }
```

#### Add an ID to implement with a label.
```
 <!--  Example with FontAwesome icon && Label by ID-->
        <label for="my-checkbox-id" class="label-example">Label Checkbox</label>
        <ngx-checkbox [iconClass]="'fas fa-check'" [id]="'my-checkbox-id'"> </ngx-checkbox>
```

#### Set Size
```
    <!-- Example with FontAwesome icon -->
    <ngx-checkbox [iconClass]="'fas fa-check'" [size]="25"></ngx-checkbox>

```
#### Handle it from your Component

```
    <!-- HTML-->
    <!-- Example with FontAwesome icon && Set clicked from Typescript-->
        <ngx-checkbox [iconClass]="'fas fa-check'" #myCheckbox> </ngx-checkbox>   
            <div class="button-row">
                <button mat-raised-button color="primary" (click)="onSetCheckBox()">Set clicked</button>
            </div>

    <!--Typescript-->
    import { NgxCheckboxComponent } from 'ngx-checkbox';

    export class AppComponent {

    @ViewChild('myCheckbox') myCB: NgxCheckboxComponent;

    onSetCheckBox() {
        // Set true or false
        this.myCB.setClick(true);
        }
    }
```

### Credits
Martín, Carlos David - carlosdavidmartin@gmail.com

### License - MIT