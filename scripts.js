@echo off
set updateCommand="curl https://api.dnsexit.com/dns/ud/?apikey=r2iQA5lRl2J1Z479Y71qS87s81U4hg -d host=thineth.work.gd"
rem Create a scheduled task to run every 12 minutes. It must be run as System Administrator because it uses the SYSTEM account..
schtasks /create /tn "DNS Exit IP Update" /tr %updateCommand% /sc minute /mo 12 /ru SYSTEM
echo DNS Exit IP Update Task created. 
