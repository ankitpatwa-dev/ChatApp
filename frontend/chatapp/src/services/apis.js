
import authService from "./authService";
import urls from "./apiRoutes";
const api = authService.setToken();

const getPeople = () => {
    return api.get(urls.people)
} 

export {getPeople};