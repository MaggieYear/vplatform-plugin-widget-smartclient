import babel from "rollup-plugin-babel";
import {
    terser
} from 'rollup-plugin-terser';
export default {
    input: './src/JGRadioGroup.js',
    output: {
        file: './dist/index.js',
        format: 'umd',
        sourcemap: false
    },
    plugins: [babel({
        runtimeHelpers: true
    }), terser()]
};