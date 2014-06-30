/**
 * Dieser Tasks erstellt die Firefox Extension
 *
 * @param grunt
 */
module.exports = function(grunt) {
    var taskList = [
        'clean:firefox-unpacked',
        'copy:generate-firefox-extension-copy-to-temp',
        'string-replace:generate-firefox-extension-string-replace-version',
        'copy:generate-firefox-extension-copy-js',
        'copy:generate-firefox-extension-copy-unpacked',
        'compress:generate-firefox-extension-compress-zip',
        'clean:temp'
    ];

    grunt.registerTask('generate-firefox-extension', taskList);
};