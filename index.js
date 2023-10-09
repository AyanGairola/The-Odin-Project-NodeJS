const express=require('express');
const fs=require('fs');
const server= express();
const path=require('path');

const urlMappings={
    '/':'index.html',
    '/about': 'about.html',
    '/contact-me':'contact-me.html'
};

server.use((req, res) => {
    const url=req.url;
    const fileName=urlMappings[url] || '404.html';
    const filePath=path.join(__dirname,'public',fileName);

    res.sendFile(filePath,(err)=>{
        if(err){
            const notFoundFile=path.join(__dirname,'public','404.html');
            res.status(404).sendFile(notFoundFile);
        }
    });


});




server.listen(8080,()=>{
    console.log("Server started");
})