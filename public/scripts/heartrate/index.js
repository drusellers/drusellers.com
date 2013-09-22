define([], function(){
    return {
        init : function(params){
            var $self = $(this);
            inner(this, params);
        }
    }

    function inner(element, params) {

            var margin = {top: 5, right: 5, bottom: 5, left: 5},
                width = 167 - margin.left - margin.right,
                height = 100 - margin.top - margin.bottom;

            var data = theData();


            var x = d3.time.scale()
                .range([0, width])
                .domain([data[0].date, data[data.length - 1].date]);

            var y = d3.scale.linear()
                .range([height, 0])
                .domain([50, 70]);

            var xAxis = d3.svg.axis()
                .scale(x)
                .orient("bottom");

            var yAxis = d3.svg.axis()
                .scale(y)
                .orient("left");

            var line = d3.svg.line()
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y(d.rate); });

            var svg = d3.select(element).append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
              .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            svg.selectAll("path")
                .data([data])
                    .enter().append("path")
                    .attr("d", line)
                    .attr("stroke","white")
                    .attr("stroke-width", "1.5px")
                    .attr("fill","none");

    }

    function theData(){
        //{date:"", rate:0},
        return $.map([
            {date:"9/17/2013", rate:72},
            {date:"9/19/2013", rate:64},
            {date:"9/20/2013", rate:64},
            {date:"9/21/2013", rate:68},
            {date:"9/22/2013", rate:64},
        ], function (item) {
            return {date: new Date(item.date), rate: item.rate};
        });
    }

});
