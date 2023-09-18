{
    const child_process = require('child_process');
    const getRunCommand = (location) => `node ${location}`;
    const runParallelCommand = (...commands) => commands.map(el => `start ${el}`).join(' && ');

    const serverLocation = './run-server';
    const viewLocation = './run-frontend';
    const exec = child_process.exec;
    const serverCommand = getRunCommand(serverLocation);
    const frontendCommande = getRunCommand(viewLocation);
    const appCommand = runParallelCommand(
        frontendCommande,
        serverCommand,
    );

    exec(appCommand);

}