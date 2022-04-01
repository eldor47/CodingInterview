var kClosest = function(points, k) {
    var origin = [0, 0]
    var distances = []

    for(var point of points) {
        distances.push({d: distance(origin, point), p: point})
    }

    distances.sort((a, b) => {
        return a.d - b.d
    })

    return distances.slice(0, k).map(item => item.p)
}   

function pClosest(pts,k)
{
    let n = pts.length;
    let distance = new Array(n);
    for(let i = 0; i < n; i++)
    {
        let x = pts[i][0], y = pts[i][1];
        distance[i] = (x * x) + (y * y);
    }
  
    distance.sort(function(a,b){return a-b;});
      
    // Find the k-th distance
    let distk = distance[k - 1];
  
    // Print all distances which are
    // smaller than k-th distance
    for(let i = 0; i < n; i++)
    {
        let x = pts[i][0], y = pts[i][1];
        let dist = (x * x) + (y * y);
          
        if (dist <= distk)
            document.write("[" + x + ", " + y + "]<br>");
    }
}

var distance = (origin, point) => {
    // sqrt((0 - 1)^2 + (0-3)^2)
    // sqrt(10)
    return Math.sqrt(Math.pow((origin[0] - point[0]), 2) + Math.pow((origin[1] - point[1]), 2)) 
}

var points = [[3, 3], [5, -1], [-2, 4]];
var k = 3

console.log(kClosest(points, k))