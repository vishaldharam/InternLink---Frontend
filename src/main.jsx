import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { AuthContextProvider } from './context/authContext.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'

createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </AuthContextProvider>
)
