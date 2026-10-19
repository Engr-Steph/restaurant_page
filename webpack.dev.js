
import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {
    mode: "development",

    devtool: "eval-source-map",

    devServer: {
        static: {
            directory: "./dist",
        },
        watchFiles: ["./src/template.html"],
        port: 8080,
        open: true,
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
});
