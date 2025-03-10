import Feed from "../pages/feed";
import Login from "../pages/login";
import Logout from "../pages/logout";
import Notifications from "../pages/notifications";
import Settings from "../pages/settings";
import SingleBlue from "../pages/singleblue";
import User from "../pages/user";
import Auth from "./Auth";

const Routes = [
    {
        path: '/login',
        element: <Login />
    }, {
        path: '/',
        element: <Auth><Feed /></Auth>
    }, {
        path: '/blue/:repo/:cid',
        element: <Auth><SingleBlue /></Auth>
    }, {
        path: '/user/:did',
        element: <Auth><User /></Auth>
    }, {
        path: '/notifications',
        element: <Auth><Notifications /></Auth>
    }, {
    }, {
        path: '/settings',
        element: <Auth><Settings /></Auth>
    }, {
        path: '/logout',
        element: <Logout />
    }
]

export default Routes;