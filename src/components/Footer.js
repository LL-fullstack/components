function Footer(props) {
    return (
        <div className="footer-container">
            <ul className="footer-list">
                {
                    props.footerList.map(function (listElement) {
                        return (
                            <li className="footer-element"><a href="#">{listElement}</a></li>
                        )})
                }
            </ul>
            <p className="copyright">{props.footerCopyright}</p>
        </div>
    );
}

export default Footer;

