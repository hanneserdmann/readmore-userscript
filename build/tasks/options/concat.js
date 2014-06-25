module.exports = function(grunt){
    return {

    /**
     * generate-script Task
     * ====================
     */

        /**
         * Fügt die einzelnen Bestandteile des Scriptes zusammen
         * und legt sie im temp Ordner ab
         */
        'generate-script-concat-js': {
            src: [
                grunt.pkg.paths.jquery  + '*.js',
                grunt.pkg.paths.source  + 'prepend.js',
                grunt.pkg.paths.lib     + '*.js',
                grunt.pkg.paths.source  + 'append.js'
            ],
            dest: grunt.pkg.paths.temp + grunt.pkg.filenames.script
        },

        /**
         * Fügt den Kopf des Userscriptes in das Script ein
         */
        'generate-script-concat-js-userscripthead': {
            src: [
                grunt.pkg.paths.source  + 'userscripthead.js',
                grunt.pkg.paths.temp    + grunt.pkg.filenames.script
            ],
            dest: grunt.pkg.paths.temp    + grunt.pkg.filenames.script
        },

        /**
         * Fügt den Kopf des Userscriptes in das minimierte Script ein
         */
        'generate-script-concat-js-min-userscripthead': {
            src: [
                grunt.pkg.paths.source  + 'userscripthead.js',
                grunt.pkg.paths.temp    + grunt.pkg.filenames.scriptmin
            ],
            dest: grunt.pkg.paths.temp    + grunt.pkg.filenames.scriptmin
        }
    };
};