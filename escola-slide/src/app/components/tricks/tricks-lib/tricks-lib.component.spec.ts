import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TricksLibComponent } from './tricks-lib.component';

describe('TricksLibComponent', () => {
  let component: TricksLibComponent;
  let fixture: ComponentFixture<TricksLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TricksLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TricksLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
