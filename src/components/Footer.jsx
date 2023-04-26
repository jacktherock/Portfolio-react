import React from 'react'

const Footer = ({ data }) => {
    return (
        <footer className="footer">
            <p className="footer__copy">Copyright &copy; <script>document.write(new Date().getFullYear())</script> {data.first_name}. All Rights Reserved</p>
        </footer>
    )
}

export default Footer