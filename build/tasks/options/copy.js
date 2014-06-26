module.exports = function(grunt){
    return {

    /**
     * generate-script Task
     * ====================
     */

        /**
         * Script in den dist Ordner kopieren
         */
        'generate-script-copy-js': {
            src:    grunt.pkg.paths.temp + grunt.pkg.filenames.script,
            dest:   grunt.pkg.paths.dist + grunt.pkg.filenames.script
        },

        /**
         * Minimierte Script in den dist Ordner kopieren
         */
        'generate-script-copy-js-min': {
            src:    grunt.pkg.paths.temp + grunt.pkg.filenames.scriptmin,
            dest:   grunt.pkg.paths.dist + grunt.pkg.filenames.scriptmin
        },

    /**
     * generate-chrome-extension Task
     * ==============================
     */

        /**
         * Script in den temp Ordner kopieren
         */
        'generate-chrome-extension-copy-js': {
            src:    grunt.pkg.paths.dist + grunt.pkg.filenames.scriptmin,
            dest:   grunt.pkg.paths.chrometemp + grunt.pkg.filenames.scriptmin
        },

        /**
         * Kopiert die Extension in den unpacked Ordner
         */
        'generate-chrome-extension-copy-unpacked': {
            expand: true,
            cwd:    grunt.pkg.paths.chrometemp,
            src:    '**/*',
            dest:   grunt.pkg.paths.chromeunpacked
        }
    };
};