                    var chart = Highcharts.chart('container03', {
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: '喷绘机实时稼动'
                        },
                        // subtitle: {
                        //     text: '数据来源: WorldClimate.com'
                        // },
                        xAxis: {
                            categories: [
                                '01# 喷胶机', '02# 喷胶机', '03# 喷胶机', '04# 喷胶机', '05# 喷胶机', '06# 喷胶机', '07# 喷胶机', '08# 喷胶机', '09# 喷胶机', '10# 喷胶机'
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
                            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1]
                        }, {
                            name: '性能稼动率',
                            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5]
                        }]
                    });