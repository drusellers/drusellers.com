define([], function(){
    return {
        init : function(params){
            var $self = $(this);
            inner(this, params);
        }
    }
});

function inner(element, params) {
    //inspired by: http://bl.ocks.org/mbostock/3883245

    var containerWidth = $(element).width();

    var margin = {top: 10, right: 10, bottom: 10, left: 10},
        width = containerWidth - margin.left - margin.right,
        height = 200 - margin.top - margin.bottom;

    var data = theData();

    var x = d3.time.scale()
        .range([0, width])
        .domain([new Date('7/9/2009'), new Date('8/1/2013')]);

    var y = d3.scale.linear()
        .range([height, 0])
        .domain([0, 250]);

    var colors = d3.scale.ordinal().range(["#C75F3C", "#F1C447"]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    /* new shiz */
    var stack = d3.layout.stack()
        .offset("zero")
        .values(function(d) { return d; })
        .x(function(d) { return d.x; })
        .y(function(d) { return d.y; });

    var area = d3.svg.area()
        .interpolate("cardinal")
        .x(function(d) { return x(d.x); })
        .y0(function(d) { return y(d.y0); })
        .y1(function(d) { return y(d.y0 + d.y); });

    var layers = stack(data);
    /* new shiz */

    var line = d3.svg.line()
        .x(function(d) { return x(d.x); })
        .y(function(d) { return y(d.y); })
        .interpolate("basis") ;

    var svg = d3.select(element).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.selectAll("path")
        .data(layers)
            .enter().append("path")
            .attr("d", function(d){ return area(d); })
            .attr("stroke-width", "0")
            .style("fill", function(d, i) { return colors(i); })
            .style("opacity","0.8");

}


//would be cool if it could 'ease' into the score
function theData(){
    var raw = rawData();
    var result = [ [], [] ];
    for (var i = 0; i <= raw.length -1; i++) {
        var item = raw[i];
        var leanMass = ((1 - item.composition) * item.weight),
            fatMass = (item.composition * item.weight);

        result[0].push({y: leanMass, x: item.date});
        result[1].push({y: fatMass, x: item.date});
    };

    return result;
}

function rawData() {
    return [{
        date: new Date("7/9/2009"),
        weight:220,
        composition: 0.32
    },{
        date: new Date("5/25/2011"),
        weight:192.8,
        composition: 0.236
    },{
        date: new Date("11/20/2011"),
        weight:168.2,
        composition: 0.10
    },{
        date: new Date("1/3/2012"),
        weight: 167.2,
        composition: 0.091
    },{
        date: new Date("2/28/2012"),
        weight: 160.8,
        composition: 0.072
    },{
        date: new Date("5/22/2012"),
        weight: 169.8,
        composition: 0.133
    },{
        date: new Date("8/2/2012"),
        weight: 173.6,
        composition: 0.159
    },{
        date: new Date("1/8/2013"),
        weight: 180,
        composition: 0.159
    },{
        date: new Date("3/6/2013"),
        weight: 184,
        composition: 0.124
    },{
        date: new Date("8/1/2013"),
        weight: 192.4,
        composition: 0.177
    }];
}
