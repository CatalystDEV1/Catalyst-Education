// JavaScript Document
class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1e293b;
          color: white;
          padding: 3rem 1rem;
          text-align: center;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin: 1.5rem 0;
          flex-wrap: wrap;
        }
        .footer-links a {
          color: #e2e8f0;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: #60a5fa;
        }
        .copyright {
          margin-top: 2rem;
          color: #94a3b8;
          font-size: 0.875rem;
        }
        .social-icons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin: 1.5rem 0;
        }
        .social-icons a {
          color: white;
          transition: color 0.2s;
        }
        .social-icons a:hover {
          color: #60a5fa;
        }
      </style>
      <footer>
        <div class="footer-content">
          <h3>Catalyst Tutors</h3>
          <div class="footer-links">
            <a href="/">Home</a>
            <a href="/success-stories.html">Success Stories</a>
            <a href="#contact">Contact</a>
          </div>
          <div class="social-icons">
            <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
            <a href="#" aria-label="Facebook"><i data-feather="facebook"></i></a>
            <a href="#" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
          </div>
          <p class="copyright">© ${new Date().getFullYear()} Catalyst Tutors. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
