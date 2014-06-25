module.exports = function(grunt){
    return {

        /**
         * Bereinigt den temp Ordner
         */
        'temp': [
            grunt.pkg.paths.temp + '*'
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
        ]
    };
};