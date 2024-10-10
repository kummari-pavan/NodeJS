var http =require("http") //importing
var fs =require("fs") // importing file system
var url= require("url") //importing url module
var nodemailer=require("nodemailer") //importing nodemailer module

http.createServer((req,res)=>{
    //res.write("Hello India !"); //for res working
    res.write(req.url) //for req working
    res.end();
    console.log("Server Running...")
}).listen(8080)

http.createServer((req,res)=>{
    fs.readFile('test.txt',(err,data)=>{
        res.write(data);
        res.end();
    })
    fs.appendFile('test.txt',"Thank you",(err,data)=>{
        res.write(data);
        res.end();
    })

    fs.writeFile('test.txt',"Thank you",(err,data)=>{ //override with new content
        res.write(data);
        res.end();
    })

    // fs.unlinkFile('test.txt',(err,data)=>{ 
    //     if(err) throw err;
    //     console.log("file Got deleted")
    // })
}).listen(8080)

var adr='http://localhost:8080/home.html?year=20124&&month=10';
var q =url.parse(adr,true);
console.log(q.host);
console.log(q.pathname);
console.log(search);

var transforter =nodemailer.createTransfort({
    service:gmail,
    auth:{
        user:"pavan@gmail.com",
        pass:"12345678"
    }

})

var options ={
    from:"pavan@gmail.com",
    to:"bl@gmail.com",
    subject:"For Demo",
    Text:"Demo text"
}

transforter.sendmail(options,(err,Info)=>{
    if(err){
        console.log(err);
    }else{
        console.log("email sent "+Info.response)
    }
})

//API integration
 var http =require("http");
 http.createServer((req,res)=>{
    fs.readFile('user.txt',(err,data)=>{
        res.write(data);
        res.end();
        console.log("API is running")
    })
}).listen(8080)