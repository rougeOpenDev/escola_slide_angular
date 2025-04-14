import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainConfigSelectComponent } from './train-config-select.component';

describe('TrainConfigSelectComponent', () => {
  let component: TrainConfigSelectComponent;
  let fixture: ComponentFixture<TrainConfigSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainConfigSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainConfigSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
