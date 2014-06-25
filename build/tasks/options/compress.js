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
                archive:    grunt.pkg.paths.dist + grunt.pkg.filenames.chromezip,
                mode:       'zip'
            },
            files: [{
                flatten:    true,
                expand:     true,
                src:        [grunt.pkg.paths.chrometemp + '*'],
                dest:       ''
            }]
        }
    };
};