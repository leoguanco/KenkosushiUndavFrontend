import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmuserComponent } from './abmuser.component';

describe('AbmuserComponent', () => {
  let component: AbmuserComponent;
  let fixture: ComponentFixture<AbmuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
