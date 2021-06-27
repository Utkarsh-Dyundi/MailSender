import React, {useState, useEffect} from 'react'
import axios from 'axios';

function LandingPage() {

    const [Mails, setMails] = useState([])

    useEffect(() => {
        axios.post('/api/email/getMails')
            .then(response => {
                if (response.data.success) {
                    setMails(response.data.mails)
                    console.log(response.data.mails);
                } else {
                    alert('Failed to get Courses');
                }
            })
    }, [Mails])        

    return (
        <>
            <div className="app">
               
            </div>
        </>
    )
}

export default LandingPage
