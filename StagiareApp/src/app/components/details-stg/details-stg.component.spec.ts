import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsStgComponent } from './details-stg.component';

describe('DetailsStgComponent', () => {
  let component: DetailsStgComponent;
  let fixture: ComponentFixture<DetailsStgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsStgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsStgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
