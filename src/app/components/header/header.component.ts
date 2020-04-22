import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { HomeService } from 'src/app/modules/home/services/home.service';
import * as _ from 'lodash';
import { map, startWith } from 'rxjs/operators';

interface option {
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  optionCtrl = new FormControl();
  filteredOptions: Observable<option[]>;
  suggestOptions: option[] = [
    {
      name: 'Black Pink',
    },
    {
      name: 'SNSD',
    },
    {
      name: 'Everglow',
    },
    {
      name: 'Twice',
    },
  ];
  constructor(private homeService: HomeService) {
    this.filteredOptions = this.handleFilterOptions();
  }

  _filterStates(value: string): option[] {
    const filterValue = value.toLowerCase();

    return this.suggestOptions.filter(
      (state) => state.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  handleFilterOptions = () => {
    return this.optionCtrl.valueChanges.pipe(
      map((inputValue) =>
        inputValue
          ? this.suggestOptions.filter(
              (optionItem) =>
                optionItem.name
                  .toLowerCase()
                  .indexOf(inputValue.toLowerCase()) >= 0
            )
          : this.suggestOptions
      )
    );
  };

  clickSearch() {
    this.homeService.fetchData({
      offset: 0,
      keyword: this.optionCtrl.value,
    });
  }

  ngOnInit(): void {}
}
