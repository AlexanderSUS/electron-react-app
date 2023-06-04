// const { ipcRenderer, contextBridge } = require('electron');

// contextBridge.exposeInIsolatedWorld('electron', {
//   notificationApi: {
//     sendNotification: (message) => {
//       console.log('message', message);
//       ipcRenderer.send('notify', message);
//     }
//   }
// })