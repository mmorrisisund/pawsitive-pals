import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import AuthProvider from '../context/authContext'
import AppShell from './AppShell'

const client = new QueryClient()
const Home = lazy(() => import('../pages/Home'))

const App = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <Router>
      <QueryClientProvider client={client}>
        <AuthProvider>
          <AppShell>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </AppShell>
        </AuthProvider>
      </QueryClientProvider>
    </Router>
  </Suspense>
)

export default App
