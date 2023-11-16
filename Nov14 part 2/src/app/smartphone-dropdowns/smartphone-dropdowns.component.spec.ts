import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneDropdownsComponent } from './smartphone-dropdowns.component';

describe('SmartphoneDropdownsComponent', () => {
  let component: SmartphoneDropdownsComponent;
  let fixture: ComponentFixture<SmartphoneDropdownsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartphoneDropdownsComponent]
    });
    fixture = TestBed.createComponent(SmartphoneDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
