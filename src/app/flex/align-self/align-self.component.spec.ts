import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignSelfComponent } from './align-self.component';

describe('AlignSelfComponent', () => {
  let component: AlignSelfComponent;
  let fixture: ComponentFixture<AlignSelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlignSelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlignSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
