module.exports = function(grunt){
    return {

    /**
     * generate-chrome-extension Task
     * ==============================
     */

        /**
         * ZIP-Archiv für die Chrome Extension erstellen
         */
        "generate-chrome-extension-compress-zip": {
            options: {
                archive:    grunt.pkg.paths.distextensions + grunt.pkg.filenames.chromezip,
                mode:       'zip'
            },
            files: [{
                flatten:    true,
                expand:     true,
                src:        [grunt.pkg.paths.chrometemp + '*'],
                dest:       ''
            }]
        },

    /**
     * generate-chrome-extension Task
     * ==============================
     */

        /**
         * ZIP-Archiv für die Firefox Extension erstellen
         */
        "generate-firefox-extension-compress-zip": {
            options: {
                archive:    grunt.pkg.paths.distextensions + grunt.pkg.filenames.firefoxzip,
                mode:       'zip'
            },
            files: [{
                expand:     true,
                cwd:        grunt.pkg.paths.firefoxtemp,
                src:        ['**']
            }]
        }
    };
};