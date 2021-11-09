import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupbysemComponent } from './groupbysem.component';

describe('GroupbysemComponent', () => {
  let component: GroupbysemComponent;
  let fixture: ComponentFixture<GroupbysemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupbysemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupbysemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
