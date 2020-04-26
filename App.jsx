const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM



import { Home } from './Apps/pages/Home.jsx'
import {Email} from './Apps/MisterEmail/pages/EmailApp.jsx'
import {Keep} from './Apps/MisterKeep/pages/Keep.jsx'



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
                        <Route component={Email} path="/memail" />
                        {/* <Route component={About} path="/baout" /> */}
                        {/* <Route component={Books} path="/mbooks" /> */}
                        <Route component={Keep} path="/mkeep" />
                    </main>

               
            </Router>
        )
    }
}

