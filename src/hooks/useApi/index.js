// import { useState } from 'react';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://covid-19-data.p.rapidapi.com/',
  timeout: 1000,
  headers: {
    'content-type': 'application/octet-stream',
    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'useQueryString': true,
  },
});

export default {
  getTotals: async (query) => {
    try {
      const request = await axiosInstance.get('/totals');
      return request.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  getCountry: async (query) => {
    try {
      const request = await axiosInstance.get(`/country`, { params: { name: query?.name || 'spain' } });
      return request.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  getAllCountries: async (query) => {
    try {
      const request = await axiosInstance.get('/country/all');
      return request.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  getByCountryCode: async (query) => {
    try {
      const request = await axiosInstance.get(`/country/code`, { params: { code: query?.code || 'es' } });
      return request.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  getReportAllCountries: async (query) => {
    try {
      const request = await axiosInstance.get('/report/country/all');
      return request.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  getReportCountryByCode: async (query) => {
    const date = new Date();
    try {
      const request = await axiosInstance.get('/report/country/code', {
        params: {
          name: query?.code || 'es',
          date: query?.date || `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        },
      });
      return request.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  getReportCountryByName: async (query) => {
    const date = new Date();
    try {
      const request = await axiosInstance.get('/report/country/name', {
        params: {
          name: query?.name || 'spain',
          date: query?.date || `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        },
      });
      return request.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  getReportTotals: async (query) => {
    try {
      const request = await axiosInstance.get('/totals');
      return request.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  getCountriesList: async (query) => {
    try {
      const request = await axiosInstance.get('/help/countries');
      return request.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
