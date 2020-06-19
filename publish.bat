@ECHO OFF
set /P VERSION= < .apicra\variable\VERSION.txt
git push origin v%VERSION%
::npm publish --access public && @ping -n 4 localhost> nul && echo "Optionally put Your defined Version: X.Y.Z" && -version.bat && -ticket.bat && -open-npm-url.bat
::github-push.bat && version.bat && github-push.bat && npm-publish.bat
