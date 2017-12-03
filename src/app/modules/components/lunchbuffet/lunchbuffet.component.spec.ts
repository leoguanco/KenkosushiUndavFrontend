import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchbuffetComponent } from './lunchbuffet.component';

describe('LunchbuffetComponent', () => {
  let component: LunchbuffetComponent;
  let fixture: ComponentFixture<LunchbuffetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchbuffetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchbuffetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
