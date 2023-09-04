function myMiddleWare(req, res, next) {
    console.log("I am a Custom Middleware");
    next()
}

module.exports = myMiddleWare