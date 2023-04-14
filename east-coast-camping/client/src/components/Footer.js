import React from 'react';
import '../styles/Footer.css'
import { useLocation } from "react-router-dom";





export default function Footer() {
    return (
        <footer className='footer'>
            <h3 className='text-white text-center pt-3'>Life is better around the campfire</h3>

            <div className='text-white text-center py-4'>
                <small >&copy; 2023 EastCoastCamping. All rights reserved.</small>
            </div>


        </footer>

    )
}