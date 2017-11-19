module.exports = update;

var Promise = require('bluebird');

function update(devicetype) {
    var id = devicetype.id;
    delete devicetype.id;

    // update the devicetype
    return DeviceType.update({
            id: id
        }, devicetype)
        .then(function(devicestypes) {

            if (devicestypes.length === 0) {
                return Promise.reject(new Error('Device not found'));
            }

            return Promise.resolve(devicestypes[0]);
        });
}