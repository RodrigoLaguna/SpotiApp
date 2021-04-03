import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) {
    console.log('Spotify services');
  }


  getQuery( query:string ){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAIIpFhFEgI00gWaJa8SnhzVtNL-EPnPg-l9SJ1im_f1GFpL44HlKbD7E051QqoiLrX1HC9pY-pEyBVxF8',
    });

    return this.http.get( url , {headers} );
  }
  
  
  getNewReleases(){
     return this.getQuery('browse/new-releases')
                .pipe( map( data => data['albums'].items ));
  }


  getArtists( artist:string ) {
    return this.getQuery(`search?q=${artist}&type=artist&limit=15`)
                .pipe( map( data => data['artists'].items ));
  }

  getArtist( id:string ) {
    return this.getQuery(`artists/${ id }`)
                // .pipe( map( data => data['artists'].items ));
  }
  
  getTracks( id:string ) {
    return this.getQuery(`artists/${ id }/top-tracks?market=US`)
                .pipe( map( data => data['tracks'] ));
  }


}
