import React from 'react'
import '../SCSS/footer.scss'

function Footer() {
  return (
    <footer>
      <div className="f-parent container">
        <ul className="f-ul">
          <h4>logo</h4>
          <li>
            5th Avenue st, manhattan
            <br />
            New York, NY 10001
          </li>
          <li>
            Call us:
            <span>(+1)202 342 7528</span>
          </li>
        </ul>

        <ul className="f-ul">
          <h4>Resources</h4>
          <li>About</li>
          <li>Blockbuster</li>
          <li>Contact Us</li>
          <li>Forums</li>
          <li>Blog</li>
          <li>Help Center</li>
        </ul>

        <ul className="f-ul">
          <h4>Legal</h4>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Security</li>
        </ul>

        <ul className="f-ul">
          <h4>Account</h4>
          <li>My Account</li>
          <li>Watchlist</li>
          <li>Collections</li>
          <li>User Guide</li>
        </ul>

        <ul className="f-ul">
          <h4>Newsletter</h4>
          <li>Subscribe to our newsletter system now to get latest news from us.</li>
          <input type="email" required />
          <p>SUBSCRIBE NOW</p>
        </ul>
      </div>

      <div className="ar-reserved container">
        <p className="text-gray">2019 Miranda. All Rights Reserved</p>
        <p className="text-gray">Back to top</p>
      </div>
    </footer>
  )
}

export default Footer
