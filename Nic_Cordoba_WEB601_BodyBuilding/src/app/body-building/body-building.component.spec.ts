import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyBuildingComponent } from './body-building.component';

describe('BodyBuildingComponent', () => {
  let component: BodyBuildingComponent;
  let fixture: ComponentFixture<BodyBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyBuildingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
