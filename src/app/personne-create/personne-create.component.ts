import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-personne-create',
  templateUrl: './personne-create.component.html',
  styleUrls: ['./personne-create.component.css']
})
export class PersonneCreateComponent  implements OnInit {
  @Input() personneDetails = { nom: '', prenom: '',	numeroCarteIdentite: '', numeroPassePort: '',	sexe: '', 	nationalite: '',	telephoneMobile: '',	telephoneFixe: '',	telephoneFree: '' };
  constructor(public restApi: RestApiService, public router: Router) {}
  ngOnInit() {}
  addPersonne(dataPersonne: any) {
    this.restApi.createPersonne(this.personneDetails).subscribe((data: {}) => {
      this.router.navigate(['/personne-list']);
    });
  }
}

	