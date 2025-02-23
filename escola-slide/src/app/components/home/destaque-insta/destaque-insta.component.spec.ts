import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestaqueInstaComponent } from './destaque-insta.component';

describe('DestaqueInstaComponent', () => {
  let component: DestaqueInstaComponent;
  let fixture: ComponentFixture<DestaqueInstaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestaqueInstaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestaqueInstaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
