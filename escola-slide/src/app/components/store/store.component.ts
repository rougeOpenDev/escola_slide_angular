import { Component, OnInit } from '@angular/core';

import { StoreItem } from 'src/app/models/store-item.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  private _storeItensList: StoreItem[];

  constructor(private storeService: StoreService) {

    this._storeItensList = [];
  }

  ngOnInit(): void {

    this.storeService.getItensStoreList()
      .then((list: any) => {

        if (list) {

          this._storeItensList = list;
        }
      });
  }

  get storeItensList() {

    return this._storeItensList;
  }
}
