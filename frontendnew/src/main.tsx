import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { App } from './App.tsx'
import DataContextProvider from './utilities/DataContextProvider.tsx'

import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider defaultColorScheme="dark">
            <Notifications position="top-center" />
            <BrowserRouter>
                <DataContextProvider>
                    <App />
                </DataContextProvider>
            </BrowserRouter>
        </MantineProvider>
    </StrictMode>,
)