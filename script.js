if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.register('service-worker.js')
      .then(function(registration) {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(function(error) {
        console.error('Service Worker registration failed:', error);
      });
  
    document.getElementById('notifyBtn').addEventListener('click', function() {
      // Request notification permission
      Notification.requestPermission().then(function(permission) {
        if (permission === 'granted') {
          sendNotification();
        }
      });
    });
  }
  
  function sendNotification() {
    navigator.serviceWorker.ready.then(function(registration) {
      registration.showNotification('Hello!', {
        body: 'This is a notification from your website.',
        icon: 'icon.png', // optional icon
      });
    });
  }
  