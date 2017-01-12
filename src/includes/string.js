/**
 * Mimics .Net's String.Format feature.
 * 
 * Adapted from AspDotNetDev's code at
 * https://www.codeproject.com/tips/201899/string-format-in-javascript
 * 
 * @args = Array of strings to insert into the base string.
 */
String.prototype.format = function (args) {
    var str = this;
    return str.replace(String.prototype.format.regex, function (item) {
        var intVal = parseInt(item.substring(1, item.length - 1));
        var replace;
        if (intVal >= 0) {
            replace = args[intVal];
        } else if (intVal === -1) {
            replace = "{";
        } else if (intVal === -2) {
            replace = "}";
        } else {
            replace = "";
        }
        return replace;
    });
};
String.prototype.format.regex = new RegExp("{-?[0-9]+}", "g");

/**
 * Mimics .Net's String.Format feature.
 * 
 * @str = String to insert args into
 * @args = Array of strings to insert into str
 */
String.format = function(str, args) {
    return str.format(args);
}