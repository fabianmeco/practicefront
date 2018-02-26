import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { FiledataService } from '../../../filedata.service';

@Component({
  selector: 'app-speed-zones',
  templateUrl: './speed-zones.component.html',
  styleUrls: ['./speed-zones.component.scss']
})
export class SpeedZonesComponent implements OnInit {
  chartLine: Chart;
  category = [];
  series = [{ name: "Calle 85" },
  { name: "Salitre Plaza" },
  { name: "Parque 93" },
  { name: "Calle 80" },
  { name: "Centro" }
  ]

  constructor(private _filedata: FiledataService) { }

  ngOnInit() {
    this.chartLine = new Chart({
      chart: {
        type: 'line',
        plotShadow: false
      },
      title: {
        text: 'Speed zones'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: this.category
      },
      yAxis:{
        title:{
          text: "Speed (Kms/h)"
        } 
      },
      series: this.series
    });

    this.lineSubscription();
  }

  lineSubscription() {
    this._filedata.getZonesData().subscribe(
      (filedata) => {
        let time = new Date(filedata[0].data.time);
        this.category.push(time.getHours() + ":" + time.getMinutes());
        this.addPoints(filedata)
      }
    );
  }

  addPoints(filedata: any) {
    let index = 0;
    filedata.forEach(element => {
      this.chartLine.addPoint(element.data.speed, index);
      index++;
    });
  }
}
