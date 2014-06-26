module.exports = function(grunt){
    return {

    /**
     * generate-script Task
     * ====================
     */

        /**
         * Fügt das Menu in das Script ein
         */
        'generate-script-string-replace-menu': {
            options: {
                replacements: [{
                    pattern: /\{\{optionshtml\}\}/ig,
                    replacement: function () {
                        return grunt.file.read(grunt.pkg.paths.temp + grunt.pkg.filenames.options);
                    }
                }]
            },
            files: [{
                src:    grunt.pkg.paths.temp + grunt.pkg.filenames.script,
                dest:   grunt.pkg.paths.temp + grunt.pkg.filenames.script
            }]
        },

        /**
         * Ersetzt die Version in den Scripten
         */
        'generate-script-string-replace-version': {
            options: {
                replacements: [{
                    pattern:        /\{\{version\}\}/ig,
                    replacement:    grunt.pkg.version
                }]
            },
            files: [
                {   src:    grunt.pkg.paths.temp + grunt.pkg.filenames.script,
                    dest:   grunt.pkg.paths.temp + grunt.pkg.filenames.script},
                {   src:    grunt.pkg.paths.temp + grunt.pkg.filenames.scriptmin,
                    dest:   grunt.pkg.paths.temp + grunt.pkg.filenames.scriptmin}
            ]
        },

        /**
         * Bereitet die CSS Styles vor, einfache Hochkommate müssen escaped werden!
         */
        'generate-script-string-replace-escape-css-quote': {
            options: {
                replacements: [{
                    pattern:        /\'/ig,
                    replacement:    '\\\''
                }]
            },
            files: [{
                src:    grunt.pkg.paths.temp + grunt.pkg.filenames.cssmain,
                dest:   grunt.pkg.paths.temp + grunt.pkg.filenames.cssmain
            }]
        },

        /**
         * Bereitet die CSS Styles vor, Backslashes müssen escaped werden!
         */
        'generate-script-string-replace-escape-css-backslash': {
            options: {
                replacements: [{
                    pattern:        /\\/ig,
                    replacement:    '\\\\'
                }]
            },
            files: [{
                src:    grunt.pkg.paths.temp + grunt.pkg.filenames.cssmain,
                dest:   grunt.pkg.paths.temp + grunt.pkg.filenames.cssmain
            }]
        },

        /**
         * Ersetzt die die CSS Styles in den Optionen
         */
        'generate-script-string-replace-css': {
            options: {
                replacements: [{
                    pattern: /\{\{style\}\}/ig,
                    replacement: function () {
                        return grunt.file.read(grunt.pkg.paths.temp + grunt.pkg.filenames.cssmain);
                    }
                }]
            },
            files: [{
                src:    grunt.pkg.paths.temp + grunt.pkg.filenames.options,
                dest:   grunt.pkg.paths.temp + grunt.pkg.filenames.options
            }]
        },

    /**
     * generate-chrome-extension Task
     * ==============================
     */

        /**
         * Ersetzt die Version im Manifest und kopiert es in den temp
         * chrome ordner
         */
        'generate-chrome-extension-string-replace-version': {
            options: {
                replacements: [{
                    pattern: /\{\{version\}\}/ig,
                    replacement: grunt.pkg.version
                }]
            },
            files: [{
                src:    grunt.pkg.paths.chrome + grunt.pkg.filenames.chromemanifest,
                dest:   grunt.pkg.paths.chrometemp + grunt.pkg.filenames.chromemanifest
            }]
        }
    };
};