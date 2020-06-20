import React from 'react'

export default function Header() {
    return (
        <div className="body">
            <ul className="header">
                <li style={ { fontWeight: 'bold', color: "white", marginLeft: '10px' } }>MB</li>
                <li style={ { fontWeight: 'bold' } }>Munna Babu News</li>
                <li>news</li>
                <li>past</li>
                <li>comments</li>
                <li>ask</li>
                <li>show</li>
                <li>jobs</li>
                <li>submit</li>
            </ul>
        </div>
    )
}
