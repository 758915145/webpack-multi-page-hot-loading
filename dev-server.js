var config = require("./webpack.config.js");
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

for (var i in config.entry) {
    config.entry[i].unshift('webpack-dev-server/client?http://localhost:8080/', "webpack/hot/dev-server")
}

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    inline:true,
    hot:true,
    contentBase:"dist/",
    publicPath: config.output.publicPath,
});
server.listen(8080);