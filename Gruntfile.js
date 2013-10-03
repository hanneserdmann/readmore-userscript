/*global module */

module.exports = function (grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({

        concat: {
            // Scripte / Module zusammenführen
            // Auch jQuery integrieren
            script: {
                src: [
                    'src/prepend.js',
                    'src/jquery/jquery-*.min.js',
                    'src/lib/*.js',
                    'src/append.js'
                ],
                dest: 'dist/readmore-userscript.user.js'
            },

            // Userscripthead hinzufügen
            header: {
                src: [
                    'src/userscripthead.js',
                    'dist/readmore-userscript.user.js'
                ],
                dest: 'dist/readmore-userscript.user.js'
            },

            // Userscripthead zur minimierten Version hinzufügen
            headermin: {
                src: [
                    'src/userscripthead.js',
                    'dist/readmore-userscript.min.user.js'
                ],
                dest: 'dist/readmore-userscript.min.user.js'
            }
        },

        htmlmin: {
            // HTML der Optionen minimieren
            scriptoptions: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/options.html': 'src/options.html'
                }
            }
        },

        uglify: {
            // Minimierte Version vom Userscript erstellen
            script: {
                files: {
                    'dist/readmore-userscript.min.user.js': ['dist/readmore-userscript.user.js']
                }
            }
        },

        'string-replace': {
            // Menu in das Script einfügen
            includemenu: {
                options: {
                    replacements: [{
                        pattern: /\{\{optionshtml\}\}/ig,
                        replacement: function () {
                            return grunt.file.read('dist/options.html');
                        }
                    },
                        { pattern: ",", replacement: ";" }]
                },
                files: {
                    'dist/readmore-userscript.user.js': 'dist/readmore-userscript.user.js'
                }
            },

            // Linebreaks entfernen
            removelinebreak: {
                options: {
                    replacements: [{
                        pattern: /\r?\n|\r/g,
                        replacement: ''
                    },
                        { pattern: ",", replacement: ";" }]
                },
                files: {
                    'dist/options.html': 'dist/options.html'
                }
            },

            // Leerzeichen entfernen
            removewhitespace: {
                options: {
                    replacements: [{
                        pattern: /\s+/g,
                        replacement: ' '
                    },
                        {
                            pattern: ",",
                            replacement: ";"
                        }]
                },
                files: {
                    'dist/options.html': 'dist/options.html'
                }
            }
        },

        // Aufräumen / Tempfiles entfernen
        clean: {
            src: 'dist/options.html'
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task.
    var tasks = [
        'htmlmin:scriptoptions',
        'concat:script',
        'string-replace:removelinebreak',
        'string-replace:removewhitespace',
        'string-replace:includemenu',
        'uglify:script',
        'concat:header',
        'concat:headermin',
        'clean'
    ];

    grunt.registerTask('default', tasks);
};