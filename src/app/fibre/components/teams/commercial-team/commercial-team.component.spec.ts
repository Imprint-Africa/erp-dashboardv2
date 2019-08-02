import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialTeamComponent } from './commercial-team.component';

describe('CommercialTeamComponent', () => {
  let component: CommercialTeamComponent;
  let fixture: ComponentFixture<CommercialTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
