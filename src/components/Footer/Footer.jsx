

const Footer = () => {
    return (
        <footer className="footer bg-neutral text-neutral-content p-10">
            <div className="footer max-w-7xl mx-auto">
                <nav>
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Returns Policy</a>
                    <a className="link link-hover">Shipping Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                </nav>
                <nav>
                    <h6 className="footer-title">My Account</h6>
                    <a className="link link-hover">My Cart</a>
                    <a className="link link-hover">Wishlist</a>
                    <a className="link link-hover">Gift Card</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;