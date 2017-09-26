
module.exports = function(params){
    
    if(!params.hasOwnProperty('room_id') || !params.hasOwnProperty('duration') || !params.hasOwnProperty('end_percentage')) {
        return Promise.reject(new Error('Gladys : room : progresseLights : Missing parameters. Need room_id, duration and end_percentage'))
    }

    return gladys.deviceType.getByCategory({category: 'light', type: 'brightness', room: params.room_id})
        .then((deviceTypes) => {
            
            deviceTypes.forEach((dt) => {
                
                if(dt.lastValue === null){
                    sails.log.warn(`Gladys : room : progresseLights : Warning, deviceType ${dt.id} has no last known value`);
                    return ;
                }

                var percentageDiff = (dt.lastValue - params.end_percentage);

                if(percentageDiff === 0){
                    sails.log.warn(`Gladys : room : progresseLights : Warning, deviceType ${dt.id} is already at desired state.`);
                    return ;
                }

                var interval = Math.abs(params.duration/percentageDiff);

                // step is either positive or negative
                var percentageStep = (percentageDiff > 0) ? -1 : 1;

                console.log(percentageDiff);
                console.log(interval);
                console.log(percentageStep);
                
                // we don't want shorter than 1s interval
                if(interval < 1) {
                    percentageStep = percentageStep*(1/interval);
                    interval = 1;
                }

                var task = {
                    device_type_id: dt.id,
                    current_percentage: dt.lastValue,
                    end_percentage: params.end_percentage,
                    interval: interval,
                    percentageDiff: percentageDiff,
                    percentageStep: percentageStep
                };

                setTimeout(function(){
                    startTask(task);
                }, interval*1000);

                sails.log.debug(`Gladys : room : progressiveLights : Scheduled lights progressive change. Dt = ${dt.id}, interval = ${interval}, percentageStep = ${percentageStep}`);
            });

        });
};

function startTask(task){

    var next_percentage = Math.round(task.current_percentage + task.percentageStep);

    // if next_percentage is more/less than expected
    if( (task.percentageStep > 0 && next_percentage > task.end_percentage) ||
        (task.percentageStep < 0 && next_percentage < task.end_percentage)) {
        next_percentage = task.end_percentage;
    }

    sails.log.debug(`Gladys : room : progressiveLights : Starting task, dt = ${task.device_type_id}, current_percentage = ${task.current_percentage}, next_percentage = ${next_percentage} `);

    return gladys.deviceType.exec({devicetype: task.device_type_id, value: next_percentage})
        .then((deviceState) => {

            task.current_percentage = deviceState.value;

            if(next_percentage != task.end_percentage) {
                setTimeout(function(){
                    startTask(task);
                }, task.interval*1000);
            }
        });
}