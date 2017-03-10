var babelMoreOptions = { presets: 'es2015' };

module.exports = function (config) {
  config.set({

    basePath: '.',
    frameworks: ['browserify','mocha','chai','sinon'],
    files: [
      'dev/utils/*.js',
      'dev/js/pubsub.js',
      // 'dev/components/**/*.js',
      // 'dev/js/**/*.js',
      // 'dev/components/**/*.js',
      // 'dev/components/task-item/task-item_controller.js',
      'dev/components/task-item/task-item_model.js',
      'dev/components/task-collection/task-collection_model.js',
      'dev/tests/specs/**/*.spec.js'
    ],
    reporters: ['progress', 'coverage'],
    preprocessors: {
      'dev/js/pubsub.js': ['babel'],
      // 'dev/js/**/*.js': ['babel'],
      // 'dev/components/**/*.js': ['babel'],
      // 'dev/js/**/*.js': ['babel'],
      'dev/tests/specs/**/*.spec.js':  ['babel'],
      // 'dev/components/task-item/task-item_controller.js': ['babel','coverage'],
      'dev/components/task-item/task-item_model.js': ['babel','coverage'],
      'dev/components/task-collection/task-collection_model.js': ['babel','coverage'],
    },
    babelPreprocessor: {
      options: {
        "presets": ["es2015"],
        "plugins": ["transform-es2015-modules-umd"]
      }
    },
    coverageReporter: {
      instrumenters: { isparta : require('isparta') },
      instrumenter: {
        'dev/**/*.js': 'isparta'
      },
      instrumenterOptions: {
        isparta: { babel : babelMoreOptions }
      }
    },
    concurrency: Infinity
  })
};