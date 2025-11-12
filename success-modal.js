// JavaScript Documentclass SuccessModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        .modal-content {
          background: white;
          padding: 2.5rem;
          border-radius: 12px;
          max-width: 500px;
          width: 90%;
          text-align: center;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          transform: translateY(20px);
          transition: all 0.3s ease;
        }
        .modal-icon {
          font-size: 4rem;
          color: #10B981;
          margin-bottom: 1.5rem;
        }
        .modal-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1F2937;
          margin-bottom: 1rem;
        }
        .modal-text {
          color: #6B7280;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .modal-button {
          background: #3B82F6;
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        .modal-button:hover {
          background: #2563EB;
        }
        .modal-overlay.active {
          opacity: 1;
          visibility: visible;
        }
        .modal-overlay.active .modal-content {
          transform: translateY(0);
        }
      </style>
      <div class="modal-overlay">
        <div class="modal-content">
          <div class="modal-icon">
            <i data-feather="check-circle"></i>
          </div>
          <h3 class="modal-title">Thank You!</h3>
          <p class="modal-text">Your consultation request has been received. We'll contact you within 24 hours to confirm your session.</p>
          <button class="modal-button">Close</button>
        </div>
      </div>
    `;
  }

  show() {
    this.shadowRoot.querySelector('.modal-overlay').classList.add('active');
    feather.replace();
  }

  hide() {
    this.shadowRoot.querySelector('.modal-overlay').classList.remove('active');
  }

  connectedCallback() {
    this.shadowRoot.querySelector('.modal-button').addEventListener('click', () => this.hide());
  }
}

customElements.define('success-modal', SuccessModal);