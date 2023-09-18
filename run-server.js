{
    console.log('hi');
    const child_process = require('child_process');

    const httpdLocation = './chat-web-socket/';
    const exec = child_process.exec;

    exec(`cd ${httpdLocation} && npm start`, () => console.log('hi'));
}