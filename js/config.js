(function () {
    'use strict';

    angular.module('ngFoursquareApp')
        .constant('appConfig', {
            api: {
                baseURL: 'https://api.foursquare.com/v2',
                clientId: 'NPEJ4W0IW5RCPHXKNTKR0HHTVGPZYXMDNWV44INSNLUXE4W1',
                clientSecret: 'SA3U5ITWR45QZML05FTDCJNZEOLQFAL1UXKPGFSPLZJPW52N',
                version: '20130815'
            }
        });
})();