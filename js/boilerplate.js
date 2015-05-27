var gui = require('nw.gui');
var appWindow = gui.Window.get();

// Menu
var nativeMenuBar = new gui.Menu({ type: "menubar" });
nativeMenuBar.createMacBuiltin("My App");
appWindow.menu = nativeMenuBar;

// Button
var closeBtn  = document.getElementById('close-btn');
closeBtn.addEventListener('click', function(e) {
  console.log('close');
  appWindow.close({force: 'true'}); 
}, false);

var maxBtn  = document.querySelector('#maximize-btn');
maxBtn.addEventListener('click', function(e) {
  appWindow.maximize();
}, false);

var minBtn  = document.querySelector('#minimize-btn');
minBtn.addEventListener('click', function(e) {
  appWindow.minimize();
}, false);

appWindow.show();
appWindow.focus();
