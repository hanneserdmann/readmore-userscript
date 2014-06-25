module.exports = function(grunt){
    return {

    /**
     * generate-script Task
     * ====================
     */

        /**
         * Minimiert das zusammengesetzte Script
         */
        'generate-script-uglify-js':{
              files:[{
                    src:    grunt.pkg.paths.temp + grunt.pkg.filenames.script,
                    dest:   grunt.pkg.paths.temp + grunt.pkg.filenames.scriptmin
              }]
        }
    };
};