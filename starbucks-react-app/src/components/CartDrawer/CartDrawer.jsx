import React, { useContext, useState } from 'react';
import './CartDrawer.css';
import { StoreContext } from '../../context/StoreContext';
import PaymentModal from '../PaymentModal/PaymentModal';

const CartDrawer = ({ onClose }) => {
  const { cartItems, food_list, addToCart, removeFromCart } = useContext(StoreContext);
  const [showPayment, setShowPayment] = useState(false);

  const entries = Object.entries(cartItems || {});
  const items = entries.map(([id, qty]) => {
    const item = food_list.find(f => String(f.id) === String(id));
    return item ? { ...item, qty } : null;
  }).filter(Boolean);

  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);

  return (
    <div className="cart-backdrop" onClick={onClose}>
      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="cart-close" onClick={onClose}>×</button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">Your cart is empty.</div>
        ) : (
          <div className="cart-items">
            {items.map((it) => (
              <div key={it.id} className="cart-item">
                <img src={it.image} alt={it.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <div className="cart-item-top">
                    <span className="cart-item-name">{it.name}</span>
                    <span className="cart-item-price">${it.price.toFixed(2)}</span>
                  </div>
                  <div className="cart-item-controls">
                    <button onClick={() => removeFromCart(it.id)} className="qty-btn">-</button>
                    <span className="qty">{it.qty}</span>
                    <button onClick={() => addToCart(it.id)} className="qty-btn">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cart-footer">
          <div className="cart-subtotal">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
            <button className="checkout-btn" disabled={items.length === 0} onClick={()=>setShowPayment(true)}>Checkout</button>
        </div>
      </div>
        {showPayment && (
          <PaymentModal subtotal={subtotal} onClose={()=>setShowPayment(false)} />
        )}
    </div>
  );
};

export default CartDrawer;
