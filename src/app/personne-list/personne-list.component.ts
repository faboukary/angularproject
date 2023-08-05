import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';


@Component({
  selector: 'app-personne-list',
  templateUrl: './personne-list.component.html',
  styleUrls: ['./personne-list.component.css']
})
export class PersonneListComponent implements OnInit {
  Personne: any = [];
  constructor(public restApi: RestApiService) {}
  ngOnInit() {
    this.loadPersonnes();
  }
  // Get Personnes list
  loadPersonnes() {
    return this.restApi.getPersonnes().subscribe((data: {}) => {
      this.Personne = data;
    });
  }
  // Delete personne
  deletePersonne(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deletePersonne(id).subscribe((data) => {
        this.loadPersonnes();
      });
    }
  }
}