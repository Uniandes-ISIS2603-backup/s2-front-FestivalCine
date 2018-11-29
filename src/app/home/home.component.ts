import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './home.component.html',
  styleUrls: [ ]
})
export class HomeComponent implements OnInit {
  //imagenes del carousel  
  images = ['../images/My Post.jpg',"https://staticuestudio.blob.core.windows.net/buhomag/2016/01/13103255/tarantino.jpg?auto=compress,format", "https://elpalomitron.com/wp-content/uploads/2017/09/TTTT.jpg"];
  images2 = ["https://www.elcineenlasombra.com/wp-content/uploads/2015/08/godthe-artist-02.jpg","https://cdn.psychologytoday.com/sites/default/files/blogs/94617/2014/02/145152-146985.jpg","https://guywhohatesmoviesreviews.files.wordpress.com/2017/03/get-out-banner.jpg"];
  images3 = ["https://jdcdn-wabisabiinvestme.netdna-ssl.com/wp-content/uploads/2015/06/Joseph-McBride-para-Jot-Down-0.jpg","http://www.asalallena.com.ar/wp-content/uploads/2018/07/Luis-Ospina.jpg","https://1.bp.blogspot.com/-ERTGveQ5rJ8/WEiBvQhIkII/AAAAAAAAYPU/WDE-z3LBYAMeTjqCwNzYRfft-gDdas-EQCLcB/s1600/Carlos-Pumares-para-JD-0-768x513.jpg"];
  constructor(
    private router: Router,
  
  ) {}

  isAuthenticated: boolean;
 
  tags: Array<string> = [];
  tagsLoaded = false;

  ngOnInit() {
    
  }
}
