import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics-graph',
  templateUrl: './statistics-graph.component.html',
  styleUrls: ['./statistics-graph.component.scss']
})
export class StatisticsGraphComponent implements OnInit {

  chartOptions: any;

  selectedFilter: string = "last 30";
  filterValue: string;
  filterDateFrom: any;
  filterDateTo: any;
  toDatemin: any = '';

  constructor() { }

  ngOnInit(): void {
    this.initChartData();
    this.filterSelection('last 30');
  }

  /**
  * 
  * @description
  * metho to initialize e-chart when page init
  * 
  */
  initChartData() {
    this.chartOptions = {
      tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        }
      },

      xAxis: [
        {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          axisPointer: {
            type: 'none'
          },
          axisLabel: {
            formatter: '{value}',
            color: '#fff',
            margin: 8,
            show: true,
          },
        }
      ],
      yAxis: [
        {
          type: 'value',
          min: 0,
          max: 200,
          interval: 50,
          axisLabel: {
            formatter: '{value}',
            color: '#fff',
            margin: 8,
            show: true,
          },
          axisPointer: {
            type: 'none'
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed"
            }
          }
        },

      ],
      series: [
        {
          name: 'Page Views',
          type: 'bar',
          color: '#b0b0b0',
          data: [25, 110, 50, 75, 160, 30, 90, 150, 40, 200, 20, 45]
        },

        {
          name: 'Unique Visits',
          type: 'line',
          color: '#c7bb2d',
          data: [45, 20, 70, 40, 100, 160, 30, 60, 75, 50, 200, 25]
        }
      ]
    }
  }

  dateChange(event, type) {
    if (type === 'stDate') this.toDatemin = this.filterDateFrom;
  }

  /**
   * 
   * method to perform filter actions based on selections
   * 
   */
  filterSelection(value) {
    this.selectedFilter = value;

    switch (value) {

      case 'today': {
        this.filterDateFrom = this.filterDateTo = this.toDatemin = new Date();
        this.filterValue = this.getMonthName(new Date().getMonth()) + ' ' + new Date().getDate() + ' ,' + new Date().getFullYear() + ' - ' + this.getMonthName(new Date().getMonth()) + ' ' + new Date().getDate() + ' ,' + new Date().getFullYear();
        break;
      }

      case 'yesterday': {
        let dtValue = new Date();
        dtValue.setDate(dtValue.getDate() - 1);
        this.filterDateFrom = this.filterDateTo = this.toDatemin = dtValue;
        this.filterValue = this.getMonthName(dtValue.getMonth()) + ' ' + (dtValue.getDate() - 1) + ' ,' + dtValue.getFullYear() + ' - ' + this.getMonthName(dtValue.getMonth()) + ' ' + (dtValue.getDate() - 1) + ' ,' + dtValue.getFullYear();
        break;
      }

      case 'last 7': {
        let dtValue = new Date();
        dtValue.setDate(dtValue.getDate() - 6);
        this.filterDateFrom = this.toDatemin = dtValue;
        this.filterDateTo = new Date();
        this.filterValue = this.getMonthName(dtValue.getMonth()) + ' ' + (dtValue.getDate()) + ' ,' + dtValue.getFullYear() + ' - ' + this.getMonthName(new Date().getMonth()) + ' ' + new Date().getDate() + ' ,' + new Date().getFullYear();
        break;
      }

      case 'last 30': {
        let dtValue = new Date();
        dtValue.setDate(dtValue.getDate() - 29);
        this.filterDateFrom = this.toDatemin = dtValue;
        this.filterDateTo = new Date();
        this.filterValue = this.getMonthName(dtValue.getMonth()) + ' ' + (dtValue.getDate()) + ' ,' + dtValue.getFullYear() + ' - ' + this.getMonthName(new Date().getMonth()) + ' ' + new Date().getDate() + ' ,' + new Date().getFullYear();
        break;
      }

      case 'this month': {
        var dtValue = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
        this.filterDateFrom = this.toDatemin = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
        this.filterDateTo = dtValue;
        this.filterValue = this.getMonthName(dtValue.getMonth()) + ' ' + 1 + ' ,' + dtValue.getFullYear() + ' - ' + this.getMonthName(dtValue.getMonth()) + ' ' + dtValue.getDate() + ' ,' + dtValue.getFullYear();
        break;
      }

      case 'last month': {
        var dtValue = new Date(new Date().getFullYear(), new Date().getMonth(), 0);
        this.filterDateFrom = this.toDatemin = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
        this.filterDateTo = dtValue;
        this.filterValue = this.getMonthName(dtValue.getMonth()) + ' ' + 1 + ' ,' + dtValue.getFullYear() + ' - ' + this.getMonthName(dtValue.getMonth()) + ' ' + dtValue.getDate() + ' ,' + dtValue.getFullYear();
        break;
      }

      case 'custom': {
        var fromDt = new Date(this.filterDateFrom);
        var toDt = new Date(this.filterDateTo);
        this.filterValue = this.getMonthName(fromDt.getMonth()) + ' ' + fromDt.getDate() + ' ,' + fromDt.getFullYear() + ' - ' + this.getMonthName(toDt.getMonth()) + ' ' + toDt.getDate() + ' ,' + toDt.getFullYear();
        break;
      }
    }

  }

  /**
   * 
   * method to get month name 
   * 
   */
  getMonthName(index) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return months[index];
  }
}
