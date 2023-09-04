function myMiddleWare2(req, res, next) {
    console.log('I am a second custom middleware');
    next()
}

module.exports = myMiddleWare2