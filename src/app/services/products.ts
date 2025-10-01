import { Injectable } from '@angular/core';

export interface Product{
  id:number;
  nombre:string;
  descripcion:string;
  precio:number;
  imagen:string;
}

@Injectable({
  providedIn: 'root'
})

export class Products {
  
  private products:Product[]=[
    {
      id:1,
      nombre:'Product1',
      descripcion:'Ideal para la casa',
      precio: 35000,
      imagen: '/imagenes/3.jpg'
    },
    {
      id:2,
      nombre:'Product2',
      descripcion:'Ideal para el jardin',
      precio: 45000,
      imagen: '/imagenes/5.jpg'
    },
    {
      id:3,
      nombre:'Product3',
      descripcion:'Ideal para los niños',
      precio: 55000,
      imagen: '/imagenes/6.jpg'
    },
    {
      id:4,
      nombre:'Product4',
      descripcion:'Ideal para los adultos',
      precio: 60000,
      imagen: '/imagenes/7.jpg'
    }
  ]
  constructor() {}
  getProducts():Product[]{
    return this.products;
  }
}
