/**
 * Turns a JSON object into a query string
 * 
 * @obj = the object to turn into a query string
 * 
 * RETURNS a string useful as a query
 */
JSON.toQueryString = function(obj) {
    //Start with an empty string
    var str = '';

    //Loop through each property of the object
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            //Add property and value to str
            str += String.format("{0}={1}&", [key, obj[key]]);
        }
    }

    //Remove any trailing &
    if (str.endsWith("&")) {
        var length = str.length;

        str = str.substring(0, length - 1);
    }

    return str;
}