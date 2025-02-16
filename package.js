Package.describe({
  name: "mizzao:timesync",
  summary: "NTP-style time synchronization between server and client",
  version: "1.0.0",
  git: "https://github.com/Meteor-Community-Packages/meteor-timesync"
});

Package.onUse(function (api) {
  api.versionsFrom(["1.12", "2.3", '3.0-beta.0']);

  api.use([
    'check',
    'tracker',
    'http'
  ], 'client');

  api.use('webapp', 'server');

  api.use('ecmascript');

  // Our files
  api.addFiles('timesync-server.js', 'server');
  api.addFiles('timesync-client.js', 'client');

  api.export('TimeSync', 'client');
  api.export('SyncInternals', 'client', {testOnly: true} );
});

Package.onTest(function (api) {
  api.use([
    'tinytest',
    'test-helpers'
  ]);

  api.use(["tracker", "underscore"], 'client');

  api.use("mizzao:timesync");

  api.addFiles('tests/client.js', 'client');
});
