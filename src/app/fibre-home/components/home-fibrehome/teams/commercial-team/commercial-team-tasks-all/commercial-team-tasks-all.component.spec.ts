import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialTeamTasksAllComponent } from './commercial-team-tasks-all.component';

describe('CommercialTeamTasksAllComponent', () => {
  let component: CommercialTeamTasksAllComponent;
  let fixture: ComponentFixture<CommercialTeamTasksAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialTeamTasksAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialTeamTasksAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
