/**
 * Converts from degrees to radians.
 * 
 * @degrees = degrees to convert to radians
 * 
 * RETURNS value in radians
 **/
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};
 
/**
 * Converts from radians to degrees.
 * 
 * @radians = radians to convert to degrees
 * 
 * RETURNS value in degrees
 **/
Math.degrees = function(radians) {
  return radians * 180 / Math.PI;
};

/**
 * Finds a point on a circle
 * 
 * @cx = x coordinate of center of circle
 * @cy = y coordinate of the center of the circle
 * @r = radius of circle
 * @a = angle to find point at
 * 
 * RETURNS an object with an x property and y property
 **/
Math.pointOnCircle = function(cx, cy, r, a) {
    return {
        x: cx + r * Math.cos(a),
        y: cy + r * Math.sin(a)
    }
};

/**
 * Shorten line be designated length
 * 
 * @point = object containing an x and y property
 * @shortenBy = the length to shorten the line by
 * 
 * RETURNS object with an x and y property
 **/
Math.shortenLine = function(point, shortenBy) {
    return {
        x: point.x < 0 ? point.x + shortenBy : point.x - shortenBy,
        y: point.y < 0 ? point.y + shortenBy : point.y - shortenBy
    }
}