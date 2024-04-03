import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailComponent } from './datail.component';

describe('DatailComponent', () => {
  let component: DatailComponent;
  let fixture: ComponentFixture<DatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
