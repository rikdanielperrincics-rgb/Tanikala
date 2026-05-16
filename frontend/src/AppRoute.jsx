import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'
import App from './App'

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Login" element={<Login />} />
                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute
