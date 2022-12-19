import { graphql } from '../type';

export const GetAssets = graphql(`
  query GetAssets {
    assets {
      id
      width
      height
      handle
    } 
  }
`);


 