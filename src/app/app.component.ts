import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IResult } from './parentheses/parentheses.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  stack = [];
  public validityResult: IResult = {
    isValid: false,
  };

  public checkValidity($event) {
    //console.log($event);
    //console.log(`key: ${$event.key}, code: ${$event.code}, value: ${$event.target.value}`);
    //let input = $event.target.value;
    let key = $event.key;
    
    if (key === '('){
      this.validityResult.isValid = false;
      this.stack.push(key);
    }
    if (key === ')'){
      let popKey = this.stack.pop();
      if (popKey === '('){
        if (this.stack.length === 0){
          this.validityResult.isValid = true;
        }
        else {
          this.validityResult.isValid = false;
        }
        
        console.log(`corect: ${this.validityResult.isValid}`, this.stack);
      }
    }
  }
}
