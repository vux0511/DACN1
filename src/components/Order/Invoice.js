import "./Invoice.scss";

function Invoice() {
    return (
        <>
            <header className="clearfix">
                <div id="logo">
                    <img src="logo.png" />
                </div>
                <h1>INVOICE 3-2-1</h1>
                <div id="company" className="clearfix">
                    <div>Company Name</div>
                    <div>
                        455 Foggy Heights,
                        <br />
                        AZ 85004, US
                    </div>
                    <div>(602) 519-0450</div>
                    <div>
                        <a href="mailto:company@example.com">
                            company@example.com
                        </a>
                    </div>
                </div>
                <div id="project">
                    <div>
                        <span>PROJECT</span> Website development
                    </div>
                    <div>
                        <span>CLIENT</span> John Doe
                    </div>
                    <div>
                        <span>ADDRESS</span> 796 Silver Harbour, TX 79273, US
                    </div>
                    <div>
                        <span>EMAIL</span>
                        <a href="mailto:john@example.com">john@example.com</a>
                    </div>
                    <div>
                        <span>DATE</span> August 17, 2015
                    </div>
                    <div>
                        <span>DUE DATE</span> September 17, 2015
                    </div>
                </div>
            </header>
            <main>
                <table>
                    <thead>
                        <tr>
                            <th className="service">SERVICE</th>
                            <th className="desc">DESCRIPTION</th>
                            <th>PRICE</th>
                            <th>QTY</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="service">Design</td>
                            <td className="desc">
                                Creating a recognizable design solution based on
                                the company's existing visual identity
                            </td>
                            <td className="unit">$40.00</td>
                            <td className="qty">26</td>
                            <td className="total">$1,040.00</td>
                        </tr>
                        <tr>
                            <td className="service">Development</td>
                            <td className="desc">
                                Developing a Content Management System-based
                                Website
                            </td>
                            <td className="unit">$40.00</td>
                            <td className="qty">80</td>
                            <td className="total">$3,200.00</td>
                        </tr>
                        <tr>
                            <td className="service">SEO</td>
                            <td className="desc">
                                Optimize the site for search engines (SEO)
                            </td>
                            <td className="unit">$40.00</td>
                            <td className="qty">20</td>
                            <td className="total">$800.00</td>
                        </tr>
                        <tr>
                            <td className="service">Training</td>
                            <td className="desc">
                                Initial training sessions for staff responsible
                                for uploading web content
                            </td>
                            <td className="unit">$40.00</td>
                            <td className="qty">4</td>
                            <td className="total">$160.00</td>
                        </tr>
                        <tr>
                            <td colSpan={4}>SUBTOTAL</td>
                            <td className="total">$5,200.00</td>
                        </tr>
                        <tr>
                            <td colSpan={4}>TAX 25%</td>
                            <td className="total">$1,300.00</td>
                        </tr>
                        <tr>
                            <td colSpan={4} className="grand total">
                                GRAND TOTAL
                            </td>
                            <td className="grand total">$6,500.00</td>
                        </tr>
                    </tbody>
                </table>
                <div id="notices">
                    <div>NOTICE:</div>
                    <div className="notice">
                        A finance charge of 1.5% will be made on unpaid balances
                        after 30 days.
                    </div>
                </div>
            </main>
            <footer>
                Invoice was created on a computer and is valid without the
                signature and seal.
            </footer>
        </>
    );
}

export default Invoice;
