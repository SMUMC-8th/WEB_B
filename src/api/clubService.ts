import axios, { AxiosError } from 'axios';
import axiosInstance from './axios';
import { TClub, TClubResponse, TClubCategory } from '../types/club';

export const getClubsByCategory = async (category: TClubCategory): Promise<TClub[]> => {
    try {
        console.log(`Calling API: /clubs/category/${category}`); // API 호출 로그
        const response = await axiosInstance.get<TClubResponse>(`/clubs/category/${category}`);
        console.log('API Response:', response.data); // 응답 데이터 로그
        
        if (!response.data.isSuccess || !response.data.result) {
            throw new Error(response.data.message || 'API 요청에 실패했습니다.');
        }
        
        return response.data.result;
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error('API Error:', {
                message: error.message,
                response: error.response?.data,
                status: error.response?.status
            });
        }
        throw error;
    }
};

export const searchClubs = async (searchTerm: string): Promise<TClub[]> => {
    try {
        console.log(`Calling Search API with term: ${searchTerm}`); // API 호출 로그
        console.log('Request URL:', `/clubs/search?query=${encodeURIComponent(searchTerm)}`);
        
        const response = await axiosInstance.get<TClubResponse>(`/clubs/search`, {
            params: { query: searchTerm }
        });
        console.log('Search API Response:', response.data); // 응답 데이터 로그

        if (!response.data.isSuccess || !response.data.result) {
            console.error('API Error Response:', {
                isSuccess: response.data.isSuccess,
                code: response.data.code,
                message: response.data.message
            });
            throw new Error(response.data.message || '검색에 실패했습니다.');
        }

        return response.data.result;
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error('Search API Error Details:', {
                message: error.message,
                response: error.response?.data,
                status: error.response?.status,
                requestURL: error.config?.url,
                requestMethod: error.config?.method,
                requestParams: error.config?.params
            });
        }
        throw error;
    }
}; 