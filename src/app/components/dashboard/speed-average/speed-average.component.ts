import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { FiledataService } from '../../../filedata.service';
import { element } from 'protractor';

@Component({
  selector: 'app-speed-average',
  templateUrl: './speed-average.component.html',
  styleUrls: ['./speed-average.component.scss']
})
export class SpeedAverageComponent implements OnInit {
  private pieChart: Chart;

  constructor(private _filedata: FiledataService) { }

  ngOnInit() {
    this.pieChart= new Chart({
      chart:{
        type: 'pie'
      },
      title:{
        text: 'Speed Average'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
      },series:[{
        name: 'Empleado',
        data: []
      }],
      credits:{
        enabled: false
      }
    });
    this.pieSubscribe();
  }

  pieSubscribe(){
    this._filedata.getZonesData().subscribe(
      (filedata) => {
        let index = 0;
        filedata.forEach(element=>{
          this.pieChart.removePoint(index);
          this.pieChart.addPoint({name:element.zoneId, y: element.data.speed});
          index++;
        })
      }
    );
  }

}
