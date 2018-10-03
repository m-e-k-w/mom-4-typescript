
//kod tagen från uppgiftsbeskrivning
declare function require(filename:string); // Make it possible to use require in TypeScript
var fs = require('fs');


 

class filehitch{
    textfile: string;
    constructor(filename: string){
        this.textfile = filename;
    }
//kod tagen från uppgiftsbeskrivning
    showfile(): void {
        fs.readFile(this.textfile, 'utf8', function(err, data) { // Read all of the file content 
            if (err) throw err;
            console.log(data); // Print all data to the console
            let reg:RegExp = /\n| /; // Strip of all new lines and blanks
            let clean = data.split(reg); 

            //console.log(clean);

            //kod tagen från uppgiftsbeskrivning
            let count = {};
            for(let i of clean){
            count[i] = (count[i]||0) + 1;
            //console.log(count);
            }

//kod tagen från uppgiftsbeskrivning
var sorted = []; // Declare a new array
for (let key in count) sorted.push([key, count[key]]); // Create a new array for use - sorted[word] = count;
sorted.sort(function (a, b) { return a[1] - b[1] }); // Sort the array based on the second element (count)
sorted.reverse(); // Reverse the result array
  

console.log(sorted.slice(0,10));


}); 
        } 
        
     

}
let fil = new filehitch("hitch.txt");
fil.showfile();


