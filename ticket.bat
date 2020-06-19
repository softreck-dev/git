@echo off
set CONTENT=%~1
::echo %CONTENT%
set /p VERSION= < VERSION.txt
IF "%CONTENT%" == "" set CONTENT=New Version of System v%VERSION%
echo %CONTENT% >> "Ticket\v%VERSION%.md"
