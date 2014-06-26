module.exports = function(grunt){

    return {

    /**
     * generate-font Task
     * ==================
     */

        /**
         * Minimiert das HTML der Optionen,
         * verschiebt die minimierte Version in den temp Ordner
         */
        'generate-font-fontello-download': {
            options: {
                force:  true,
                scss:   false,
                config: grunt.pkg.paths.fontello + grunt.pkg.filenames.fontelloconfig,
                styles: grunt.pkg.paths.fontellotemp,
                fonts:  grunt.pkg.paths.fontellotemp
            }
        }
    };
};