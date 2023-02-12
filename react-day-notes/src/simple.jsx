import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
export default function Apps() {
    return (
        <div>
            <div className="columns">
                <ul className="price">
                    <li className="header">Basic</li>
                    <li className="rate">500Rs/Year</li>
                    <li>20GB Storage</li>
                    <li>20 Emails</li>
                    <li>20GB Bandwidth</li>
                    <li className="grey"><a href="" className="button"><button>Signup</button></a></li>
                </ul>
            </div>

            <div className="columns">
                <ul className="price">
                    <li className="header">Pro</li>
                    <li className="rate">1000Rs/Year</li>
                    <li>50GB Storage</li>
                    <li>50 Emails</li>
                    <li>50GB Bandwidth</li>
                    <li className="grey"><a href="" className="button"><button>Signup</button></a></li>
                </ul>
            </div>
            <div className="columns">
                <ul className="price">
                    <li className="header">Premium</li>
                    <li className="rate">2000Rs/Year</li>
                    <li>2000GB Storage</li>
                    <li>2000 Emails</li>
                    <li>100GB Bandwidth</li>
                    <li className="grey"><a href="" className="button"><button>Signup</button></a></li>
                </ul>
            </div>
        </div>

    )
}