import axios from 'axios';

export const client = axios.create({
    baseURL: 'https://geo.ipify.org/api/v2/country,city?',
    params: {
        apiKey:"at_6Ew9bBFZfU5khd8IKOvOTARMLhzdP",
    }
});

