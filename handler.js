function handler (app, appPath) {
    app.get('/*', (req, res) => {
        res.sendFile(path.join(appPath, 'index.html'));
      });      
    return app;
}

export default handler;