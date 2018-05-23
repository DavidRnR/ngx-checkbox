# NgxCheckbox

Implement custom Checkbox compatible with all the brosers.

## Getting Started

Install `ngx-checkbox` from `npm`:
```bash
npm install ngx-checkbox --save
```

Add to NgModule imports:
```
import { NgxCheckbox } from 'ngx-checkbox';

@NgModule({
  ...
  imports: [NgxCheckbox,...]
  ...
})
```

Add component to your page:
```
    <-- Example with FontAwesome icon-->
    <ngx-checkbox [iconClass]="'fas fa-check'"> </ngx-checkbox>

```

```
    <-- Example with FontAwesome icon && Output when is Clicked-->
    <ngx-checkbox [iconClass]="'fas fa-check'" (isClicked)="myFunction($event)"> </ngx-checkbox>

```

```
    <-- Example with FontAwesome icon && Output when is Clicked && Clicked by default (True/false)-->
    <ngx-checkbox [iconClass]="'fas fa-check'" [isChecked]="true" (isClicked)="myFunction($event)"> </ngx-checkbox>

```

### Credits
Martín, Carlos David - carlosdavidmartin@gmail.com