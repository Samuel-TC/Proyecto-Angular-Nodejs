import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRequestAdminComponent } from './list-request-admin.component';

describe('ListRequestAdminComponent', () => {
  let component: ListRequestAdminComponent;
  let fixture: ComponentFixture<ListRequestAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRequestAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRequestAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
