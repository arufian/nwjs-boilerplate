var gui = require('nw.gui');
var appWindow = gui.Window.get();

// Menu
var nativeMenuBar = new gui.Menu({ type: "menubar" });
nativeMenuBar.createMacBuiltin("My App");
appWindow.menu = nativeMenuBar;

// Button
var buttons = document.querySelector('.buttons');
var buttonsLabel = document.querySelector('.buttons-label');
var hoverIn = function(e) {
  buttonsLabel.style.visibility = 'visible';
}
var hoverOut = function(e) {
  buttonsLabel.style.visibility = 'hidden';
}

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
