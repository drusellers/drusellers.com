define([], function(){
    return {
        init : function(params){
            var $self = $(this);
            inner(this, params);
        }
    }

    function inner(element, params) {

            var margin = {top: 5, right: 5, bottom: 5, left: 5},
                width = 600 - margin.left - margin.right,
                height = 300 - margin.top - margin.bottom;

            var data = theData(params);


            var x = d3.time.scale()
                .range([0, width])
                .domain([data[0].date, data[data.length - 1].date]);

            var y = d3.scale.linear()
                .range([height, 0])
                .domain([0, 30000]);

            var xAxis = d3.svg.axis()
                .scale(x)
                .orient("bottom");

            var yAxis = d3.svg.axis()
                .scale(y)
                .orient("left");

            var line = d3.svg.line()
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y(d.elevation); });

            var svg = d3.select(element).append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
              .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            //draw austin, tx 489
            //draw Mt. McKinley (Denali) 20237
            //draw Everest - 29,029
            //highlight day

            svg.selectAll("path")
                .data([data])
                    .enter().append("path")
                    .attr("d", line)
                    .attr("stroke","black")
                    .attr("stroke-width", "1.5px")
                    .attr("fill","none");

            var markers = [
                ["ATX",489,"#00ff00"],
                ["Everest",29029,"#ff0000"],
                ["Denali",20237,"#aaaa00"]
            ]
            //atx
            svg.append("line")
                .attr("x1",0)
                .attr("y1",y(489))
                .attr("x2",width)
                .attr("y2",y(489))
                .attr("stroke","#00ff00")
                .attr("stroke-width","1px");

            //Everest
            svg.append("line")
                .attr("x1",0)
                .attr("y1",y(29029))
                .attr("x2",width)
                .attr("y2",y(29029))
                .attr("stroke","#ff0000")
                .attr("stroke-width","1px");

            //Denali
            svg.append("line")
                .attr("x1",0)
                .attr("y1",y(20237))
                .attr("x2",width)
                .attr("y2",y(20237))
                .attr("stroke","#aaaa00")
                .attr("stroke-width","1px");

    }

    function theData(params){
        //{d:"11/12/2015", l:"", e:0},
        return $.map(params, function (item) {
            return {date: new Date(item.d), elevation: item.e};
        });
    }

});
