import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperGuideComponent } from './developer-guide.component';

describe('DeveloperGuideComponent', () => {
  let component: DeveloperGuideComponent;
  let fixture: ComponentFixture<DeveloperGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloperGuideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloperGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
