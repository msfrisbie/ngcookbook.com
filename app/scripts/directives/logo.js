angular.module('ngcookbookApp')
.directive('logo', function () {
  return {
    restrict: 'E',
    link: function() {
      var windowHeight = $(document).height();
      // var maxPolygonWidth = windowHeight * ((xMaxActual - xMinActual) / (yMaxActual - yMinActual))
      var maxPolygonWidth = windowHeight * (201/421)
      
      var leftSVG = d3.select("#leftLogo")
               .attr("width", maxPolygonWidth)
               .attr("height", windowHeight)
      

      var rightSVG = d3.select("#rightLogo")
               .attr("width", maxPolygonWidth)
               .attr("height", windowHeight)


      var leftPolygons = [
        {
          "points":[
            {"x":201,"y":0},
            {"x":201,"y":421},
            {"x":37,"y":328},
            {"x":0,"y":68}
          ],
          "fill":"#B3B3B3"
        },
        { 
          "points":[
            {"x":201,"y":22},
            {"x":201,"y":398},
            {"x":55,"y":316},
            {"x":22,"y":83}
          ],
          "fill":"#E52A3A"
        },
        {
          "points":[
            {"x":201,"y":37},
            {"x":201,"y":124},
            {"x":162,"y":210},
            {"x":201,"y":210},
            {"x":201,"y":246},
            {"x":146,"y":246},
            {"x":121,"y":307},
            {"x":75,"y":307}
          ],
          "fill":"#F1F1F1"
        }
      ]


      var rightPolygons = [
        {
          "points":[
            {"x":201,"y":0},
            {"x":402,"y":68},
            {"x":365,"y":328},
            {"x":201,"y":421}
          ],
          "fill":"#B3B3B3"
        },
        {
          "points":[
            {"x":201,"y":22},
            {"x":201,"y":398},
            {"x":347,"y":316},
            {"x":380,"y":83}
          ],
          "fill":"#B72933"
        },
        {
          "points":[
            {"x":201,"y":37},
            {"x":201,"y":124},
            {"x":240,"y":210},
            {"x":201,"y":210},
            {"x":201,"y":246},
            {"x":256,"y":246},
            {"x":281,"y":307},
            {"x":327,"y":307}
          ],
          "fill":"#B3B3B3"
        }
      ]


      drawPolygons(
        leftSVG, 
        leftPolygons, 
        [0,201],
        [0,421]
      )
      drawPolygons(
        rightSVG, 
        rightPolygons,
        [201,402],
        [0, 421] 
      )


      function drawPolygons(svg, polygons, xDomain, yDomain, xOffset) {

        xOffset = xOffset || 0
        var scaleX = d3.scale.linear()
                .domain(xDomain)
                .range([0,windowHeight * 201/421])

        var scaleY = d3.scale.linear()
                .domain(yDomain)
                .range([0,windowHeight])


        svg.selectAll("polygon")
          .data(polygons)
          .enter()
          .append("polygon")
          .attr("points",function(d) { 
            return d.points.map(function(d) {
              return [scaleX(d.x + xOffset),scaleY(d.y)].join(",");
            }).join(" ");
          })
          .attr("fill", function(d) {return d.fill})
      }
    },
    templateUrl: 'views/templates/logo.html'
  }
})