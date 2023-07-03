export default function authHeader() {
    const userStr = localStorage.getItem('user');
    if (userStr) {
        const user = JSON.parse(userStr);
        if (user.token) {
            return { Authorization: 'Bearer ' + user.token };
        }
        else {
            return {};
        }
    }
    else {
        return {};
    }
}