import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravelService } from '../services/travel.service';

@Component({
  selector: 'app-detalle-paquete',
  templateUrl: './detalle-paquete.component.html',
  styleUrls: ['./detalle-paquete.component.css']
})
export class DetallePaqueteComponent implements OnInit {

  public id:string = '';
  public spinner:boolean = false;
  public contador:number = 0;
  public precio:number = 200;
  public suma:number = 200;
  constructor(private activatedRoute:ActivatedRoute, private travelService:TravelService) { }

  public data:any[] = [];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(ruta => {
      console.log('ruta:', ruta.id);
      this.id = ruta.id;
    })

    try {
      this.spinner = true;
      this.travelService.getPlaceById(this.id).subscribe((response:any) => {
        console.log('response:', response);
        this.data = response.results;
        this.spinner = false;
      })
    } catch (error) {
      
    }
    
  }

  add = () => {
    this.contador++;
    this.suma = this.precio * this.contador;

  }

  dis = () => {
    if(this.contador == 0){
      return
    }
    this.contador--;
   
  }

  comprar = () => {

  }

}
