import { CronJob } from "cron";

export class Server {
    
    static start() {

        const job = new CronJob(
            '*/2 * * * * *', // cronTime
            () => {
                const date = new Date();
                console.log('You will see this message every 2 seconds ',date);
            }, // onTick
            null, // onComplete
            true, // start
            'America/Los_Angeles' // timeZone
        );
        job.start();

    }
}