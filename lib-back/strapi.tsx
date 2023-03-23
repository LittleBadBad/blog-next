import { createStrapiClient } from "strapi-common-api";
import { globalConfig } from "@lib-back/globalConfig";

// Set up Portable Text serialization
const { strapiClient, collection, single, auth } = createStrapiClient("http://localhost:1337/api");
strapiClient.interceptors.request.use((config) => {
  config.headers["authorization"] = `Bearer ${globalConfig.apiToken}`;
  return config;
});


export { strapiClient, collection, single, auth };
