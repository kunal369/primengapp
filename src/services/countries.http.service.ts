import { Injectable, Directive } from '@angular/core';
import { Http, Headers,RequestOptions} from '@angular/http';
import { HttpHeaders} from '@angular/common/http';
import { constants } from 'src/utils/constants';
import { map, catchError } from 'rxjs/operators';

@Injectable({  providedIn: 'root'})

export class CountriesService{
 
    constructor(public http: Http) {

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
      return this.http.get(url, { 'headers': headers }).pipe(
        map((data) => {
          //You can perform some transformation here
          return data;
        }),
        catchError((err) => {
          console.error(err);
          throw err;
        })
      )  
    }

      /*function for calling get Apis's*/
  // get(url) {
  //   let headers = new HttpHeaders()
  //   headers = headers.append("x-rapidapi-host", "coronavirus-monitor.p.rapidapi.com")
  //   headers = headers.append('x-rapidapi-key', '636cfa21afmsh7aff4e8b91676f5p103bcbjsnf52e9599a703');
  //   headers = headers.append("useQueryString", "true")
  //   const finalUrl = constants.apiBaseURL + url;
  //   return this.http.get<any[]>(finalUrl, { 'headers': headers }).pipe(
  //     map((data) => {
  //       //You can perform some transformation here
  //       return data;
  //     }),
  //     catchError((err) => {
  //       console.error(err);
  //       throw err;
  //     })
  //   )
  // }

}

