import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * This is a black box. It will do the following:
 *    1. when a user is typing something we will run the isAllowed (which might have multiple implementations so we have it stored as a variable) to determine if we only have parantheses: ( and )
 *    2. When a valid string is introduced in the input we emit it on updateSequence
 *    3. The parent component is going to subscribe to the updateSequence and run a function to determine if the string is correctly parenthesised and update the result which is passed back to this black box
 *    4. We are displaying the result in the template
 */

export interface IResult {
  isValid: boolean;
}

@Component({
  selector: 'app-parentheses',
  templateUrl: './parentheses.component.html',
  styleUrls: ['./parentheses.component.css'],
})
export class ParenthesesComponent {
  @Input() result: IResult | undefined;
  @Output() updateSequence = new EventEmitter<string>();

  public sendKey(key){
    this.updateSequence.emit(key);
  }

}
