import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldWidgetComponent } from './textfield-widget.component';

describe('TextfieldWidgetComponent', () => {
  let component: TextfieldWidgetComponent;
  let fixture: ComponentFixture<TextfieldWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextfieldWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextfieldWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
