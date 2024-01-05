import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-service-01',
  standalone: true,
  imports: [],
  templateUrl: './service-01.component.html',
  styleUrl: './service-01.component.css'
})
export class Service01Component {

  public getValue (): String{
    return 'real value';
  }
  public getObservable (): Observable<string>{
    return of("Observable of value");
  }
  public getPromise (): Promise<string>{
    return new Promise((resolve)=>{
      resolve("Promise of value");
    })
  }
}
