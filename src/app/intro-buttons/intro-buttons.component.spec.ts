import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroButtonsComponent } from './intro-buttons.component';

describe('IntroButtonsComponent', () => {
  let component: IntroButtonsComponent;
  let fixture: ComponentFixture<IntroButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
