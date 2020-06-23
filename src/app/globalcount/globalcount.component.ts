import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';
import { Router } from '@angular/router';
import { CountriesService } from 'src/services/countries.http.service';

@Component({
  selector: 'app-globalcount',
  templateUrl: './globalcount.component.html',
  styleUrls: ['./globalcount.component.css'],
  providers:[CountriesService],
})
export class GlobalcountComponent implements OnInit {
//  public globalObj: any={};
  public total_cases:any;
  // public new_cases:any;
  // public total_deaths:any;
  // public new_deaths:any;
  // public total_recovered:any;
  // public active_cases:any;
  // public serious_critical:any;
  // public total_cases_per_1m_population:any;
  // public deaths_per_1m_population:any;
  // public statistic_taken_at:any;

  globalCases:any={};
  allCountryCases:any={};

  // ngOnInit() {    
  //   this.countriesService.getGlobalData().subscribe(res =>this.globalObj=res.json());
  //   this.total_cases=this.globalObj.total_cases;
  //   const demo:any[]=[JSON.stringify(this.globalObj)];
  //   console.log("DEMO: "+demo);  
  // }
  constructor(private countriesService: CountriesService, private router: Router){    
  }


  ngOnInit() {

      this.countriesService.getGlobalData().subscribe(res =>this.globalCases=res.json());
    this.total_cases=this.globalCases.total_cases;
    const demo:any[]=[JSON.stringify(this.globalCases)];
    console.log("DEMO: "+demo);  

  }
  
  
    // public getData(){
    //   this.countriesService.getGlobalData().subscribe(res =>this.globalObj=res.json());
    //   this.total_cases=this.globalObj.total_cases;
    //   const demo:any[]=[JSON.stringify(this.globalObj)];
    //   console.log("DEMO: "+demo);
    //   this.total_cases=this.globalObj.total_cases;
    //   this.new_cases=this.globalObj.new_cases;
    //   this.total_deaths=this.globalObj.total_deaths;
    //   this.new_deaths=this.globalObj.new_deaths;
    //   this.total_recovered=this.globalObj.total_recovered;
    //   this.active_cases=this.globalObj.active_cases;
    //   this.serious_critical=this.globalObj.serious_critical;
    //   this.total_cases_per_1m_population=this.globalObj.total_cases_per_1m_population;
    //   this.deaths_per_1m_population=this.globalObj.deaths_per_1m_population;
    //   this.statistic_taken_at=this.globalObj.statistic_taken_at;
   
    // }
}

       
