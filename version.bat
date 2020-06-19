@echo off
npm version patch && node -pe "require('./package.json').version" > VERSION.txt
ticket.bat
