import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRequestUserComponent } from './list-request-user.component';

describe('ListRequestUserComponent', () => {
  let component: ListRequestUserComponent;
  let fixture: ComponentFixture<ListRequestUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRequestUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRequestUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
