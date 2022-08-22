import { SearchResponse, SearchParams } from './database';

export const search = async (params: SearchParams): Promise<SearchResponse> => {
    const urlParams = {
        ...params as Record<string, string>,
        token: import.meta.env.VITE_DISCONG_USER_TOKEN,
    };
    const response = await fetch('https://api.discogs.com/database/search?' + new URLSearchParams(urlParams).toString());
    const data = await response.json();
    console.log(data as SearchResponse)
    return data;
}