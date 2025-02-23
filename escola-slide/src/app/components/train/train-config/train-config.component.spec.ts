import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainConfigComponent } from './train-config.component';

describe('TrainConfigComponent', () => {
  let component: TrainConfigComponent;
  let fixture: ComponentFixture<TrainConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
