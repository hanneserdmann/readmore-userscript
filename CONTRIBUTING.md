# Readmore.de Userscript - Contributing

### Voraussetzungen

Da wir das Build-Tool Grunt benutzen, brauchst Du [node.js](http://nodejs.org/) und
[Grunt](http://gruntjs.com/getting-started) um einen Build erstellen zu können.

1. node.js installieren (enthält den Node Package Manager _npm_)
2. Grunt installieren
3. ```npm install``` in der eigenen Repository ausführen, um alle benötigten Dependencies zu installieren

_(Genauere Installationsanweisungen zu den einzelnen Tools sind auf den oben verlinkten Seiten zu finden)_

## Patch/Feature erstellen
### Eigene Repository einrichten
1. [Github-Repository](https://github.com/thextor/readmore-userscript) klonen
2. Lokal mit Git den eigenen Klon auschecken ```git clone git@...```
3. Feature-Branch erstellen (von letztem Release-Tag abspalten) ```git checkout -b feature-$NAME 4.0.2```
4. Arbeit verrichten (Test-Build erstellen)
5. Feature-Branch in die lokale Repository pushen ```git push origin feature-$NAME```
6. Pull-Request mit einer detaillierten Beschreibung in der offiziellen Repository erstellen

### Build erstellen

* ```grunt``` erstellt readmore-userscript.user.js und readmore-userscript.min.user.js
* ```grunt extension``` erstellt o.g. Dateien sowie die Browser Extension (Chrome)

Der erstellte Build ist danach in dem Ordner ```build/dist/``` zu finden