import React from 'react'
import '../SCSS/footer.scss'

function Footer() {
  return (
    <footer>
      <div className="f-parent container">
        <ul>
          <h4 className="ft-title">logo</h4>
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

        <ul>
          <h4 className="ft-title">Resources</h4>
          <li>About</li>
          <li>Blockbuster</li>
          <li>Contact Us</li>
          <li>Forums</li>
          <li>Blog</li>
          <li>Help Center</li>
        </ul>

        <ul>
          <h4 className="ft-title">Legal</h4>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Security</li>
        </ul>

        <ul>
          <h4 className="ft-title">Account</h4>
          <li>My Account</li>
          <li>Watchlist</li>
          <li>Collections</li>
          <li>User Guide</li>
        </ul>

        <ul>
          <h4 className="ft-title">Newsletter</h4>
          <li>
            Subscribe to our newsletter system now
            <br />
            to get latest news from us.
          </li>
        </ul>
      </div>

      <div className="ar-reserved container">
        <p className="text-gray">2019 Miranda. All Rights Reserved</p>
        <p className="text-gray backtop">Back to top</p>
      </div>
    </footer>
  )
}

export default Footer
