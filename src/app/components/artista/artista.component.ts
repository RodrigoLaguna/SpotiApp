import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artist: any = {};
  topTracks: any[] = [];
  loading:boolean = true;
  mostrar:boolean;

  constructor(private route:ActivatedRoute,
              private spotify:SpotifyService) {

    this.route.params.subscribe( params => {
      this.getArtist( params['id'] );
      this.getTracks( params['id'] );

    });

   }


   getArtist( id:string ){
      this.spotify.getArtist(id)
                  .subscribe( artista => {
                    this.artist = artista;
                    this.loading = false;
                  });
   }


   getTracks( id:string ){
     this.spotify.getTracks( id )
                  .subscribe(tracks => {
                    this.topTracks = tracks;
                  });
   }

   mostar(){
     this.mostrar = true;
   }


}
