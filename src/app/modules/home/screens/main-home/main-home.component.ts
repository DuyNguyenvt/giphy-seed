import { Component, OnInit } from '@angular/core';

import { HomeService } from 'src/app/modules/home/services/home.service';
import { procService } from 'src/utils/ngService';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss'],
})
export class MainHomeComponent implements OnInit {
  // homeState: any;
  // homeService: any;
  // private foo:Foo = new Foo();
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    // fetch(
    //   'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=m78FKgk6mIvBbw3wR7zXTou9jubyEBme&limit=5'
    // )
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log(result);
    //   });

    console.log(this.homeService.getState());
    this.homeService.setState({ homeMasterData2: 'test' });
    console.log(this.homeService.getState());
  }
}
