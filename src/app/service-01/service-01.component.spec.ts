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
  it('Se espera que el metodo retorne "Observable of value"',(done:DoneFn)=>{
    component.getObservable().subscribe((value)=>{
      expect(value).toBe("Observable of value");
      done();
    })
  });
  it('Se espera que la promesa retorne "Promise of value"',(done:DoneFn)=>{
    component.getPromise().then((value)=>{
        expect(value).toBe("Promise of value");
        done();
    })
  });
});
