var nw = require('nw.gui');
var win = nw.Window.get();
win.isMaximized = false;




document.getElementById('windowControlMinimize').onclick = function() {
    win.minimize();
  };

  document.getElementById('windowControlClose').onclick = function() {
    win.close();
  };

  document.getElementById('windowControlMaximize').onclick = function() {
      if (win.isMaximized) {
        win.unmaximize();
      } else {
        win.maximize();
      }
  };

  win.on('maximize', function() {
    win.isMaximized = true;
  });

  win.on('unmaximize', function() {
    win.isMaximized = false;
  });