import React, { useState } from 'react';
import './PaymentModal.css';

const DELIVERY_FEE_COD = 2.0;

const PaymentModal = ({ subtotal, onClose }) => {
  const [method, setMethod] = useState('cod'); // 'cod' or 'visa'
  const [cardNumber, setCardNumber] = useState('');
  const [successType, setSuccessType] = useState(null); // null | 'visa' | 'cod'

  const deliveryFee = method === 'cod' ? DELIVERY_FEE_COD : 0;
  const total = (subtotal || 0) + deliveryFee;
  const actionLabel = method === 'cod' ? 'Your Order will Reach You Soon' : 'Pay';

  const handlePay = () => {
    if (method === 'visa') {
      // lightweight validation
      const digits = cardNumber.replace(/\s+/g, '');
      if (digits.length < 12) {
        alert('Please enter a valid card number (min 12 digits).');
        return;
      }
      setSuccessType('visa');
      return;
    }
    // Cash on Delivery path
    setSuccessType('cod');
  };

  return (
    <div className="payment-backdrop" onClick={onClose}>
      <div className="payment-panel" onClick={(e)=>e.stopPropagation()}>
        {successType === null ? (
          <>
            <div className="payment-header">
              <h3>Select Payment Method</h3>
              <button className="payment-close" onClick={onClose}>×</button>
            </div>

            <div className="payment-methods">
              <label className={`method ${method==='cod'?'active':''}`}>
                <input
                  type="radio"
                  name="payment-method"
                  value="cod"
                  checked={method==='cod'}
                  onChange={()=>setMethod('cod')}
                />
                <div className="method-content">
                  <div className="method-title">Cash on Delivery</div>
                  <div className="method-desc">Delivery fee: $2.00</div>
                </div>
              </label>

              <label className={`method ${method==='visa'?'active':''}`}>
                <input
                  type="radio"
                  name="payment-method"
                  value="visa"
                  checked={method==='visa'}
                  onChange={()=>setMethod('visa')}
                />
                <div className="method-content">
                  <div className="method-title">Visa Card</div>
                  <div className="method-desc">Pay online with your card</div>
                </div>
              </label>
            </div>

            {method === 'visa' && (
              <div className="card-entry">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  id="cardNumber"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e)=>setCardNumber(e.target.value)}
                />
              </div>
            )}

            <div className="payment-summary">
              <div className="row"><span>Subtotal</span><span>${(subtotal||0).toFixed(2)}</span></div>
              <div className="row"><span>Delivery</span><span>${deliveryFee.toFixed(2)}</span></div>
              <div className="row total"><span>Total</span><span>${total.toFixed(2)}</span></div>
            </div>

            <button className="pay-btn" onClick={handlePay}>{actionLabel}</button>
          </>
        ) : successType === 'visa' ? (
          <div className="payment-success">
            <div className="check">✓</div>
            <div className="title">Payment Successful</div>
            <div className="desc">Thank you! Your order has been placed.</div>
            <button className="close-btn" onClick={onClose}>Close</button>
          </div>
        ) : (
          <div className="payment-success">
            <div className="title">Thnks For Visiting Starbucks , Enjoy Your Day</div>
            <button className="close-btn" onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
