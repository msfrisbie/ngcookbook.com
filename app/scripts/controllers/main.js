'use strict';

angular.module('ngcookbookApp')
.controller('MainCtrl', function ($scope, $rootScope) {

  $rootScope.logoVisible = true;

  // var refDist = 500

  // var xMinActual = 0
  // var xMaxActual = refDist-xMinActual
  
  // var yMinActual = 0
  // var yMaxActual = refDist-39

  // var windowHeight = $(document).height();
  // // var maxPolygonWidth = windowHeight * ((xMaxActual - xMinActual) / (yMaxActual - yMinActual))
  // var maxPolygonWidth = windowHeight * (201/421)
  
  // var leftSVG = d3.select("#leftLogo")
  //          .attr("width", maxPolygonWidth)
  //          .attr("height", windowHeight)
  

  // var rightSVG = d3.select("#rightLogo")
  //          .attr("width", maxPolygonWidth)
  //          .attr("height", windowHeight)


  // // console.log($(window).height(), $(window).width())



  // var leftPolygons = [
  //   {
  //     "points":[
  //       {"x":201,"y":0},
  //       {"x":201,"y":421},
  //       {"x":37,"y":328},
  //       {"x":0,"y":68}
  //     ],
  //     "fill":"#B3B3B3"
  //   },
  //   { 
  //     "points":[
  //       {"x":201,"y":22},
  //       {"x":201,"y":398},
  //       {"x":55,"y":316},
  //       {"x":22,"y":83}
  //     ],
  //     "fill":"#E52A3A"
  //   },
  //   {
  //     "points":[
  //       {"x":201,"y":37},
  //       {"x":201,"y":124},
  //       {"x":162,"y":210},
  //       {"x":201,"y":210},
  //       {"x":201,"y":246},
  //       {"x":146,"y":246},
  //       {"x":121,"y":307},
  //       {"x":75,"y":307}
  //     ],
  //     "fill":"#F1F1F1"
  //   }
  // ]

  // // var leftPolygons = [
  // //   {
  // //     // gray border
  // //     points: [
  // //       {"x":250-49, "y":40-40},
  // //       {"x":250-49, "y":461-40},
  // //       {"x":500-414-49, "y":368-40},
  // //       {"x":500-451-49, "y":108-40},
  // //     ],
  // //     fill: "#B3B3B3"
  // //   },
  // //   {
  // //     // left light red
  // //     points: [
  // //       {"x":250-49, "y":62-40},
  // //       {"x":250-49, "y":438-40},
  // //       {"x":104-49, "y":356-40},
  // //       {"x":71-49 , "y":123-40}
  // //     ],
  // //     fill: "#E52A3A"
  // //   },
  // //   {
  // //     // left half A
  // //     points: [
  // //       {"x":250-49, "y":77-40},
  // //       {"x":250-49, "y":164-40},
  // //       {"x":211-49, "y":250-40},
  // //       {"x":250-49, "y":250-40},
  // //       {"x":250-49, "y":286-40},
  // //       {"x":195-49, "y":286-40},
  // //       {"x":170-49, "y":347-40},
  // //       {"x":124-49, "y":347-40}
  // //     ],
  // //     fill: "#F1F1F1"
  // //   }
  // // ]

  // var rightPolygons = [
  //   {
  //     "points":[
  //       {"x":201,"y":0},
  //       {"x":402,"y":68},
  //       {"x":365,"y":328},
  //       {"x":201,"y":421}
  //     ],
  //     "fill":"#B3B3B3"
  //   },
  //   {
  //     "points":[
  //       {"x":201,"y":22},
  //       {"x":201,"y":398},
  //       {"x":347,"y":316},
  //       {"x":380,"y":83}
  //     ],
  //     "fill":"#B72933"
  //   },
  //   {
  //     "points":[
  //       {"x":201,"y":37},
  //       {"x":201,"y":124},
  //       {"x":240,"y":210},
  //       {"x":201,"y":210},
  //       {"x":201,"y":246},
  //       {"x":256,"y":246},
  //       {"x":281,"y":307},
  //       {"x":327,"y":307}
  //     ],
  //     "fill":"#B3B3B3"
  //   }
  // ]


  // // var rightPolygons = [
  // //   {
  // //     // gray border
  // //     points: [
  // //       {"x":250-49, "y":40-40},
  // //       {"x":451-49, "y":108-40},
  // //       {"x":414-49, "y":368-40},
  // //       {"x":250-49, "y":461-40}
  // //     ],
  // //     fill: "#B3B3B3"
  // //   },
  // //   {
  // //     // right dark red
  // //     points: [
  // //       {"x":250-49, "y":62-40},
  // //       {"x":250-49, "y":438-40},
  // //       {"x":500-104-49, "y":356-40},
  // //       {"x":500-71-49 , "y":123-40}
  // //     ],
  // //     fill: "#B72933"
  // //   },
  // //   {
  // //     // right half A
  // //     points: [
  // //       {"x":250-49, "y":77-40},
  // //       {"x":250-49, "y":164-40},
  // //       {"x":500-211-49, "y":250-40},
  // //       {"x":250-49, "y":250-40},
  // //       {"x":250-49, "y":286-40},
  // //       {"x":500-195-49, "y":286-40},
  // //       {"x":500-170-49, "y":347-40},
  // //       {"x":500-124-49, "y":347-40}
  // //     ],
  // //     fill: "#B3B3B3"
  // //   }
  // // ]

  // drawPolygons(
  //   leftSVG, 
  //   leftPolygons, 
  //   [0,201],
  //   [0,421]
  // )
  // drawPolygons(
  //   rightSVG, 
  //   rightPolygons,
  //   [201,402],
  //   [0, 421] 
  // )


  // function drawPolygons(svg, polygons, xDomain, yDomain, xOffset) {

  //   xOffset = xOffset || 0
  //   var scaleX = d3.scale.linear()
  //           .domain(xDomain)
  //           .range([0,windowHeight * 201/421])

  //   var scaleY = d3.scale.linear()
  //           .domain(yDomain)
  //           .range([0,windowHeight])


  //   svg.selectAll("polygon")
  //     .data(polygons)
  //     .enter()
  //     .append("polygon")
  //     .attr("points",function(d) { 
  //       return d.points.map(function(d) {
  //         return [scaleX(d.x + xOffset),scaleY(d.y)].join(",");
  //       }).join(" ");
  //     })
  //     .attr("fill", function(d) {return d.fill})
  // }

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
