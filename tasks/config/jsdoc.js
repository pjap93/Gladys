/**
 * Generate JS documentation
 */
module.exports = function(grunt) {

    grunt.config.set('documentation', {
		jsdoc: {
			files: [{
                expand: true,
				src: ['api/core', "api/models"],
            }],
            options: {
                name: 'Gladys',
                version: '3.8.0',
                destination: 'docs',
                access: ['public'],
                theme: 'node_modules/documentation-flat-theme',
                order: [
                    'Alarm',
                    'gladys.alarm.create',
                    'gladys.alarm.update',
                    'gladys.alarm.delete',
                    'gladys.alarm.get',
                    'Area',
                    'gladys.area.create',
                    'gladys.area.update',
                    'gladys.area.delete',
                    'gladys.area.get',
                    'Box',
                    'gladys.box.create',
                    'gladys.box.update',
                    'gladys.box.delete',
                    'gladys.box.getBoxUser',
                    'gladys.box.getById',
                    'BoxType',
                    'gladys.boxType.create',
                    'gladys.boxType.update',
                    'gladys.boxType.delete',
                    'gladys.boxType.getAll',
                    'Calendar',
                    'gladys.calendar.create',
                    'gladys.calendar.update',
                    'gladys.calendar.delete',
                    'gladys.calendar.get',
                    'gladys.calendar.getByService',
                    'CalendarEvent',
                    'gladys.calendar.createEvent',
                    'gladys.calendar.updateEvent',
                    'gladys.calendar.deleteEvent',
                    'gladys.calendar.getEvents',
                    'gladys.calendar.getFirstEventTodayUser',
                    'gladys.calendar.getNextEventUser',
                    'Device',
                    'gladys.device.create',
                    'gladys.device.update',
                    'gladys.device.delete',
                    'gladys.device.get',
                    'gladys.device.getByIdentifier',
                    'gladys.device.getByService',
                    'DeviceState',
                    'gladys.deviceState.create',
                    'gladys.deviceState.createByDeviceTypeIdentifier',
                    'gladys.deviceState.get',
                    'gladys.deviceState.purge',
                    'DeviceType',
                    'gladys.deviceType.create',
                    'gladys.deviceType.delete',
                    'gladys.deviceType.getAll',
                    'gladys.deviceType.getById',
                    'gladys.deviceType.getByIdentifier',
                    'gladys.deviceType.getByType',
                    'gladys.deviceType.getByDevice',
                    'gladys.deviceType.getByRoom',
                    'Event',
                    'gladys.event.create',
                    'gladys.event.get',
                    'EventType',
                    'gladys.eventType.create',
                    'gladys.eventType.get',
                    'gladys.eventType.getByCategory',
                    'gladys.eventType.getByCode',
                    'House',
                    'gladys.house.create',
                    'gladys.house.update',
                    'gladys.house.delete',
                    'gladys.house.get',
                    'gladys.house.getById',
                    'gladys.house.getUsers',
                    'gladys.house.checkUserPresence',
                    'Location',
                    'gladys.location.create',
                    'gladys.location.get',
                    'gladys.location.getByUser',
                    'Machine',
                    'gladys.machine.create',
                    'gladys.machine.update',
                    'gladys.machine.delete',
                    'gladys.machine.get',
                    'gladys.message.send',
                    'Mode',
                    'gladys.mode.create',
                    'gladys.mode.change',
                    'gladys.mode.delete',
                    'gladys.mode.get',
                    'Music',
                    'gladys.music.play',
                    'gladys.music.pause',
                    'gladys.music.stop',
                    'gladys.music.next',
                    'gladys.music.previous',
                    'gladys.music.setMuted',
                    'Notification',
                    'gladys.notification.create',
                    'gladys.notification.install',
                    'gladys.notification.get',
                    'Param',
                    'gladys.param.setValue',
                    'gladys.param.delete',
                    'gladys.param.get',
                    'gladys.param.getValue',
                    'gladys.param.getValues',
                    'ParamUser',
                    'gladys.paramUser.setValue',
                    'gladys.paramUser.delete',
                    'gladys.paramUser.get',
                    'gladys.paramUser.getValue',
                    'Room',
                    'gladys.room.create',
                    'gladys.room.update',
                    'gladys.room.delete',
                    'gladys.room.get',
                    'Weather',
                    'gladys.weather.get'
                ]
            }
		}
    });

	grunt.loadNpmTasks('grunt-documentation');
};