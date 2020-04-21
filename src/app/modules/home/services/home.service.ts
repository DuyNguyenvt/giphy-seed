import { Injectable } from '@angular/core';

import { ReactService } from 'src/utils/Service/react.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService extends ReactService {
  state: any;
  constructor() {
    super();
    this.state = {
      homeMasterData: {
        searchGiphies: {
          data: {},
          isLoading: {},
        },
        favorGiphies: {
          data: {},
        },
      },
      giphyMasterData: {},
    };
  }

  changeState(newState: any) {
    this.state = newState;
  }

  // getState() {
  //   return this.state;
  // }
}
