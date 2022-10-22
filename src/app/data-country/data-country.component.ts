import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Observable } from 'rxjs';
import { DatausaService } from '../datausa.service';
import { Population } from '../population';
import { PopulationData } from '../population-data';

@Component({
  selector: 'app-data-country',
  templateUrl: './data-country.component.html',
  styleUrls: ['./data-country.component.scss']
})
export class DataCountryComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartDataPopulation: any = [];
  data = [2000];
  updateFlag = false;

  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'line',
        data: this.data
      }
    ]
  }
  constructor(private datausaService: DatausaService) { 
    
  }


  ngOnInit(): void {
    this.datausaService.getPupulationData().subscribe(dataUsaResponse => {
      dataUsaResponse.data.forEach((population: any) => {
        let populationResp = [];
        populationResp.push(population['ID Year']);
        populationResp.push(population['Population']);
        this.chartDataPopulation.push(populationResp);
      });
      this.chartOptions.series ?  this.chartOptions.series[0] = {
        type: 'line',
        data: this.chartDataPopulation
      }: null;
      this.updateFlag = true;

    });
  }

  handleUpdate() {
    this.chartOptions.title =  {
      text: 'updated'
    };

    this.chartOptions.series ?  this.chartOptions.series[0] = {
      type: 'line',
      data: this.chartDataPopulation
    }: null;
    this.updateFlag = true;

  }

}
