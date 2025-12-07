#!/bin/bash
export DB_CONNECTION=mysql
export DB_HOST=127.0.0.1
export DB_PORT=3306
export DB_DATABASE=mansus
export DB_USERNAME=root
export DB_PASSWORD=
nohup php artisan serve > serve.log 2>&1 &
echo $! > serve.pid
echo "Server started with PID $(cat serve.pid)"
