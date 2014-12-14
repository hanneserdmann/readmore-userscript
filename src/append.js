/**
 * Falls jQuery beziehungsweise das Userscript nicht in einer VM läuft wird Mootools von jQuery überschieben
 * und kann nicht mehr durch $ genutzt werden. Um das zu vermeiden werden alle globalen Einträge von
 * jQuery gelöscht und das Userscript noch einmal gekapselt.
 */

(function($){
    /**
     * Leider muss dadurch $ an alle Klassen übergeben werden
     * um wie vorher nutzbar zu sein.
     */
    var readmoreUserscript = new ReadmoreUserscript($);

    readmoreUserscript.start();
    readmoreUserscript.startIntervalReloadPosts();
    readmoreUserscript.startIntervalRapid();
    readmoreUserscript.startIntervalSlow();
})(jQuery.noConflict(true));

/**
 * Stellt die globale Variable $ wieder für Mootools her.
 * http://mootools.net/blog/2009/06/22/the-dollar-safe-mode/
 */
try{window.$ = document.id;}
catch(e){};