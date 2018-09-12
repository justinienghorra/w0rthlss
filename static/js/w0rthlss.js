var app = angular.module("w0rthlssApp", ['ui.router', 'ngAnimate']);


app.config(function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
    $stateProvider
        .state('default', { url: '', templateUrl: 'static/views/home.html' })
        .state('about', { url: '/about', templateUrl: 'static/views/about.html' })
        .state('visuelvendredi', { url: '/visuelvendredi', templateUrl: 'static/views/visuelvendredi.html' })
        .state('circonstances', { url: '/circonstances', controller: 'PlaylistCtrl', templateUrl: 'static/views/template.html' })
        .state('lourdlundi', { url: '/lourdlundi', controller: 'PlaylistCtrl', templateUrl: 'static/views/template.html' })
        .state('macabremardi', { url: '/macabremardi', controller: 'PlaylistCtrl', templateUrl: 'static/views/template.html' })
        .state('meconnumercredi', { url: '/meconnumercredi', controller: 'PlaylistCtrl', templateUrl: 'static/views/template.html' })
        .state('joyeuxjeudi', { url: '/joyeuxjeudi', controller: 'PlaylistCtrl', templateUrl: 'static/views/template.html' })
        .state('sensuelsamedi', { url: '/sensuelsamedi', controller: 'PlaylistCtrl', templateUrl: 'static/views/template.html' })
        .state('douxdimanche', { url: '/douxdimanche', controller: 'PlaylistCtrl', templateUrl: 'static/views/template.html' });
    $urlRouterProvider.otherwise('default');

    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        'https://w.soundcloud.com/**', 'https://www.youtube-nocookie.com/**', 'https://open.spotify.com/**'
    ]);
});

app.controller('MainController', function ($http, $scope) {
    $scope.playlists = false;
    $scope.ShowHidePlaylists = () => { $scope.playlists = $scope.playlists ? false : true; }

    $scope.platform = 3;
    $scope.Youtube = () => { $scope.platform = 1; }
    $scope.Soundcloud = () => { $scope.platform = 2; }
    $scope.Spotify = () => { $scope.platform = 3; }

    $http.get('static/js/data.json').then((res) => {
        $scope.data = res.data;
    });
});

app.controller('PlaylistCtrl', function ($scope, $location) {
    $scope.title = $scope.data[$location.path()].title;
    $scope.summary = $scope.data[$location.path()].summary;
    $scope.spotifyLink = $scope.data[$location.path()].spotifyLink;
    $scope.youtubeLink = $scope.data[$location.path()].youtubeLink;
    $scope.soundcloudLink = $scope.data[$location.path()].soundcloudLink;
});

(function ($) {
    $(function () {
        $('.sidenav').sidenav();
    });
})(jQuery);
