import { Injectable, Directive } from '@angular/core';
import { Http, Headers,RequestOptions } from '@angular/http';

@Injectable()

export class CountriesService{
 
    constructor(private http: Http) {

    }
  
    getCountryData() {
      let headers = new Headers();
      headers.append('x-rapidapi-key', '636cfa21afmsh7aff4e8b91676f5p103bcbjsnf52e9599a703');
      
      let url = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php";
      let options = new RequestOptions({ headers: headers });
      console.log("SERVICE: "+url);
      return this.http.get(url,options)    
    }

    getGlobalData() {
      let headers = new Headers();
      headers.append('x-rapidapi-key', '636cfa21afmsh7aff4e8b91676f5p103bcbjsnf52e9599a703');
      
      let url = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php";
      let options = new RequestOptions({ headers: headers });
      console.log("SERVICE: "+url);
      return this.http.get(url,options)    
    }
}

