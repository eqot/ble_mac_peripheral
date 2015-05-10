var bleno = require('bleno');

var name = 'Dummy ANCS';
var serviceUuids = ['7905f431b5ce4e99a40f4b1e122d00d0']

bleno.startAdvertising(name, serviceUuids);
