import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  tripForm: FormGroup;
  aeroflotTrips$:any;
  rzdTrips$:any;

  constructor(private fb: FormBuilder,
    private tripService: TripService) {
    this.tripForm = this.fb.group({});
   }

  ngOnInit(): void {    
    this.tripForm = this.fb.group({
      distance: [],
      luggageWeight:[],
      age:[]
    })  

  }

  onSubmit(){
    var distance = this.tripForm.value.distance;
    var luggageWeight = this.tripForm.value.luggageWeight;
    var age = this.tripForm.value.age;

    this.tripService.countTrips(distance, luggageWeight, age);
    
    this.aeroflotTrips$ = this.tripService.aeroflot;
    this.rzdTrips$ = this.tripService.rzd;      
  }
}
