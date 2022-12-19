import request from "graphql-request";
import { GetAssets } from "../src/gql/query";

export const getAssets = async () => {
  const result = await request('https://api-ap-northeast-1.hygraph.com/v2/clbuei9082mso01uk6isn4cci/master', GetAssets);
  return result.assets;
};
