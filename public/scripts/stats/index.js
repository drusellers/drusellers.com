define([], function(){
    return {
        init : function(params){
            //inspired by: http://bl.ocks.org/mbostock/3883245
            var $self = $(this);

            var margin = {top: 20, right: 20, bottom: 30, left: 50},
                width = 600 - margin.left - margin.right,
                height = 200 - margin.top - margin.bottom;

            var datar = data();

            var x = d3.time.scale()
                .range([0, width])
                .domain([new Date('7/9/2009'), new Date('3/6/2013')]);

            var y = d3.scale.linear()
                .range([height, 0])
                .domain([0, 250]);

            var xAxis = d3.svg.axis()
                .scale(x)
                .orient("bottom");

            var yAxis = d3.svg.axis()
                .scale(y)
                .orient("left");

            var line = d3.svg.line()
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y(d.weight); })
                .interpolate("basis") ;


            var svg = d3.select(this[0]).append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
              .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            svg.selectAll("path")
                .data(datar)
                    .enter().append("path")
                    .attr("d", line)
                    .attr("stroke","white")
                    .attr("stroke-width", "1.5px")
                    .attr("fill","none");

        }
    }

    //would be cool if it could 'ease' into the score
    function data() {
        return [[{
            date: new Date("7/9/2009"),
            weight:220
        },{
            date: new Date("5/25/2011"),
            weight:192.8
        },{
            date: new Date("11/20/2011"),
            weight:168.2
        },{
            date: new Date("1/3/2012"),
            weight: 167.2
        },{
            date: new Date("2/28/2012"),
            weight: 160.8
        },{
            date: new Date("5/22/2012"),
            weight: 169.8
        },{
            date: new Date("8/2/2012"),
            weight: 173.6
        },{
            date: new Date("1/8/2013"),
            weight: 180
        },{
            date: new Date("3/6/2013"),
            weight: 184
        },{
            date: new Date("7/24/2013"),
            weight: 190
        }]]
    }
});
