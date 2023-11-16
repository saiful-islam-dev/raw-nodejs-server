const fs = require("fs");

// read text asynchronuusly
fs.readFile("./text/read.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("shome thing happend");
  }

//   console.log(data);

  // weite text asynchronuusly
  fs.writeFile('./text/write.txt', data, 'utf-8', (err)=>{
    if(err){
        throw Error('something is happend when weiting')
    }
  })
});

console.log("testing async");