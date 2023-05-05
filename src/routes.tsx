import {BrowserRouter, Routes as RouterRoutes, Route} from 'react-router-dom'
import App from './App'
import Weather from './Components/weather'
const Router = () =>{
    return(
        <BrowserRouter>
            <RouterRoutes>
            <Route path={'/'} element={<App />}/>
            <Route path={'/communication'} element={<App />}/>
            <Route path={'/weather'} element={<Weather />}/>
            </RouterRoutes>
        </BrowserRouter>
    )
}

export default Router