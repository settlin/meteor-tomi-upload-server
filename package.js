Package.describe({
  name: 'tomi:upload-server',
  summary: 'Upload server for Meteor. Allows to save and serve files from arbitrary directory',
  version: '1.4.0',
  git: 'https://github.com/settlin/meteor-tomi-upload-server.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['webapp', 'routepolicy'], 'server');

  api.addFiles('upload_server.js', ['server']);
  api.addFiles('router.js');

  // Export the object 'UploadServer' to packages or apps that use this package.
  api.export('UploadServer', 'server');
});

Npm.depends({
  formidable: '1.0.17',
  gm: '1.23.0'
});
