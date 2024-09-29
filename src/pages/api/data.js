// import { NextResponse } from 'next/server';
import cron from 'node-cron';

export default async function handler(req, res) {

    try {

        cron.schedule('*/20 * * * *', async () => {

            console.log('')
            console.log('######################################')
            console.log('#                                    #')
            console.log('# Running scheduler every 20 minutes #')
            console.log('#                                    #')
            console.log('######################################')
            console.log('')

            // Perform your action here
        });

        return res.json({ data: 'Success', status: 200 });

    } catch (error) {
        console.log(error)
        return res.json({ error: error }, { status: 500 })
    }

}