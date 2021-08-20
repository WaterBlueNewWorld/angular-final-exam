import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponentT } from './new.component';

describe('NewComponent', () => {
  let component: NewComponentT;
  let fixture: ComponentFixture<NewComponentT>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewComponentT ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponentT);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
