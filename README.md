# Node.js Express & MongoDB: CRUD Rest APIs

## Project setup

### [1] create .env file in the current directory with the following:
```
DB_HOST=mongodb-host-ip
DB_PORT=mongodb-port
DB_USER=mongodb-user
DB_PASS=mongodb-userpassword
DB_DATABASE=mongodb-databasename
```
### [2] installa required dependencies
```
npm install
```

### [3] Run
```
node server.js
$ nohup node server.js > /dev/null 2>&1 &
```

### [4] allow connections on 9080
```
sudo ufw allow 9080
```

### [5] visit 
```
http://{your-server-ip}:9080/
```

### stop 
```
ps axl | grep node
kill -9 [PID]
```

### rest api routes
```
GET http://{your-server-ip}:9080/api/products
POST http://{your-server-ip}:9080/api/products
GET http://{your-server-ip}:9080/api/products/{id}
PUT http://{your-server-ip}:9080/api/products/{id}
DELETE http://{your-server-ip}:9080/api/products/{id}
```


