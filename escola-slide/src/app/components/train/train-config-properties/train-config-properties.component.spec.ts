import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainConfigPropertiesComponent } from './train-config-properties.component';

describe('TrainConfigPropertiesComponent', () => {
  let component: TrainConfigPropertiesComponent;
  let fixture: ComponentFixture<TrainConfigPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainConfigPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainConfigPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
