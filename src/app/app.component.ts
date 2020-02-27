import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';
// import {} from 'googlemaps';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {
  markers: any;
  marker: any;
  // latitude: any;
  // longitude: any;
  zoom: any;
  getAddress: any;
  info: string;
  currentLat: any;
  currentLng: any;
  map: google.maps.Map;
  // radius = 5;
  infowindow = new google.maps.InfoWindow();
  contentString: any;
  mapRangeSelect = 5;
  mapRange: String = '5';
//   title = 'jokes';
//  // update = false;
//   jokes: any;
//   constructor(swUpdate: SwUpdate, private data: DataService) {
//     swUpdate.available.subscribe(event => {
//        // this.update = true;
//        swUpdate.activateUpdate().then(() => {
//        document.location.reload();
//        });
//     });
//   }
//   ngOnInit(): void {
//     this.data.getJokes().subscribe(res => {
//      this.jokes = res;
//     });
//   }
ngAfterViewInit() {
  this.mapLocData();
}
mapLocData() {
  navigator.geolocation.getCurrentPosition((position) => {
    this.currentLat = position.coords.latitude;
    this.currentLng = position.coords.longitude;
   // this.hospitalSearch(position.coords.latitude, position.coords.longitude, this.mapRangeSelect);
    const mapProp = {
      center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      zoom: 12
    };
    this.map = new google.maps.Map(document.getElementById('map'), mapProp);
    this.addMarker(mapProp.center, this.map);
    new google.maps.Circle({
      center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      map: this.map,
      radius: this.mapRangeSelect * 1000,          // IN METERS.
      fillColor: '#FF6600',
      fillOpacity: 0.3,
      strokeColor: '#FFF',
      strokeWeight: 0         // DON'T SHOW CIRCLE BORDER.
    }).setMap(this.map);
  });

}
addMarker(pos, map) {
  const marker = new google.maps.Marker({
    position: pos,
    map: map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
  });
}
}
