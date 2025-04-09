import { nicheBase, nicheFront, nichePrettier } from '@schibsted/niche-eslint-config';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
    ...nicheBase,
    ...nicheFront,
    ...eslintPluginAstro.configs['flat/recommended'],
    ...nichePrettier,
    {
        ignores: ['dist', 'node_modules', '.astro', 'src/env.d.ts'],
    },
    {
        settings: {
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx', '.mjs'],
                'astro-eslint-parser': ['.astro'],
            },
            'import/resolver': {
                node: {
                    extensions: ['.js', '.ts', '.mjs', '.astro'],
                },
                typescript: {
                    project: './tsconfig.json',
                },
            },
        },
    },
    {
        rules: {
            'import/extensions': 'off',
            'import/no-unresolved': [
                'error',
                {
                    ignore: ['astro:content', 'astro:assets'],
                },
            ],
        },
    },
];
