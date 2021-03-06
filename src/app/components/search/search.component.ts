import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artistas:any[] = [];
  loading:boolean;

  constructor(private spotify:SpotifyService) { }


  buscar(termino:string){

    if (termino.length == 0) {
      this.loading = false;
      this.artistas = [];
    }else{
      this.loading = true;
      this.spotify.getArtists(termino)
                  .subscribe((data:any) => {
                    // console.log(data);
                    this.artistas = data;
                    this.loading = false;
                  });
    }
    
  }

}
