#!/usr/bin/env bash
while true
echo "Bot Script started | autorestart on"
do 
	node security.js
	echo "Restarting in 5 seconds, ctrl^c to cancel."
	sleep 5
done
