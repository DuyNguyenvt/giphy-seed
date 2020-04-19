import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  state: any;
  constructor() {
    this.state = {
      homeMasterData: {
        data: {
          items: [
            {
              name: 'giphy131',
            },
            {
              items: {
                name: 'giphy2',
              },
            },
          ],
        },
        isLoading: false,
      },
    };
  }
}
