                    var chart = Highcharts.chart('container02', {
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: '流水线实时稼动率'
                                // align: 'left'

                        },
                        // subtitle: {
                        //     text: '数据来源: WorldClimate.com'
                        // },
                        xAxis: {
                            categories: [
                                '两边组合', '三四边组合01', '三四边组合02', '三四边组合03', '三四边组合04', '检验区', '包装区', '分拣区'
                            ],
                            crosshair: true
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: '稼动率 (%/天)'
                            }
                        },
                        tooltip: {
                            // head + 每个 point + footer 拼接成完整的 table
                            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                            footerFormat: '</table>',
                            shared: true,
                            useHTML: true
                        },
                        plotOptions: {
                            column: {
                                borderWidth: 0
                            }
                        },
                        series: [{
                            name: '时间稼动率',
                            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5]
                        }, {
                            name: '性能稼动率',
                            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3]
                        }]
                    });