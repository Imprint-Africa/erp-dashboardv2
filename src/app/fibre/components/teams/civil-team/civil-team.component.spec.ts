import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilTeamComponent } from './civil-team.component';

describe('CivilTeamComponent', () => {
  let component: CivilTeamComponent;
  let fixture: ComponentFixture<CivilTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
