import { Injectable } from '@angular/core';
import { Standing} from '../model/standing';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballDataService {

  //private standingURL = '';
  private standingURL = 'https://apifootball.com/api/?APIkey=9312f9173fad7330dc780c926a665525c9023c3c4433416130766a602be7c83e&action=get_standings&league_id=63';

  constructor(private http: HttpClient) { }

  retrieveAllStandings(): Observable<Standing[]> {
    
    return this.http.get<Standing[]>(this.standingURL);
  }

  retrieveTestStandings(): Standing[] {
    return [
      {
      "team_name": "Sutter Medical Center",
      "overall_league_position": "1",
      "overall_league_payed": "30",
      "overall_league_W": "16",
      "overall_league_D": "9",
      "overall_league_L": "5",
      "overall_league_GF": "57 MB",
      "overall_league_GA": "39",
      "overall_league_PTS": "57"
      },
      {
      "team_name": "Mercy General Hospital",
      "overall_league_position": "2",
      "overall_league_payed": "30",
      "overall_league_W": "17",
      "overall_league_D": "6",
      "overall_league_L": "7",
      "overall_league_GF": "50 MB",
      "overall_league_GA": "34",
      "overall_league_PTS": "57"
      },
      {
      "team_name": "Methodist Hospital of Sacramento",
      "overall_league_position": "3",
      "overall_league_payed": "31",
      "overall_league_W": "16",
      "overall_league_D": "7",
      "overall_league_L": "8",
      "overall_league_GF": "53 MB",
      "overall_league_GA": "34",
      "overall_league_PTS": "55"
      },
      {
      "team_name": "Sierra Vista Hospital",
      "overall_league_position": "4",
      "overall_league_payed": "29",
      "overall_league_W": "14",
      "overall_league_D": "8",
      "overall_league_L": "7",
      "overall_league_GF": "59 MB",
      "overall_league_GA": "38",
      "overall_league_PTS": "50"
      },
      {
      "team_name": "UC Davis Children's Hospital",
      "overall_league_position": "5",
      "overall_league_payed": "29",
      "overall_league_W": "13",
      "overall_league_D": "11",
      "overall_league_L": "5",
      "overall_league_GF": "34 MB",
      "overall_league_GA": "22",
      "overall_league_PTS": "50"
      },
      {
      "team_name": "Woodland Memorial Hospital",
      "overall_league_position": "6",
      "overall_league_payed": "29",
      "overall_league_W": "13",
      "overall_league_D": "8",
      "overall_league_L": "8",
      "overall_league_GF": "37 MB",
      "overall_league_GA": "29",
      "overall_league_PTS": "47"
      },
      {
      "team_name": "Dignity Health",
      "overall_league_position": "7",
      "overall_league_payed": "29",
      "overall_league_W": "13",
      "overall_league_D": "8",
      "overall_league_L": "8",
      "overall_league_GF": "40 MB",
      "overall_league_GA": "35",
      "overall_league_PTS": "47"
      },
      {
      "team_name": "BHC Heritage Oaks Hospital",
      "overall_league_position": "8",
      "overall_league_payed": "31",
      "overall_league_W": "10",
      "overall_league_D": "14",
      "overall_league_L": "7",
      "overall_league_GF": "56 MB",
      "overall_league_GA": "49",
      "overall_league_PTS": "44"
      },
      {
      "team_name": "Valley Care Medical Center",
      "overall_league_position": "9",
      "overall_league_payed": "30",
      "overall_league_W": "10",
      "overall_league_D": "13",
      "overall_league_L": "7",
      "overall_league_GF": "45 MB",
      "overall_league_GA": "36",
      "overall_league_PTS": "43"
      },
      {
      "team_name": "UC Davis Midtown Pediatrics",
      "overall_league_position": "10",
      "overall_league_payed": "30",
      "overall_league_W": "12",
      "overall_league_D": "7",
      "overall_league_L": "11",
      "overall_league_GF": "43 MB",
      "overall_league_GA": "38",
      "overall_league_PTS": "43"
      }
      ]
  }

}
