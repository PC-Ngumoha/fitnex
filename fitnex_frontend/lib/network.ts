

const BASE_URL = "http://127.0.0.1:8000"

type Urls = {
    register: string;
    login: string;
};

export const Auth: Urls = {
    register: `${BASE_URL}/account/register`,
    login: `${BASE_URL}/account/login`,
};

type EndpointUrls = {
    list: string;
};

export const Exercise: EndpointUrls = {
    list: `${BASE_URL}/exercise/exercises`,
};

export const BodyParts: EndpointUrls = {
    list: `${BASE_URL}/exercise/body-parts`,
};

export const Targets: EndpointUrls = {
    list: `${BASE_URL}/exercise/targets`,
};

export const Equipments: EndpointUrls = {
    list: `${BASE_URL}/exercise/equipments`,
};
