import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainConfigCheckoutComponent } from './train-config-checkout.component';

describe('TrainConfigCheckoutComponent', () => {
  let component: TrainConfigCheckoutComponent;
  let fixture: ComponentFixture<TrainConfigCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainConfigCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainConfigCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
