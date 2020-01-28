import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../service/football-data.service';
import { Standing} from '../model/standing';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  
  standings: Standing[];
  
  constructor(
    private footballService: FootballDataService
  ) {  }

  ngOnInit() {
    this.retrieveAllStandings();
  }

  retrieveAllStandings():void{
    this.footballService.retrieveAllStandings().subscribe(
      
      response => {
        this.standings = response;
        if (!this.isAVInStandings(this.standings)) 
          this.standings = this.footballService.retrieveTestStandings();
      },
      error => {
        this.standings = this.footballService.retrieveTestStandings();
      }
    );
  }

  setRowColor(position): String {
    
    switch(position) {
      
      case '1': {
        return 'first-place';
      }  

      case '2': {
        return 'second-place';
      }  

      case '3': {
        return 'third-place';
      } 

      case '22':
      case '23':
      case '24': {
        return 'relegation-place';
      }
    }
  }

  setLogo(team): String {
      return "";
  }

  private isAVInStandings(standings: Standing[]): boolean{
    let avStanding = standings.find(x => x.team_name === 'Aston Villa');

    if (typeof avStanding === 'undefined') {
      return false;
    } else {
      return true;
    }
  }
}
