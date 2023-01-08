// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let allPointMap = [];
    for(let i=0; i<points.length; i++){
        let [x1,y1] = points[i];
        let slopeMap = {};
        for(let j=i+1; j<points.length; j++){
            let [x2,y2] = points[j];
            let slope;
            if(x1 == x2){
                slope = 'sameAxis'
            }else{
                slope = (y2-y1)/(x2-x1); 
            } 
            if(slopeMap[slope]){
                slopeMap[slope]++;
            }else{
                slopeMap[slope] = 1;
            }
        }
        allPointMap.push(slopeMap); 
    }

    let max = 0;
    for(let i=0; i<allPointMap.length; i++ ){
        let obj = allPointMap[i];
        for(let k in obj){
            let count = obj[k];
            if(max < count){
                max = count;
            }
        }
        
    }
    return max+1;

};