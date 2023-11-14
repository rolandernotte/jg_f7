document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    // on initialise Framework 7
    var f7App = new Framework7({
        el: '#app',
        routes: [
            {
                name: 'findUs',
                path: '/findUs',
                url: './pages/findUs.html'
            }
        ]
    });

    // on initialise la vue principale
    var mainView = f7App.views.create('.view-main');
}
