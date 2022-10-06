import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentServiceTsComponent } from './component.service.ts.component';

describe('ComponentServiceTsComponent', () => {
  let component: ComponentServiceTsComponent;
  let fixture: ComponentFixture<ComponentServiceTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentServiceTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentServiceTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
