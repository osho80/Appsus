const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM


import { Home } from './Apps/pages/Home.jsx'
import {Email} from './Apps/MisterEmail/pages/Email.jsx'
import {Keep} from './Apps/MisterKeep/pages/Keep.jsx'



export class App extends React.Component {




    render() {
        return (
            <Router>
                    <header>
                        <h1>Appsus</h1>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/mbooks'>Books</Link></li>
                            <li><Link to='/memail/inbox'>Email</Link></li>
                            <li><Link to='/mkeep'>Keep</Link></li>
                            
                        </ul>  
                    </header>
                    <main>
                        <Route component={Home} path="/" />
                        <Route component={Email} path="/memail/inbox" />
                        {/* <Route component={About} path="/baout" /> */}
                        {/* <Route component={Books} path="/mbooks" /> */}
                        <Route component={Keep} path="/mkeep" />

                        {/* <Home /> */}
                        {/* <MisterEmail /> */}
                        {/* <Timer heading="COUNTDOWN" targetTime={Date.now() + 1000 * 20} dueFunc={this.playSound}/> */}
                    </main>

               
            </Router>
        )
    }
}

