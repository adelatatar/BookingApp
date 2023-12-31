import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

/**
 * Here I have a footer component that appears in each page. It contains just contact details.
 * @constructor
 */

function FooterComponent() {
    return (
        <footer className="page-footer font-monospace">
            <div className="footer-copyright text-center py-3">
                <p>Contact us</p>
                <p>bookingApp@bookingApp.com</p>
                <p>Address: Florilor Street, No.22, Cluj-Napoca, Cluj, Romania</p>
            </div>
        </footer>
    );
}

export default FooterComponent