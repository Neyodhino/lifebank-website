import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionContactComponent } from './vision-contact.component';

describe('VisionContactComponent', () => {
  let component: VisionContactComponent;
  let fixture: ComponentFixture<VisionContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisionContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisionContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
