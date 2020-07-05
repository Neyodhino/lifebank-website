import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CgoComponent } from './cgo.component';

describe('CgoComponent', () => {
  let component: CgoComponent;
  let fixture: ComponentFixture<CgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
