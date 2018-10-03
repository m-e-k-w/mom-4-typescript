var fs = require('fs');
var filehitch = /** @class */ (function () {
    function filehitch(filename) {
        this.textfile = filename;
    }
    filehitch.prototype.showfile = function () {
        fs.readFile(this.textfile, 'utf8', function (err, data) {
            if (err)
                throw err;
            console.log(data); // Print all data to the console
            var reg = /\n| /; // Strip of all new lines and blanks
            var clean = data.split(reg);
            //console.log(clean);
            var count = {};
            for (var _i = 0, clean_1 = clean; _i < clean_1.length; _i++) {
                var i = clean_1[_i];
                count[i] = (count[i] || 0) + 1;
                //console.log(count);
            }
            var sorted = []; // Declare a new array
            for (var key in count)
                sorted.push([key, count[key]]); // Create a new array for use - sorted[word] = count;
            sorted.sort(function (a, b) { return a[1] - b[1]; }); // Sort the array based on the second element (count)
            sorted.reverse(); // Reverse the result array
            console.log(sorted.slice(0, 10));
        });
    };
    return filehitch;
}());
var fil = new filehitch("hitch.txt");
fil.showfile();
