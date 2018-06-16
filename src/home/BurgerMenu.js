import React from "react";
import './burger.css'
import { Link } from 'react-router-dom'

export default ({ close }) => (
    <div className="menu">
                <ul>
                    <li><Link to='/' onClick={close}>HOME</Link></li>
                    <li> <Link to='/info' onClick={close}>INFO</Link></li>
                    <li> <Link to='/shows' onClick={close}>SHOWS</Link></li>
                    <li><Link to='/music' onClick={close}>MUSIC</Link></li>
                    <li> <Link to='/store' onClick={close}>STORE</Link></li>
                    <li> <Link to='/gallery' onClick={close}>GALLERY</Link></li>
                    <li> <Link to='/news' onClick={close}>NEWS</Link></li>
                </ul>
    </div>
);