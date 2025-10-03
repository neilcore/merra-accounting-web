import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSection } from './custom-section';

describe('CustomSection', () => {
  let component: CustomSection;
  let fixture: ComponentFixture<CustomSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
