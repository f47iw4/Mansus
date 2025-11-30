#!/bin/bash
export DB_CONNECTION=sqlite
nohup php artisan serve > serve.log 2>&1 &
echo $! > serve.pid
echo "Server started with PID $(cat serve.pid)"
