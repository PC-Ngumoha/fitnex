import { create } from 'zustand';


const BASE_URL = "http://127.0.0.1:8000"

type Urls = {
    register: string;
    login: string;
};



export const Auth: Urls = {
    register: `${BASE_URL}/account/register`,
    login: `${BASE_URL}/account/login`,
};

export const Profile = {
    me: `${BASE_URL}/account/me`,
}

type EndpointUrls = {
    list: string;
};

export const Exercise: EndpointUrls & { logs: string } = {
    list: `${BASE_URL}/exercise/exercises`,
    logs: `${BASE_URL}/exercise/logs`,
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
