import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneCreateComponent } from './personne-create.component';

describe('PersonneCreateComponent', () => {
  let component: PersonneCreateComponent;
  let fixture: ComponentFixture<PersonneCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonneCreateComponent]
    });
    fixture = TestBed.createComponent(PersonneCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
