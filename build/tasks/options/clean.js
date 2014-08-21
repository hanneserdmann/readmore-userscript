module.exports = function(grunt){
    return {

        /**
         * Bereinigt den temp Ordner
         */
        'temp': [
            grunt.pkg.paths.temp + '*'
        ],

        /**
         * Bereinigt den Fontello temp Ordner
         */
        'fontello-temp': [
            grunt.pkg.paths.fontellotemp + '*'
        ],

        /**
         * Bereinigt den dist Ordner
         */
        'dist': [
            grunt.pkg.paths.dist + '*'
        ],

        /**
         * Bereinigt den unpacked Ordner im Chrome Verzeichniss
         */
        'chrome-unpacked': [
            grunt.pkg.paths.chromeunpacked + '*'
        ],

        /**
         * Bereinigt den unpacked Ordner im Firefox Verzeichniss
         */
        'firefox-unpacked': [
            grunt.pkg.paths.firefoxunpacked + '*'
        ]
    };
};