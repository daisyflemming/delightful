This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pre-requisite
##### 1. start a node server - this is required for the `Import Sequences` feature view where you can upload a json file that contains list of sequences. Notice that the node server is hardcoded to listen on port 4000 in this example.
```$xslt
% git clone https://github.com/daisyflemming/delightful.git
% cd delightful/server; npm install
% node app.js
```

## How to run
##### 1. check out from github
```$xslt
% git clone https://github.com/daisyflemming/delightful.git
```

##### 2. add the following environment variable to reflect the node server that the application will be using. In our example, we add a .env file 
```$xslt
% cd delightful/ui
% echo REACT_APP_UPLOAD_URL=http://localhost:4000/fileupload >.env
```

##### 3. start the application in http://localhost:3000/
```$xslt
% npm install; npm start
```

##### 4. notice that 8 sequences were pre-loaded into the application as indicated by "View Sequences"
