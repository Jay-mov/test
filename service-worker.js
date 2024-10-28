self.addEventListener('push', function(event) {
    const options = {
      body: event.data ? event.data.text() : 'Default notification body',
      icon: 'icon.png', // optional icon
    };
  
    event.waitUntil(
      self.registration.showNotification('Push Notification', options)
    );
  });
  