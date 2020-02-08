import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaChildComponent } from './pwa-child.component';

describe('PwaChildComponent', () => {
  let component: PwaChildComponent;
  let fixture: ComponentFixture<PwaChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwaChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
