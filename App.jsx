const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM



import { Home } from './Apps/pages/Home.jsx'
import { Email } from './Apps/misterEmail/pages/EmailApp.jsx'
import { Keep } from './Apps/misterKeep/pages/Keep.jsx'
import EmailDetails from './Apps/misterEmail/pages/EmailDetails.jsx'
import ComposeEmail from './Apps/misterEmail/cmps/ComposeEmail.jsx'



export class App extends React.Component {




    render() {
        return (
            <Router>
                <header >
                    <h1>Appsus</h1>
                    <ul className="nav-bar">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/mbooks'>Books</Link></li>
                        <li><Link to='/memail'>Email</Link></li>
                        <li><Link to='/mkeep'>Keep</Link></li>

                    </ul>
                </header>
                <main>
                    <Route exact component={Home} path="/" />
                    <Switch>
                        <Route component={ComposeEmail} path="/memail/compose" />
                        <Route component={EmailDetails} path="/memail/:theEmailId" />
                        <Route component={Email} path="/memail" />
                    </Switch>

                    <Route component={Keep} path="/mkeep" />
                </main>


            </Router>
        )
    }
}

