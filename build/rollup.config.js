import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

const output = [
    { format: 'cjs', suffix: '.cjs' },
    { format: 'amd', suffix: '.amd' },
    { format: 'es', suffix: '' },
    { format: 'umd', suffix: '.umd' }
].map((config) => {
    return {
        exports: 'named',
        file: `lib/kanta${config.suffix}.js`,
        format: config.format,
        name: 'Kanta',
        sourceMap: true,
        globals: {
            'tipu': 'tipu'
        }
    };
});

const plugins = [
    commonjs({
        exclude: 'node_modules/process-es6/**',
        include: [
        ],
        namedExports: {
            'node_modules/tipu/lib/tipu.js': ['tipu']
        }
    }),
    resolve({
        browser: true,
        jsnext: true,
        main: true,
        module: true
    }),
    typescript({
        tsconfig: 'tsconfig.json',
        useTsconfigDeclarationDir: true
    }),
]

export default {
    external: [
        'tipu'
    ],
    input: './src/index.ts',
    output,
    plugins
}