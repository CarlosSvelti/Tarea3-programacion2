import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPelis } from 'src/app/pages/model/IPelis.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliService {
  private url: string='';
  private apiKey: string='418162be';

  constructor(private Http: HttpClient) { }

  searchMovies(title:string, type:string){
    this.url = `http://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`;
    console.log(this.url);
    return this.Http.get<Ipelis>(this.url).pipe(map(results => results['Search']));
  }

  getDetails(id: string){
    return this.Http.get<Ipelis>(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
