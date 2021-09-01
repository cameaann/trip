import { Injectable } from '@angular/core';
import { ATARIFS } from './aTarifs-db';
import { RZDTARIFS } from './rzdTarifs-bd';
import { Tarif } from './model/tarif.model';


@Injectable({
  providedIn: 'root'
})
export class TripService {
  aTarifs = ATARIFS;
  rzdTarifs = RZDTARIFS;
  aeroflot = [];
  rzd = [];

  km = 0;
  luggageWeight = 0;
  age = 0;

  constructor() {}

  countTrips(km: number, weight: number, age: number) {
    this.km = km;
    this.luggageWeight = weight;
    this.age = age;

    this.aeroflot = this.getTrips(this.aTarifs);
    this.rzd = this.getTrips(this.rzdTarifs);

  }

  checkLuggage(element:Tarif){
    if(this.luggageWeight>element.maxLuggageWeight){
      return undefined;
    }
    if(this.luggageWeight>element.freeLuggage&&element.kgLuggageCost){
      return (this.luggageWeight - element.freeLuggage)*element.kgLuggageCost;
    }
    if(this.luggageWeight>element.freeLuggage&&element.luggageCost){
      return element.luggageCost;
    }
    return 0;
  }

  distanceCalculation(element:Tarif){
    return element.kmCost*this.km;
  }

  calc(element:Tarif){
      var distance = this.distanceCalculation(element);
      var luggage = this.checkLuggage(element);

      var cost = luggage ? luggage+distance : distance;

      cost = element.luggageDiscount != 0 ? cost - cost*element.luggageDiscount : cost;
      cost = element.distanceDiscount != 0 && luggage ? distance - distance*element.distanceDiscount + luggage :cost;
      return cost; 
 }

 getTrips(array:any){
  var trips:any = [];
  array.forEach((element:Tarif) => {
    var cost = this.calc(element);
    var trip = {type: element.name, cost: cost};    
    trips.push(trip);    
  })
    return trips;  
 }
}


