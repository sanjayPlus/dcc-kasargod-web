self.addEventListener('notificationclick', function (event) {
    event.notification.close(); // Close the notification

    // Open the specified URL or a default URL
    const urlToOpen = event.notification.data.url || '/';
    event.waitUntil(
        clients.matchAll({
            type: 'window',
        })
            .then(function (windowClients) {
                for (let i = 0; i < windowClients.length; i++) {
                    const client = windowClients[i];
                    if ('focus' in client) {
                        return client.navigate(urlToOpen).then(client => client.focus());
                    }
                }
                if (clients.openWindow) {
                    return clients.openWindow(urlToOpen);
                }
            })
    );
});
