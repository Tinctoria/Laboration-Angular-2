import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferencesSpaTraditionalComponent } from './differences-spa-traditional.component';

describe('DifferencesSpaTraditionalComponent', () => {
  let component: DifferencesSpaTraditionalComponent;
  let fixture: ComponentFixture<DifferencesSpaTraditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferencesSpaTraditionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferencesSpaTraditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
