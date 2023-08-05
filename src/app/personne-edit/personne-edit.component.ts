import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personne-edit',
  templateUrl: './personne-edit.component.html',
  styleUrls: ['./personne-edit.component.css']
})
export class PersonneEditComponent  implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  personneData: any = {};
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }
  ngOnInit() { 
    this.restApi.getPersonne(this.id).subscribe((data: {}) => {
      this.personneData = data;
    })
  }
  // Update personne data
  updatePersonne() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updatePersonne(this.id, this.personneData).subscribe(data => {
        this.router.navigate(['/personne-list'])
      })
    }
  }
}