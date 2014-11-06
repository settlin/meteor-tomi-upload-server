Package.describe({
  name: 'tomi:upload-server',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('iron:router');
  api.use(['webapp', 'routepolicy'], 'server');

  api.addFiles('upload_server.js', ['server']);
  api.addFiles('router.js');

  // Export the object 'UploadServer' to packages or apps that use this package.
  api.export('UploadServer', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('tomi:upload-server');
  api.addFiles('upload-server-tests.js');
});

Npm.depends({
  formidable: '1.0.15',
  imagemagick: '0.1.3',
  connect: '2.7.10'
})