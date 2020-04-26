const { Link, Route } = ReactRouterDOM

import EmailFilter from '../cmp/EmailFilter.jsx'
import EmailTabs from '../cmp/EmailTabs.jsx'

export class Email extends React.Component {
    render(){
        return(
<section className="main">
<section className="filter">
<EmailFilter/>
<EmailTabs/>
</section>
<section className="email-list">
    
</section>

</section>

        )
    }

} 