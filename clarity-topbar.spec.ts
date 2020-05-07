import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClarityTopbarComponent } from './clarity-topbar.component';

describe('ClarityTopbarComponent', () => {
  let component:ClarityTopbarComponent;
  let fixture: ComponentFixture<ClarityTopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClarityTopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
