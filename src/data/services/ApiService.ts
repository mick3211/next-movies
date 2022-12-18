const baseURL = 'https://api.themoviedb.org/3';

export const ApiService = {
    async _makeRequest<T>(
        path: string,
        query?: { [key: string]: string },
        method = 'GET',
        init?: RequestInit
    ): Promise<T> {
        const baseParams = new URLSearchParams({
            api_key: process.env.API_KEY as string,
            language: 'pt-BR',
        });

        for (let key in query) {
            baseParams.append(key, query[key]);
        }

        const res = await fetch(baseURL + path + '?' + baseParams.toString(), {
            ...init,
            method,
        });

        if (!res.ok) throw new Error(res.statusText);

        return (await res.json()) as Promise<T>;
    },

    async get<T>(
        path: string,
        query?: { [key: string]: string },
        init?: RequestInit
    ): Promise<T> {
        return this._makeRequest<T>(path, query, 'GET', init);
    },

    async post<T>(
        path: string,
        params?: { [key: string]: string }
    ): Promise<T> {
        return this._makeRequest<T>(path, params, 'POST');
    },
};
