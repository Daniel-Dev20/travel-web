import { Component, Input, OnInit } from '@angular/core';
import { TravelService } from '../services/travel.service';
import { filter } from 'rxjs/operators';
import Swal from 'sweetalert2'
import { Event, NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent implements OnInit {

  public place:string = '';
  public data:any[] = [];
  public spinner:boolean = false;
  public loading:boolean = false;

  constructor(private travelService:TravelService, private router:Router) {

    this.router.events.pipe(
      filter((e:Event): e is RouterEvent => e instanceof RouterEvent)
    ).subscribe((e:RouterEvent) => {
      if(e instanceof NavigationStart){
        this.loading = true;
      }else if(e instanceof NavigationEnd){
        this.loading = false
      }
    })
   }

  @Input() response:any;

  messageError = (message:string) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${message}`
      
    })
  }
  ngOnInit(): void {
    this.spinner = true;
    try {
      this.travelService.getSearch().subscribe((response:any) => {
        console.log('respomse:', response);
        this.data = response.results;
        this.spinner = false;
      })
    } catch (error) {
      this.messageError('ocurrió un error con el servidor');
    }

   
    
   
  }

  interceptorNavegacion = (event:RouterEvent) => {
    if(event instanceof NavigationStart){

    }
  }

  buscar = () => {
    this.spinner = true;
    try {
      this.travelService.getSearch(this.place).subscribe((response:any) => {
        console.log('respomse:', response);
        this.data = response.results;
        this.spinner = false;
        
      })
    } catch (error) {
      this.messageError('ocurrió un error con el servidor');
    }
  }

}
