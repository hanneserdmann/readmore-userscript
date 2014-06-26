/**
 * Dieser Tasks erstellt die Chrome Extension
 *
 * @param grunt
 */
module.exports = function(grunt) {
    var taskList = [
        'clean:chrome-unpacked',
        'copy:generate-chrome-extension-copy-js',
        'string-replace:generate-chrome-extension-string-replace-version',
        'copy:generate-chrome-extension-copy-unpacked',
        'compress:generate-chrome-extension-compress-zip',
        'clean:temp'
    ];

    grunt.registerTask('generate-chrome-extension', taskList);
};