@echo off
echo Deteniendo MySQL...
taskkill /F /IM mysqld.exe 2>nul
timeout /t 2 /nobreak >nul

echo Iniciando MySQL en modo seguro...
start /b C:\xampp\mysql\bin\mysqld.exe --skip-grant-tables --skip-networking=0
timeout /t 5 /nobreak >nul

echo Restableciendo permisos...
C:\xampp\mysql\bin\mysql.exe -u root -e "FLUSH PRIVILEGES; GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' IDENTIFIED BY '' WITH GRANT OPTION; GRANT ALL PRIVILEGES ON *.* TO 'root'@'127.0.0.1' IDENTIFIED BY '' WITH GRANT OPTION; FLUSH PRIVILEGES;"

echo Deteniendo MySQL...
taskkill /F /IM mysqld.exe 2>nul
timeout /t 2 /nobreak >nul

echo Iniciando MySQL normalmente...
C:\xampp\mysql_start.bat

echo Listo!
pause
