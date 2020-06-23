import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/services/countries.http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countrycount',
  templateUrl: './countrycount.component.html',
  styleUrls: ['./countrycount.component.css'],
  providers:[CountriesService],
})

export class CountrycountComponent implements OnInit {
  public countryObj: any;
  public covidcases:any;
  
  yearFilter: number;

  yearTimeout: any;
  constructor(private countriesService: CountriesService, private router: Router){    
  }

  ngOnInit() {     
    this.countriesService.getCountryData().subscribe(res =>this.countryObj=res.json());
    // for(var i=0;i<=this.countryObj.countries_stat.length;i++){
    //   console.log(JSON.stringify(this.countryObj.countries_stat[i].country_name));
    // }   

    
  }


onYearChange(event, dt, col) {
  if (this.yearTimeout) {
    clearTimeout(this.yearTimeout);
  }

  this.yearTimeout = setTimeout(() => {
    dt.filter(event.value, col.field, col.filterMatchMode);
  }, 250);
}
}
