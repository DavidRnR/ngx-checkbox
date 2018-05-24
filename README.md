# NgxCheckbox

Implement a custom Checkbox compatible with all the browsers.
Set your icon and style.

<p align="center">
  <img src="https://github.com/DavidRnR/ngx-checkbox/raw/master/src/assets/browsers.png">
</p>

## Getting Started

Install `ngx-checkbox` from `npm`:
```bash
npm install ngx-checkbox --save
```

Add to NgModule imports:
```
import { NgxCheckboxModule } from 'ngx-checkbox';

@NgModule({
  ...
  imports: [NgxCheckboxModule,...]
  ...
})
```

#### Add component to your page:
```
    <-- Example with FontAwesome icon-->
    <ngx-checkbox [iconClass]="'fas fa-check'"> </ngx-checkbox>

```

```
    <-- Example with FontAwesome icon && Output when is Clicked-->
    <ngx-checkbox [iconClass]="'fas fa-check'" (isClicked)="myFunction($event)"> </ngx-checkbox>

```
#### Output when is Clicked && Clicked by default (true/false)
```
    <-- Example with FontAwesome icon --> 
    <ngx-checkbox [iconClass]="'fas fa-check'" [isChecked]="true" (isClicked)="myFunction($event)"> </ngx-checkbox>

```
#### Add a class when is Checked and when is not Checked.
``` 
    <-- Example with FontAwesome icon -->

    <--HTML-->
    <ngx-checkbox [iconClass]="'fas fa-check'"    
                  [checkedClass]="'checkbox-checked'"
                  [nocheckedClass]="'checkbox-no-checked'"> </ngx-checkbox>
    
    <-- CSS -->
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
#### Set Size
```
    <-- Example with FontAwesome icon -->
    <ngx-checkbox [iconClass]="'fas fa-check'" [size]="25"></ngx-checkbox>

```

### Credits
Martín, Carlos David - carlosdavidmartin@gmail.com