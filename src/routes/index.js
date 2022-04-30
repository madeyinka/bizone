import { useRoutes } from 'react-router-dom'
import AuthenticatedRoutes from './middlewares/Authentication'
import DashboardRoute from './middlewares/Dashboard'
import HomeComponent from '../containers/Pages/Landing/Home'
import LoginComponent from '../containers/Auth/Login'
import ResetPasswordComponent from '../containers/Auth/Reset'
import UpdatePasswordComponent from '../containers/Auth/Update'
import DashboardComponent from '../containers/Pages/Dashboard'
import UserProfileComponent from '../containers/Pages/Dashboard/UserProfile'
import UpdateProfileComponent from '../containers/Pages/Dashboard/UpdateProfile'
import AddClientComponent from '../containers/Pages/Dashboard/Clients/AddClient'
import ClientsComponent from '../containers/Pages/Dashboard/Clients/Clients'
import AddStaticComponent from '../containers/Pages/Dashboard/Static/AddStatic'
import StaticComponent from '../containers/Pages/Dashboard/Static/Static'
import AddContentComponent from '../containers/Pages/Dashboard/Content/AddContent'
import ContentsComponent from '../containers/Pages/Dashboard/Content/Content'
import AddServiceComponent from '../containers/Pages/Dashboard/Services/AddService'
import ServicesComponent from '../containers/Pages/Dashboard/Services/Services'
import UpdateBlockComponent from '../containers/Pages/Dashboard/Static/Update'
import UpdateClientComponent from '../containers/Pages/Dashboard/Clients/Update'
import AttributesComponent from '../containers/Pages/Dashboard/Content/Attributes'
import UpdateContentComponent from '../containers/Pages/Dashboard/Content/Update'
import ContactComponent from '../containers/Pages/Dashboard/Contact'
import GroupComponent from '../containers/Pages/Dashboard/Services/Groups'
import UpdateServiceComponent from '../containers/Pages/Dashboard/Services/Update'


const AppRoutes = () => {

    const route = useRoutes([
        {
            path: '/',
            element:<HomeComponent />
        },
        {
            path: 'auth/login',
            element:<LoginComponent />
        },
        {
            path: 'auth/reset-password',
            element:<ResetPasswordComponent />
        },
        {
            path: 'auth/update-password/:identity/:key',
            element:<UpdatePasswordComponent />
        },
        {

        },
        {
            path: 'dashboard',  //wraps header, navigation and outlet components
            element:<AuthenticatedRoutes><DashboardComponent /></AuthenticatedRoutes>, //must be authenticated
            children: [
                {
                    path:'index',
                    element:<DashboardRoute /> 
                },
                {
                    path:'profile',
                    element:<UserProfileComponent />,
                },
                {
                    path:'update-profile',
                    element:<UpdateProfileComponent />,
                },
                {
                    path:'client/add-new',
                    element:<AddClientComponent />
                },
                {
                    path:'client/all-clients',
                    element:<ClientsComponent />
                },
                {
                    path:'client/edit/:identity',
                    element:<UpdateClientComponent />
                },
                {
                    path:'static/create',
                    element:<AddStaticComponent />
                },
                {
                    path:'static/view',
                    element:<StaticComponent />
                },
                {
                    path:'static/edit/:identity',
                    element:<UpdateBlockComponent />
                },
                {
                    path:'content/create',
                    element:<AddContentComponent />
                },
                {
                    path:'content/view',
                    element:<ContentsComponent />
                },
                {
                    path:'content/edit/:identity',
                    element:<UpdateContentComponent />
                },
                {
                    path:'content/attributes',
                    element:<AttributesComponent />
                },
                {
                    path:'service/create',
                    element:<AddServiceComponent />
                },
                {
                    path:'service/view',
                    element:<ServicesComponent />
                },
                {
                    path:'service/edit/:identity',
                    element:<UpdateServiceComponent />
                },
                {
                    path:'service/group',
                    element:<GroupComponent />
                },
                {
                    path:'contact',
                    element:<ContactComponent />
                }
            ]
        }
    ])
    return route
}

export default AppRoutes