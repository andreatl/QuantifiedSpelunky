//https://spreadsheets.google.com/feeds/list/0AiE7hdFAKPqldE1yOUwzUFh0VkNOVVZ1TWhseGRkdkE/od6/public/basic

// js source code for Quantified Spelunky
// http://github.com/andreatl/QuantifiedSpelunky

$(function () {

// 1. Load data
        
<<<<<<< HEAD
	url = "https://spreadsheets.google.com/feeds/list/0AiE7hdFAKPqldE1yOUwzUFh0VkNOVVZ1TWhseGRkdkE/od6/public/values?alt=json-in-script&callback=?"
	rows = []; // all the deaths logged
	data_array = [[Date.UTC(2013, 3, 23),1],[Date.UTC(2013, 3, 23),3],[Date.UTC(2013, 3, 24),1],[Date.UTC(2013, 3, 25),5]];

	$.getJSON(url,
		function(data) {
		// parse JSON and push data into the list of Spelunky deaths
=======
		url = "https://spreadsheets.google.com/feeds/list/0AiE7hdFAKPqldE1yOUwzUFh0VkNOVVZ1TWhseGRkdkE/od6/public/values?alt=json-in-script&callback=?"
		death_list = []; // all the deaths logged
		
	
		$.getJSON(url,
		function(data) {
			// parse JSON and push data into the list of Spelunky deaths
>>>>>>> 2080c4a7ae68704a02f087340a59e49c0c7d80af
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
		});

//2. Parse spreadsheet rows to format for charting: [Date.UTC(Year, Month-1, Day), time]
// for i in rows, format, data_array.push(formatted)

		//data_array.push([3,4]);

//3. Initiate chart		
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
				data: data_array
			}]
        });
    });