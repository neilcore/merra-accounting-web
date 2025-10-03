import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VSelect } from './v-select';

describe('VSelect', () => {
  let component: VSelect;
  let fixture: ComponentFixture<VSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VSelect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
