'use strict';

exports.handler = function(event ,context ,callback){

  let html = `<head>
  <title>Welcome to AWS Lambda !</title>
  <style>
    html, body {
      font-family: arial; color:red;
      text-align: center;
      margin-top: 30px;
    }
  </style>
  </head>
  <body>
  <h1>Welcome to AWS Lambda !</h1>
  </body>
  </html>`;

  let response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
    },
    body: html,
  };

  callback(null, response);
}


