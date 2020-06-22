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
  public countryFilter: any;
  
  ngOnInit() {     
    this.countriesService.getCountryData().subscribe(res =>this.countryObj=res.json());
    for(var i=0;i<=this.countryObj.countries_stat.length;i++){
      console.log(JSON.stringify(this.countryObj.countries_stat[i].country_name));
    }
      
  }
  constructor(private countriesService: CountriesService, private router: Router){    
    }
    

    // public getData(){
    //   this.countriesService.getData().subscribe(res =>this.loginObj=res.json());
    //   for(var i=0;i<=this.loginObj.countries_stat.length;i++){
    //     console.log(JSON.stringify(this.loginObj.countries_stat[i].country_name));
    //   }
    //  // console.log(JSON.stringify(this.loginObj.countries_stat[0].country_name));
    //  //console.log(this.covidcases.countries_stat[3]);

    //   // for(var i=0;i<=this.loginObj.countries_stat.length;i++){
    //   //   console.log(JSON.stringify(this.loginObj.countries_stat[i].country_name));
    //   // }
    // }
}
