# File Service - NodeJS

## Description
This is an example of serving files using the stream API and ExpressJS.

Using the stream API lets you serve files of **any size** without keeping any significant part of the file in-memory.

## Prerequisites
* Node v12.x or higher

## Getting Started

At project root, run:
```shell
$ npm i
```

Start the service by running:
```
$ npm start
```

## Testing the Service

By default, locally the service will serve any file from the endpoint:
```
GET localhost:4001/{file}
```

The files are served out of the directory:
```
/file-service/data/
```

By default this directory contains only image files, but *any file type* can be served from this directory.

Once you have started the service, you can test in your Web Browser by visiting any of the fllowing URLS:

* http://localhost:4001/dodge-charger.png
* http://localhost:4001/kitten3000x1500.jpeg
* http://localhost:4001/ferrari-f8.jpg