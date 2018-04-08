import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ResultadoPesquisaHubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultado-pesquisa-hub',
  templateUrl: 'resultado-pesquisa-hub.html',
})
export class ResultadoPesquisaHubPage {

  longitude: any;
  latitude: any;
  search: string = 'Benfica Fortaleza';
  distancia: any;
  apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json?key=%20AIzaSyAlqoEbORKX3QXZAuSLRgWamgqR7QK9C-E&address='+this.search;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.search = navParams.get('pesquisa');
    this.get();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoPesquisaHubPage');
  }

  getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371.0088; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  get() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        this.longitude =  data['results'][0]['geometry']['location']['lng'];
        this.latitude = data['results'][0]['geometry']['location']['lat'];
        this.distancia = this.getDistanceFromLatLonInKm(-3.7190976, -38.5122545, this.latitude, this.longitude);
      }, err => {
        console.log(err);
      });
    });
  }

}
