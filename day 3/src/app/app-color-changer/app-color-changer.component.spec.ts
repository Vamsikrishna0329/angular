import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppColorChangerComponent } from './app-color-changer.component';

describe('AppColorChangerComponent', () => {
  let component: AppColorChangerComponent;
  let fixture: ComponentFixture<AppColorChangerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppColorChangerComponent]
    });
    fixture = TestBed.createComponent(AppColorChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
