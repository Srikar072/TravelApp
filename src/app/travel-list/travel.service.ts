
import { Injectable } from "@angular/core";
import { IBooking } from "./travel-list.model";
 
@Injectable({
    providedIn:'root'
})
 
export class BookingService{
    private destinations:IBooking[ ]=[
        {
            tourID: 1,
            img: 'assets/images/jaipur.jpg',
            name: 'Jaipur',
            location: 'Rajasthan',
            rating: 4.7,
            price: '75,000'
          },
          {
            tourID: 2,
            img: 'assets/images/goa.jpg',
            name: 'Goa',
            location: 'Goa',
            rating: 4.8,
            price: '90,000'
          },
          {
            tourID: 3,
            img: 'assets/images/varanasi.jpg',
            name: 'Varanasi',
            location: 'Uttar Pradesh',
            rating: 4.9,
            price: '65,000'
          },
          {
            tourID: 4,
            img: 'assets/images/kerala.jpg',
            name: 'Kerala',
            location: 'Kerala',
            rating: 4.0,
            price: '110,000'
          },
          {
            tourID: 5,
            img: 'assets/images/agra.jpg',
            name: 'Agra',
            location: 'Uttar Pradesh',
            rating: 4.6,
            price: '55,000'
          },
          {
            tourID: 6,
            img: 'assets/images/mumbai.jpg',
            name: 'Mumbai',
            location: 'Maharashtra',
            rating: 4.7,
            price: '95,000'
          },
          {
            tourID: 7,
            img: 'assets/images/delhi.jpg',
            name: 'Delhi',
            location: 'Delhi',
            rating: 4.6,
            price: '80,000'
          },
          {
            tourID: 8,
            img: 'assets/images/ladakh.jpg',
            name: 'Ladakh',
            location: 'Jammu & Kashmir',
            rating: 4.9,
            price: '150,000'
          },
          {
            tourID: 9,
            img: 'assets/images/udaipur.jpg',
            name: 'Udaipur',
            location: 'Rajasthan',
            rating: 3.5,
            price: '85,000'
          },
]
getBooking(){
    return this.destinations;
}

getDestinations(): IBooking[]{
  return this.destinations;
}
getTravelbyId(id:number){
  const travel = this.destinations.find(
    travel => travel.tourID ===id
  )
  return travel;
}

addTravel(travel: IBooking): void {
  const newTourID = this.destinations.length > 0 
    ? Math.max(...this.destinations.map(t => t.tourID)) + 1 
    : 1;
  travel.tourID = newTourID;
  this.destinations.push(travel);
}

updateTravel(travel:IBooking)
{
    const travelidx = this.destinations.findIndex(x=> x.tourID === travel.tourID);
    if(travelidx != null && travelidx != undefined)
    {
        this.destinations[travelidx] = travel;
    }
}

deleteTravel(id: number): void {
  const index = this.destinations.findIndex(travel => travel.tourID=== id);
  if (index !== -1) {
    this.destinations.splice(index, 1);
  }
}
}

/*
updateTravel(movie:IBooking){
  const travelidx = this.destinations.findIndex(x=> x.tourID === travel.tourID);
  if (travelidx != null && travelidx != undefined);
}*/
