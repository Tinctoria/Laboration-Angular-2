import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsSpaComponent } from './what-is-spa.component';

describe('WhatIsSpaComponent', () => {
  let component: WhatIsSpaComponent;
  let fixture: ComponentFixture<WhatIsSpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsSpaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
