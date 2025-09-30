import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationSelect } from './organization-select';

describe('OrganizationSelect', () => {
  let component: OrganizationSelect;
  let fixture: ComponentFixture<OrganizationSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizationSelect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
