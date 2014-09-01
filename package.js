Package.describe({
  summary: "Provides jquery.floatThead",
  version: "1.0.0",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use('jquery', 'client');
  api.addFiles('floatThead/dist/jquery.floatThead.js');
});
