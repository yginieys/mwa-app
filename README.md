# Test offline

App to test various aspect of offline constraint.

_npm run manifest_ : build dist-manifest directory with offline version of the app.

1. Offline detection and indicator : see index.run.js function onlineFlag()
2. $resource offline management : See cached-resource/item-resource.service.js and https://github.com/goodeggs/angular-cached-resource
   => If online, then store resource response to local cache and use them when offline. Store PUT and POST if offline to replay then when offline again.
3. Allow application loading (reload page) enven if offline. Use of gulp-manifest plugin. See gulp/build.js. 

Doesn't work as expected.
* Use manifest to preload cached resources to see if data are available in $cachedResource when offline and no explicit call of $cachedResource in online mode.
  * Load index page online.
  * Switch to offline
  * Go to resource listing and see if it works.
Tested with /test/items. Work as intended for reading. BUT doesn't work for writing as, even if PUT and POST are done, then GET will get the original content in cache ; and thus is not reflected in the listing.

Still todo :

* Test fallback page.
* Use manifest to preload html fragment from external source.
* Handle auto-update. See https://www.theodo.fr/blog/2015/04/how-to-automatically-update-your-angular-offline-webapps/ 
* See possibility to display $cacheResource modified locally for each resource.

## mwa-app

This is a stating point for angular app.
This project is generated with generator-gulp-angular (https://github.com/Swiip/generator-gulp-angular)

* src/assets  : static resources (pictures, icons, etc...)
* src/app : application sources
* src/mwa-core : folder of core services or libraries. Common to any applications.
* src/main : The main screen of the app
* src/ <screen> : each screen or page should have it own folder.
* src/components : any app component (included in screen) should have it own directory
* src/components/navbar : application main menu.

## Build & development

* npm install
* bower install
* Run `gulp` for building and `gulp serve` for preview.

## Testing

Running `gulp test` will run the tests.


## Todo 

 - Multiple level menu in Demo
 - Document demo : actions.
 - Implements left action in navbar
 - Implement footer action
 - See how to implement pluggable blocs
