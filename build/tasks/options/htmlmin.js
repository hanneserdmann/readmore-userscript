module.exports = function(grunt){

     return {

    /**
     * generate-script Task
     * ====================
     */

         /**
          * Minimiert das HTML der Optionen,
          * verschiebt die minimierte Version in den temp Ordner
          */
        'generate-script-htmlmin-options': {
            options: {
                removeComments:             true,
                collapseWhitespace:         true,
                removeCommentsFromCDATA:    true,
                minifyCSS:                  true
            },
            files: [{
                src:    grunt.pkg.paths.source  + grunt.pkg.filenames.options,
                dest:   grunt.pkg.paths.temp    + grunt.pkg.filenames.options
            }]
        }
    };
};