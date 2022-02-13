import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialGeneralComponent } from './material-general.component';

describe('MaterialGeneralComponent', () => {
  let component: MaterialGeneralComponent;
  let fixture: ComponentFixture<MaterialGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
