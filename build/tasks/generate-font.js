/**
 * Dieser Tasks erstellt die Fonts / Icons
 *
 * @param grunt
 */
module.exports = function(grunt) {
    var taskList = [
        'fontello:generate-font-fontello-download',
        'copy:generate-font-copy-font',
        'clean:fontello-temp',
        'clean:temp'
    ];

    grunt.registerTask('generate-font', taskList);
};