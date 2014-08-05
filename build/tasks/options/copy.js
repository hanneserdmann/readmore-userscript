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
            src:    grunt.pkg.paths.dist + grunt.pkg.filenames.script,
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
        },

    /**
     * generate-firefox-extension Task
     * ===============================
     */
        /**
         * Daten aus dem src Ordner in den temp Ordner kopieren
         */
        'generate-firefox-extension-copy-to-temp': {
            expand: true,
            cwd:    grunt.pkg.paths.firefoxsrc,
            src:    '**/*',
            dest:   grunt.pkg.paths.firefoxtemp
        },

        /**
         * Kopiert das Script in den Data Order der Extension
         */
        'generate-firefox-extension-copy-js': {
            options: {
                replacements: [{
                    pattern: /\{\{version\}\}/ig,
                    replacement: grunt.pkg.version
                }]
            },
            files: [{
                src:    grunt.pkg.paths.dist + grunt.pkg.filenames.script,
                dest:   grunt.pkg.paths.firefoxtempdata + grunt.pkg.filenames.scriptmin
            }]
        },

        /**
         * Daten aus dem temp Ordner in den unpacked Ordner kopieren
         */
        'generate-firefox-extension-copy-unpacked': {
            expand: true,
            flatten: false,
            cwd:    grunt.pkg.paths.firefoxtemp,
            src:    '**',
            dest:   grunt.pkg.paths.firefoxunpacked
        },

    /**
     * generate-font Task
     * ==================
     */

        /**
         * Kopiert die Fonts in den CSS Ordner
         */
        'generate-font-copy-font': {
            src:    grunt.pkg.paths.fontellotemp + grunt.pkg.filenames.fontellocssemb,
            dest:   grunt.pkg.paths.css + grunt.pkg.filenames.cssicons
        }
    };
};