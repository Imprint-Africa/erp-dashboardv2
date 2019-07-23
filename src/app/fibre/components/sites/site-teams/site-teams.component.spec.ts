import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteTeamsComponent } from './site-teams.component';

describe('SiteTeamsComponent', () => {
  let component: SiteTeamsComponent;
  let fixture: ComponentFixture<SiteTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
