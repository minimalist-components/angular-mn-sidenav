import browserSync from 'browser-sync'

module.exports = {
  templates: {
    src: [
      './sources/templates/demo.jade',
      './sources/templates/index.jade',
    ],
    dest: './docs/',
  },
  scripts: {
    src: [
      './sources/angular/**/*.js',
      '!./sources/**/*.spec.js',
    ],
    dest: './dist/',
    output: 'angular-mn-sidenav.js',
  },
  lintScripts: [
    './gulpfile.js',
    './tasks/**/*.js',
    './sources/**/*.js',
  ],
  browserSync: browserSync.create(),
  browserSyncOptions: {
    server: {
      index: 'demo.html',
      baseDir: [
        './docs',
        '.',
      ],
    },
    notify: false,
    ui: false,
    reloadDelay: 100,
    open: false,
  },
}
