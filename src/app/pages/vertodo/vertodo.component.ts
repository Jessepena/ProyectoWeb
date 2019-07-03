import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-vertodo',
  templateUrl: './vertodo.component.html',
  styleUrls: ['./vertodo.component.css']
})
export class VertodoComponent implements OnInit {

  lista: any[];

  constructor(private route: ActivatedRoute, private db: AngularFirestore) {

  }

  ngOnInit() {
    // Recibir categoria por navegacion
    const categoria = this.route.snapshot.paramMap.get('id');

    // Obtener todo de la db
    this.db.collection('jobs').valueChanges().subscribe(res => {
      // Filtrar todo y obtener solo los empleos que sean de esta catefgoria
      // El error es porque no estamos usando una interface y el no sabe
      // lo que es "category"
      this.lista = res.filter(c => c.category === categoria);
    });
  }

}
