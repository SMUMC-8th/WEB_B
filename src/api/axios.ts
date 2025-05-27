import axios from 'axios';

// proxy 설정을 사용하므로 전체 URL이 아닌 경로만 사용
const BASE_URL = '/';

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

// 요청 인터셉터 추가
axiosInstance.interceptors.request.use(
    (config) => {
        console.log('🚀 Request:', {
            url: `${config.baseURL}${config.url}`,
            method: config.method,
            headers: config.headers,
            data: config.data
        });
        return config;
    },
    (error) => {
        console.error('❌ Request Error:', error);
        return Promise.reject(error);
    }
);

// 응답 인터셉터 추가
axiosInstance.interceptors.response.use(
    (response) => {
        console.log('✅ Response:', {
            status: response.status,
            data: response.data,
            headers: response.headers
        });
        return response;
    },
    (error) => {
        if (error.code === 'ERR_NETWORK') {
            console.error('❌ Network Error: 서버에 연결할 수 없습니다. 서버가 실행 중인지 확인해주세요.');
            console.error('서버 URL:', BASE_URL);
        } else if (error.response) {
            console.error('❌ Response Error:', {
                status: error.response.status,
                data: error.response.data,
                headers: error.response.headers
            });
        } else if (error.request) {
            console.error('❌ Request Error: 응답을 받지 못했습니다.', error.request);
        } else {
            console.error('❌ Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance; 