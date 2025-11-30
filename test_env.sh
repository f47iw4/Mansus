#!/bin/bash
echo "Running test_env.sh" > test_env.log
whoami >> test_env.log
pwd >> test_env.log
which php >> test_env.log
php -v >> test_env.log
env >> test_env.log
echo "Done" >> test_env.log
