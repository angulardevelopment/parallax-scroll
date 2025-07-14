import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrettierDemoComponent } from './prettier-demo.component';

describe('PrettierDemoComponent', () => {
  let component: PrettierDemoComponent;
  let fixture: ComponentFixture<PrettierDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrettierDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrettierDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
