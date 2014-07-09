# Readmore.de Userscript - Contributing

### Voraussetzungen

Da wir das Build-Tool Grunt benutzen, brauchst Du [node.js](http://nodejs.org/) und
[Grunt](http://gruntjs.com/getting-started) um einen Build erstellen zu können.

1. node.js installieren (enthält den Node Package Manager _npm_)
2. Grunt installieren

_(Genauere Installationsanweisungen zu den einzelnen Tools sind auf den oben verlinkten Seiten zu finden)_

## Patch/Feature erstellen
### Eigene Repository einrichten
1. [Github-Repository](https://github.com/thextor/readmore-userscript) forken
2. Lokal in einer Shell mit Git die eigene Repository klonen ```git clone git@...```
3. ```npm install``` in der lokalen Repository ausführen, um alle benötigten Dependencies zu installieren
3. Feature-Branch erstellen (von letztem Release-Tag abspalten) ```git checkout -b feature-$NAME $VERSION```
4. Arbeit verrichten
5. Test-Build erstellen
6. Feature-Branch in die lokale Repository pushen ```git push origin feature-$NAME $VERSION```
7. Pull-Request mit einer detaillierten Beschreibung in der offiziellen Repository erstellen

### Build erstellen

* ```grunt``` erstellt readmore-userscript.user.js und readmore-userscript.min.user.js
* ```grunt extension``` erstellt o.g. Dateien sowie die Browser Extensions (Chrome/Firefox)
* ```grunt font``` lädt die Font-Files von [Fontello](http://fontello.com/) herunter und integriert sie in das Script
* ```grunt complete``` führt die angegebenen Tasks aus

Der erstellte Build ist danach in dem Ordner ```build/dist/``` zu finden.
