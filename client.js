// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const buttonsPanel = new Surface(400, 400, Surface.SurfaceShape.Flat);

 
  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('ConnectedButtonInfoPanel', { /* initial props */ }),
    buttonsPanel
  );

  buttonsPanel.setAngle(
    -0.6, //negative mean left
    0.1   //positive is top negative bottom
  )

  const infoPanel = new Surface(400, 400, Surface.SurfaceShape.Flat);

  r360.renderToSurface(
    r360.createRoot('ConnectedHouseInfoPanel', { /* initial props */ }),
    infoPanel
  );

  infoPanel.setAngle(
    0.6,
    0.1
  )

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_front_door.jpg'));
}

window.React360 = {init};
