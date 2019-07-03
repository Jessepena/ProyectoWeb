import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-detailjob',
  templateUrl: './detailjob.component.html',
  styleUrls: ['./detailjob.component.css']
})
export class DetailjobComponent implements OnInit {

  job;

  constructor(private route: ActivatedRoute, private db: AngularFirestore) {

  }

  ngOnInit() {
    // Recibir categoria por navegacion
    const email = this.route.snapshot.paramMap.get('id');

    // Obtener todo de la db
    this.db.collection('jobs').valueChanges().subscribe(res => {
      // Filtrar todo y obtener solo los empleos que sean de esta catefgoria
      // El error es porque no estamos usando una interface y el no sabe
      // lo que es "email"
      this.job = res.find(c => c.email === email);
    });
  }

}
