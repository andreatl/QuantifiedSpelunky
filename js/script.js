//https://spreadsheets.google.com/feeds/list/0AiE7hdFAKPqldE1yOUwzUFh0VkNOVVZ1TWhseGRkdkE/od6/public/basic

// js source code for Quantified Spelunky
// http://github.com/andreatl/QuantifiedSpelunky

$(function () {

// 1. Load data
	var url = "https://spreadsheets.google.com/feeds/list/0AiE7hdFAKPqldE1yOUwzUFh0VkNOVVZ1TWhseGRkdkE/od6/public/values?alt=json-in-script&callback=?";
	var rows = []; // all the deaths logged
	var data_array = [[Date.UTC(2013, 3, 23),1],[Date.UTC(2013, 3, 23),3],[Date.UTC(2013, 3, 24),1],[Date.UTC(2013, 3, 25),5]];	
	var test = [];
		
	$.getJSON(url,
	function(data) {
		// parse JSON and push data into the list of Spelunky deaths
		for (i=0;i<data.feed.entry.length;i++) {
			var entry = data.feed.entry[i];
			var xlrow = {
				date: entry["gsx$date"].$t,
				time: entry["gsx$minutes"].$t,
				level: entry["gsx$level"].$t,
				death: entry["gsx$death"].$t
				};

		rows.push(xlrow);
		}
		
		//create data series for highchartsy
		for (var i=0;i<rows.length;i++){
			//date as Year/Month/Day
			parts = rows[i].date.match(/(\d+)/g);
			dateUTC = Date.UTC(parts[2], parts[0]-1, parts[1]);
			minutes = parseFloat(rows[i].time);
			test.push([dateUTC, minutes]);
		}

		// TODO: add the plotting function here
		$('#container').highcharts({
					chart: {
					type: 'scatter'
				},
				title: {
					text: 'Length of game'
				},
				subtitle: {
					text: ':)'
				},
				
				xAxis: {
					type: 'datetime',
					dateTimeLabelFormats: {
						month: '%e. %b',
						day: '%b %e',
						hour: '%b %e',
						year: '%b'
						}
					},
					
				yAxis: {
					title: {
						text: 'Game length (minutes)'
					},
					min: 0
				},
				
				tooltip: {
					formatter: function() {
							return Highcharts.dateFormat('<b>%b %e', this.x) +'</b><br>'+ this.y +' minutes';
					}
				},
				
				series: [{
					//data: [[Date.UTC(2013, 3, 23),1],[Date.UTC(2013, 3, 24),1],[Date.UTC(2013, 3, 25),5]]
					data: test
					// test[200] = [1369440000000, 5.95], which plots fine. I don't get it!
				}]
			});		
		
	});

		//test.push(rows[0].time);
		
		//2. Parse spreadsheet rows to format for charting: [Date.UTC(Year, Month-1, Day), time]
		// for i in rows, format, data_array.push(formatted)

		//parse date string
		
		
		//data_array.push([3,4]);

	//3. Initiate chart		

    });
	

