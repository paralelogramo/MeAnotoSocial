import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmoduledialogComponent } from './addmoduledialog.component';

describe('AddmoduledialogComponent', () => {
  let component: AddmoduledialogComponent;
  let fixture: ComponentFixture<AddmoduledialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmoduledialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmoduledialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
