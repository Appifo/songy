/**
   * Return formated data against given key as string
   * @param {string} key
   */
export const getItem = (key: string): string | any => {
    const data: string | null = typeof window !== 'undefined' ? localStorage.getItem(key) : '';
    try {
        return JSON.parse(data!);
    } catch (err) {
        return data!;
    }
};

/**
   * Return formated date against given key, value as strings
   * @param {string} key
   * @param {string} value
   */
export const setItem = (key: string, value: string): any => {
    const stringify = typeof value !== 'string' ? JSON.stringify(value) : value;
    return localStorage.setItem(key, stringify);
};

/**
   * Remove storage data against given key as string
   * @param {string} key
   */
export const removeItem = (key: string) => {
    localStorage.removeItem(key);
};
