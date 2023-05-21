/**
 * Return item from local storage of a given key
 * @param {string} key
 */
const getItem = (key: string) => {
    const data: any = typeof window !== 'undefined' ? localStorage.getItem(key) : '';

    try {
        return JSON.parse(data);
    } catch (err) {
        return data;
    }
};

/**
 * Set item in local storage of a given key and value
 * @param {string} key
 * @param {any} value
 */
const setItem = (key: string, value: any) => {
    const stringify = typeof value !== 'string' ? JSON.stringify(value) : value;
    return localStorage.setItem(key, stringify);
};

/**
 * Remove item from local storage of given key
 * @param {string} key
 */
const removeItem = (key: string) => {
    localStorage.removeItem(key);
};

export { getItem, setItem, removeItem };
