import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementTeamComponent } from './procurement-team.component';

describe('ProcurementTeamComponent', () => {
  let component: ProcurementTeamComponent;
  let fixture: ComponentFixture<ProcurementTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcurementTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
