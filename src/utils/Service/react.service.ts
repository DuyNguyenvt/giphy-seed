import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class ReactService {
  state: object;
  constructor() {}

  // * setState
  public setState(newState: object) {
    const wrongKeys = [];
    const cloneState = { ...this.state };
    const newStateKeys = Object.keys(newState);
    const stateKeys = Object.keys(this.state);
    const validateKeys = newStateKeys.filter((keyItem) => {
      const checkValidKey = !!_.find(stateKeys, (key) => key === keyItem);
      if (!checkValidKey) {
        wrongKeys.push(keyItem);
      }
      return checkValidKey;
    });
    if (validateKeys.length === newStateKeys.length) {
      this.state = { ...cloneState, ...newState };
    } else {
      console.log(this);
      throw `
      (Error in: ${JSON.stringify(this.state)})\n
      Incorrect state keys: \n
      ${wrongKeys.map((key) => `${key}\n`)}
      `;
    }
  }

  //* getState
  public getState() {
    return this.state;
  }
}
