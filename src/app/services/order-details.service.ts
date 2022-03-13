import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails=[
    {id:1, image:"../../../assets/burger.jpg" ,name:"Buger",price:"$5",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    {id:2, image:"../../../assets/cake.jpg" ,name:"Cake",price:"$5",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    {id:3, image:"../../../assets/food.jpg" ,name:"Food Item3",price:"$5",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    {id:4, image:"../../../assets/pancake.jpg" ,name:"Pancake",price:"$5",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    
  ]

}
