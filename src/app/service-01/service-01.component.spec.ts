import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service01Component } from './service-01.component';

describe('Service: Value', () => {
  let component: Service01Component;

  beforeEach(async () => {
    component = new Service01Component();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Se espera que el metodo retorne "real value"',()=>{
    expect(component.getValue()).toBe('real value');
  });
  it('Se espera que la promesa retorne "real value"',()=>{
    
  });
});
