import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MongodbService {
  constructor(private http: HttpClient) {}

  login(email: string) {
    return this.http.get(`https://api-users.automabets.com/dados/${email}`).pipe(
      map((data: any) => {
        console.log(data);
        return data;
      })
    );
  }
}
