const publicIp = require('public-ip');
const axios = require('axios');
const config = require('./config.json');

let currentIp = null;

async function sendWebhook(ip) {
    try {
        const res = await axios.post(config.webhookUrl, {
            embeds: [
                {
                    title: 'Server IP address has changed',
                    description: `New IP: ${ip}`,
                    color: 16711680,
                    footer: {
                        text: `IP Updater - ${new Date().toLocaleString()}`,
                    },
                },
            ],
        });
        console.log(`Webhook sent: ${res.status} - ${res.statusText}`);
    } catch (error) {
        console.error(`Error sending webhook: ${error}`);
    }
}

async function checkIp() {
    try {
        const ip = await publicIp.v4();
        if (ip !== currentIp) {
            console.log(`Server IP address has changed. New IP: ${ip}`);
            currentIp = ip;
            sendWebhook(ip);
        } else {
            console.log(`Server IP address is still ${ip}`);
        }
    } catch (error) {
        console.error(`Error getting IP address: ${error}`);
    }
}

checkIp();

setInterval(checkIp, config.interval);
