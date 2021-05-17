const http= require("http");
const fs=require("fs");
var requests=require("requests");


const projectFile=fs.readFileSync("project.html", "utf-8");
  
    const replaceVal=(tempVal,orgVal)=>
    {
         let temperature=tempVal.replace("{%tempval%}",orgVal.main.temp);
         temperature=temperature.replace("{%tempmin%}",orgVal.main.temp_min);
         temperature=temperature.replace("{%tempmax%}",orgVal.main.temp_max);
         temperature=temperature.replace("{%location%}",orgVal.name);
         temperature=temperature.replace("{%country%}",orgVal.sys.country);
         temperature=temperature.replace("{%tempstatus%}",orgVal.weather[0].main);
         return temperature;
    }

           const server= http.createServer((req,res) =>
{
            if(req.url== "/")
       {
        requests('http://api.openweathermap.org/data/2.5/weather?q=delhi&appid=79334b20e3514b3b351f2b7ea3e605bd', )
        .on('data', (chunk) =>
        {
            const objData=JSON.parse(chunk);
            const arrData=[objData];
            const realTimeData=arrData.map((val)=>replaceVal(projectFile,val)).join("");
        
               // console.log(val.main);

                 res.write(realTimeData);
               console.log(realTimeData);
            
         // console.log(val.main);
        })
        .on('end', (err)=> 
        {
          if (err) return console.log('connection closed due to errors', err);
              res.end();
        });
       }
});

  server.listen(8000,"127.0.0.1");
  {
   console.log("listening to the port no 8000");
  }