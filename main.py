import os 
import eel
eel.init("www")
os.system('start msedge.exe --app="http://localhost:3000/www/assets/index.html"')
eel.start("index.html",mode=None,host='localhost',block=True)