
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:9000/graphql",
  documents: "graphql/**/*.graphql",
  generates: {
    "__generated__/": {
      preset: "client",
      plugins: ["typescript-urql"]
    }
  }
};

export default config;
