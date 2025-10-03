import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLabel } from './page-label';

describe('PageLabel', () => {
  let component: PageLabel;
  let fixture: ComponentFixture<PageLabel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLabel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLabel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
