import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourNotFourComponent } from './four-not-four.component';

describe('FourNotFourComponent', () => {
  let component: FourNotFourComponent;
  let fixture: ComponentFixture<FourNotFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourNotFourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FourNotFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
