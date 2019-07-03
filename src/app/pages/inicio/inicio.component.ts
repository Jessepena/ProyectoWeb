import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  categories = ['Design', 'Programming'];
  empleos: any[];

  constructor(private db: AngularFirestore) {
    // Capturar todos los empleos que estan en la db
    this.db.collection('jobs',
      ref => ref.orderBy('created', 'desc')).valueChanges().subscribe(res => {
      // Guardar la lista localmente en mi variable declarada arriba
      this.empleos = res;
    });
  }

  ngOnInit() {
  }

  // Filtrar lista original de empleos y retornar solo los que pertenencen
  // a la categoria recibida como parametro
  filtrarPorCategoria(category: string): any[] {
    return this.empleos.filter(e => e.category === category);
  }

}
