'use strict';

angular.module('ngcookbookApp')
.controller('MainCtrl', function ($scope) {

var vis = d3.select("#leftLogo")
         .attr("width", 1000)
         .attr("height", 1000);

var scaleX = d3.scale.linear()
        .domain([0,500])
        .range([0,1000])

var scaleY = d3.scale.linear()
        .domain([0,500])
        .range([0,1000])

// poly = [{"x":0.0, "y":25.0},
//         {"x":8.5,"y":23.4},
//         {"x":13.0,"y":21.0},
//         {"x":19.0,"y":15.5}];

var polygons = [
  {
    // gray border
    points: [
      {"x":250, "y":40},
      {"x":451, "y":108},
      {"x":414, "y":368},
      {"x":250, "y":461},
      // {"x":84,  "y":368},
      // {"x":53,  "y":108}
      {"x":500-414, "y":368},
      {"x":500-451, "y":108},
    ],
    fill: "#B3B3B3"
  },
  {
    // left light red
    points: [
      {"x":250, "y":62},
      {"x":250, "y":438},
      {"x":104, "y":356},
      {"x":71 , "y":123}
    ],
    fill: "#E52A3A"
  },
  {
    // right dark red
    points: [
      {"x":250, "y":62},
      {"x":250, "y":438},
      {"x":500-104, "y":356},
      {"x":500-71 , "y":123}
      // {"x":250, "y":62},
      // {"x":250, "y":438},
      // {"x":397, "y":356},
      // {"x":427, "y":125}
    ],
    fill: "#B72933"
  },
  {
    // left half A
    points: [
      {"x":250, "y":77},
      {"x":250, "y":164},
      {"x":211, "y":250},
      {"x":250, "y":250},
      {"x":250, "y":286},
      {"x":195, "y":286},
      {"x":170, "y":347},
      {"x":124, "y":347}

    ],
    fill: "#F1F1F1"
  },
  {
    // right half A
    points: [
      {"x":250, "y":77},
      {"x":250, "y":164},
      {"x":500-211, "y":250},
      {"x":250, "y":250},
      {"x":250, "y":286},
      {"x":500-195, "y":286},
      {"x":500-170, "y":347},
      {"x":500-124, "y":347}
      // {"x":250, "y":77},
      // {"x":250, "y":164},
      // {"x":288, "y":250},
      // {"x":250, "y":250},
      // {"x":250, "y":286},
      // {"x":304, "y":286},
      // {"x":330, "y":347},
      // {"x":384, "y":347},
    ],
    fill: "#B3B3B3"
  }
]

vis.selectAll("polygon")
  .data(polygons)
  .enter()
  .append("polygon")
  .attr("points",function(d) { 
    return d.points.map(function(d) {
      return [scaleX(d.x - 49),scaleY(d.y - 40)].join(",");
      // return [d.x, d.y].join(",");
    }).join(" ");
  })
  .attr("fill", function(d) {return d.fill})

// // vis.selectAll("polygon")
//   .data([rightRed])
//   .enter()
//   .append("polygon")
//   .attr("points",function(d) { 
//     return d.map(function(d) {
//       return [d.x, d.y].join(",");
//     }).join(" ");
//   })
//   .attr("fill", "#B72933")
  
// // vis.selectAll("polygon")
//   .data([leftRed])
//   .enter()
//   .append("polygon")
//   .attr("points",function(d) { 
//     return d.map(function(d) {
//       return [d.x, d.y].join(",");
//     }).join(" ");
//   })
//   .attr("fill", "#E52A3A")

  // var svg = d3.select('#leftLogo')
  //             .attr('width', 500)
  //             .attr('height', 500)

  // svg.append("line")
  //    .attr("x1", 5)
  //    .attr("y1", 5)
  //    .attr("x2", 50)
  //    .attr("y2", 50)
  //    .attr("stroke-width", 2)
  //    .attr("stroke", "black");
});
