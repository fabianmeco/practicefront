import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { FiledataService } from '../../../filedata.service';

@Component({
  selector: 'app-count-by-zones',
  templateUrl: './count-by-zones.component.html',
  styleUrls: ['./count-by-zones.component.scss']
})
export class CountByZonesComponent implements OnInit {
  private chartColumn: Chart;
  private category = [];
  private series = [{ name: "Calle 85" },
    { name: "Salitre Plaza" },
    { name: "Parque 93" },
    { name: "Calle 80" },
    { name: "Centro" }
  ]
  constructor(private _filedata: FiledataService) { }

  ngOnInit() {
    this.chartColumn = new Chart({
      chart:{
        plotBackgroundColor: null,
        type: 'column'
      },
      title:{
        text: 'Count by zones'
      },
      xAxis:{
        categories: this.category
      },
      series: this.series,
      plotOptions:{
        series:{
          pointStart: 0
        }
      },
      credits:{
        enabled: false
      }
    });
    this.columnSubscription();
  }

  columnSubscription(){
    this._filedata.getZonesData().subscribe(
      (filedata)=>{
        let time = new Date(filedata[0].data.time);
        this.category.push(time.getHours() + ":" + time.getMinutes());
        this.addPoints(filedata)
      }
    );
  }
  addPoints(filedata: any) {
    let index = 0;
    filedata.forEach(element => {
      this.chartColumn.addPoint(element.data.count, index);
      index++;
    });
  }

}
