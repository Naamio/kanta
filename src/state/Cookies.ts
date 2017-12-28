/**
 * Management object for the application cookies.
 */
class Cookies {
    /**
     * Sets a cookie by a given key and value.
     * 
     * @param key - Identity of the cookie to be set.
     * @param value - Value of the cookie to be set.
     */
    public static setByKey(key: string, value: string) {
        document.cookie = `${key}=${value}`;
    }

    /**
     * Gets a cookie by a given key.
     * 
     * @param key - Identity of the cookie to be retrieved. 
     */
    public static getByKey(key: string): string {
        // Hey, we all hate RegEx, but sometimes the world needs its magic.
        let cookieQueryExpression = new RegExp(`(?:(?:^|.*;\\s*)${key}\\s*\\=\\s*([^;]*).*$)|^.*$`);

        let value = document.cookie.replace(cookieQueryExpression, "$1");

        return value;
    }
}

export default Cookies;