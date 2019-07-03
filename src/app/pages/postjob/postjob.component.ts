import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {

  company: '';
  type: '';
  position: '';
  location: '';
  category: '';
  description: '';
  howto: '';
  email: '';

  // Llamar al servicio singleton creado/llamado anteriormente en otro sitio
  constructor(private db: AngularFirestore, private router: Router) { }

  ngOnInit() {
  }

  guardar() {
    const job: any = {
      created: new Date(),
      company: this.company,
      type: this.type,
      position: this.position,
      location: this.location,
      category: this.category,
      description: this.description,
      howto: this.howto,
      email: this.email
    };

    console.log(job);

    // Forma facil de agregar algo en la database (db) sin joder mucho
    // con validaciones reales
    this.db.collection('jobs').add(job).then(res => {
      this.router.navigate(['inicio']);
    });
  }

}
