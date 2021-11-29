import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderComponentsComponent } from './render-components.component';

describe('RenderComponentsComponent', () => {
  let component: RenderComponentsComponent;
  let fixture: ComponentFixture<RenderComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
