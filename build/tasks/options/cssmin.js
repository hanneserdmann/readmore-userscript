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
        'generate-script-cssmin-main': {

            src: [  grunt.pkg.paths.css + grunt.pkg.filenames.cssmain,
                    grunt.pkg.paths.css + grunt.pkg.filenames.cssicons
            ],
            dest: grunt.pkg.paths.temp + grunt.pkg.filenames.cssmain
        }
    };
};