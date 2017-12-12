import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmpromotionsComponent } from './abmpromotions.component';

describe('AbmpromotionsComponent', () => {
  let component: AbmpromotionsComponent;
  let fixture: ComponentFixture<AbmpromotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmpromotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmpromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
