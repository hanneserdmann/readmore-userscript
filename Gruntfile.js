module.exports = function (grunt) {
    // Read package
    grunt.pkg = grunt.file.readJSON('package.json');

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Load grunt configurations automatically
    grunt.initConfig(require('load-grunt-configs')(grunt, {config: {src: 'build/tasks/options/*.js'}}));

    // Load custom tasks
    grunt.loadTasks('build/tasks');

    //Der default Task leert das dist Verzeichniss und erzeugt das Userscript
    grunt.registerTask('default', ['clean:dist', 'generate-script']);

    // Erzeugt das Userscript und erstellt auf der Basis die Extension(s)
    grunt.registerTask('extension', ['clean:dist', 'generate-script', 'generate-chrome-extension', 'generate-firefox-extension']);

    // Lädt die Fonts neu runter, Konfiguration in der vendor/fontello/config.json
    grunt.registerTask('font', ['generate-font']);

    // Alle Taks nacheinander ausführen
    grunt.registerTask('complete', ['font', 'extension']);
};