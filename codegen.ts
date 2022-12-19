import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.HYGRAPH_API_KEY,
  documents: ['src/**/*.{tsx,ts,gql}'],
  generates: {
    './src/type/': {
      preset: 'client',
      plugins: [],
    },
  },
};
export default config;
