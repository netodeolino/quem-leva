import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';

/*
  Generated class for the BaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const extractError = (error: Response | any): string => {
  // In a real world app, we might use a remote logging infrastructure
  let errMsg: string;
  if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
      errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);

  return errMsg;
}

export abstract class BaseServiceProvider {

  protected handlePromiseError(error: Response | any): Promise<any> { 
    return Promise.reject(extractError(error));
  }

  protected handleObservableError(error: Response | any): Observable<any> {
      return Observable.throw(extractError(error));
  }

}
