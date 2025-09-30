import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VButton } from './v-button';

describe('VButton', () => {
  let component: VButton;
  let fixture: ComponentFixture<VButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
