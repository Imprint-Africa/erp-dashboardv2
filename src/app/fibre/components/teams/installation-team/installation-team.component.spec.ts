import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationTeamComponent } from './installation-team.component';

describe('InstallationTeamComponent', () => {
  let component: InstallationTeamComponent;
  let fixture: ComponentFixture<InstallationTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallationTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallationTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
