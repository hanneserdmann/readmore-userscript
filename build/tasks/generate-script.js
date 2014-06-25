/**
 * Dieser Tasks erstellt die Files readmore-userscript.user.js und die
 * minimierte Version davon. Die Files werden im dist Ordner abgelegt.
 *
 * @param grunt
 */
module.exports = function(grunt) {
    var taskList = [
        'concat:generate-script-concat-js',
        'htmlmin:generate-script-htmlmin-options',
        'string-replace:generate-script-string-replace-menu',
        'uglify:generate-script-uglify-js',
        'concat:generate-script-concat-js-userscripthead',
        'concat:generate-script-concat-js-min-userscripthead',
        'string-replace:generate-script-string-replace-version',
        'copy:generate-script-copy-js',
        'copy:generate-script-copy-js-min',
        'clean:temp'
    ];

    grunt.registerTask('generate-script', taskList);
};