import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainePageComponent } from './maine-page.component';

describe('MainePageComponent', () => {
  let component: MainePageComponent;
  let fixture: ComponentFixture<MainePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
