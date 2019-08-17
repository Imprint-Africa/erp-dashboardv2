import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFibrehomeComponent } from './home-fibrehome.component';

describe('HomeFibrehomeComponent', () => {
  let component: HomeFibrehomeComponent;
  let fixture: ComponentFixture<HomeFibrehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFibrehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFibrehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
