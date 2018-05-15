/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoncomposantComponent } from './moncomposant.component';

describe('MoncomposantComponent', () => {
  let component: MoncomposantComponent;
  let fixture: ComponentFixture<MoncomposantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoncomposantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoncomposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
