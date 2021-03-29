import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-browser-usage',
  templateUrl: './browser-usage.component.html',
  styleUrls: ['./browser-usage.component.scss']
})
export class BrowserUsageComponent implements OnInit {

  myChart: any;

  tableValue: Array<any> = [];

  panelOpened_0: boolean = true;
  panelOpened_1: boolean = false;
  panelOpened_2: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.tableValue = [
      {
        index: '0',
        name: 'Chrome',
        value: '6985',
        icon: 'arrow_drop_up',
      },
      {
        index: '1',
        name: 'Other',
        value: '2697',
        icon: 'arrow_drop_up',
      },
      {
        index: '2',
        name: 'Safari',
        value: '3597',
        icon: 'arrow_drop_down',
      },
      {
        index: '3',
        name: 'Firefox',
        value: '2145',
        icon: 'arrow_drop_up',
      },
      {
        index: '4',
        name: 'Internet Explorer',
        value: '1854',
        icon: 'arrow_drop_down',
      },
      {
        index: '5',
        name: 'Opera',
        value: '654',
        icon: 'arrow_drop_up',
      }
    ];

    var abnormalFile: any = document.getElementById("echartsBrowser");
    this.myChart = echarts.init(abnormalFile);
    window.onresize = this.myChart.resize;
    this.initTrafficSourcesChart();
  }

  initTrafficSourcesChart() {
    const chartOptions = {
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        padding: '8%',
        containLabel: true
      },
      color: [
        '#2fbbe8',
        '#00a3d8',
        '#1693a5',
        '#ffc100',
        '#d9544f',
        '#72cae7',
      ],
      tooltip: {
        show: false,
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      xAxis: [
        {
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          }
        }
      ],
      series: [
        {
          name: "Sessions",
          type: "pie",
          radius: ["55%", "80%"],
          center: ["50%", "50%"],
          avoidLabelOverlap: false,
          hoverOffset: 5,
          stillShowZeroSum: false,
          label: {
            normal: {
              show: false,
              position: "center",
              textStyle: {
                fontSize: "13",
                fontWeight: "normal"
              },
              formatter: "{a}"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "17",
                fontWeight: "bold",
                color: "rgba(15, 21, 77, 1)"
              },
              formatter: "{b} \n{c}"
            }
          },
          labelLine: {
            normal: {
              show: true
            }
          },
          data: [

            {
              value: 20,
              name: "Safari",
            },
            {
              value: 25,
              name: "Chrome",
            },
            {
              value: 25,
              name: "Other",
            },
            {
              value: 10,
              name: "Internet Explorer",
            },
            {
              value: 5,
              name: "Opera",
            },

            {
              value: 15,
              name: "Firefox",
            },
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowSpace: 8,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            }
          },
        }
      ]
    };
    var oldIndex = 1;
    this.myChart.setOption(chartOptions);

    this.myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: oldIndex,
    });

    var _self = this;

    this.myChart.on('mouseover', function (e) {
      _self.myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: oldIndex,
      });

      _self.myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: e.dataIndex
      });

      oldIndex = e.dataIndex;
    });

  }

}
