import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTeamOverviewComponent } from './project-team-overview.component';

describe('ProjectTeamOverviewComponent', () => {
  let component: ProjectTeamOverviewComponent;
  let fixture: ComponentFixture<ProjectTeamOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTeamOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTeamOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
