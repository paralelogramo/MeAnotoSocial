import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulecardComponent } from './modulecard.component';

describe('ModulecardComponent', () => {
  let component: ModulecardComponent;
  let fixture: ComponentFixture<ModulecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
