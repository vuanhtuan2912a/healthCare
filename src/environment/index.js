const domain = 'http://localhost:3000';

const API_VERSION = 'v1';

const API_BE_URI = `${domain}/api/doctor/${API_VERSION}`;

const api = {
  imageEndpoint: domain,
};

export { API_BE_URI, api, domain, API_VERSION };
