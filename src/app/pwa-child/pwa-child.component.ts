import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pwa-child',
  templateUrl: './pwa-child.component.html',
  styleUrls: ['./pwa-child.component.css']
})
export class PwaChildComponent implements OnInit {
  title = 'jokes';
 // update = false;
  jokes: any;
  constructor(swUpdate: SwUpdate, private data: DataService) {
    swUpdate.available.subscribe(event => {
       // this.update = true;
       swUpdate.activateUpdate().then(() => {
       document.location.reload();
       });
    });
  }
  ngOnInit(): void {
    this.data.getJokes().subscribe(res => {
     this.jokes = res;
    });
  }
}
