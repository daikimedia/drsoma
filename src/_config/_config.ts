/* eslint-disable @typescript-eslint/no-explicit-any */
import * as devConfig from "./config.dev.json";
import * as prodConfig from "./config.prod.json";
import * as testConfig from "./config.testing.json";

interface Config {
  pre: string;
  apiUrls: any;
  appUrls: any;
  pagination?: any;
  flag_url?: string;
  hidePostalCode?: boolean;
}

let config: Config;

switch (process.env.NODE_ENV) {
  case "development":
    config = devConfig;
    break;
  case "test":
    config = testConfig;
    break;
  case "production":
    config = prodConfig;
    break;
  default:
    config = devConfig;
    break;
}

config = {
  ...config,
  pagination: {
    options: [5, 25, 50, 100],
    limit: 25,
    offset: 0,
  },
  flag_url: "https://nexub.sgp1.digitaloceanspaces.com/flags/<CountryID>.png",
  hidePostalCode: true,
};

export default config;
