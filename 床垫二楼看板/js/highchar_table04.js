                    var chart = Highcharts.chart('container04', {
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: '包装机实时稼动'
                        },
                        // subtitle: {
                        //     text: '数据来源: WorldClimate.com'
                        // },
                        xAxis: {
                            categories: [
                                '01# 包装机', '02# 包装机', '03# 包装机'
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
                            data: [49.9, 71.5, 106.4]
                        }, {
                            name: '性能稼动率',
                            data: [83.6, 78.8, 98.5]
                        }]
                    });