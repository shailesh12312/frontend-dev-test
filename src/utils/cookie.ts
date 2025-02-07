const Cookie = {
    set : (name: string, value: string, days?: number) => {
        if (typeof document !== 'undefined') {
            let expires = '';
            if (days) {
                const date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = `; expires=${date.toUTCString()}`;
            }
            document.cookie = `${name}=${value || ''}${expires}; path=/`;
        }
    },
    get : (name: string) => {
        if (typeof document !== 'undefined') {
            const nameEQ = `${name}=`;
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }
        return "";
    },
    delete: (name: string) => {
        if (typeof document !== 'undefined') {
            document.cookie = `${name}=; Max-Age=0; path=/`;
        }
    }
}
export default Cookie;