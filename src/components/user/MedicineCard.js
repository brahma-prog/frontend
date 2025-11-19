// import React from 'react';
// import { styles } from './Styles';

// const MedicineCard = ({ medicine, cart, addToCart, updateQuantity }) => {
//   const cartItem = cart.find(item => item.id === medicine.id);
//   const quantity = cartItem ? cartItem.quantity : 0;

//   return (
//     <div style={styles.productCard}>
//       <div style={styles.productInfo}>
//         <h4 style={styles.productName}>{medicine.name}</h4>
//         <p style={styles.productVendor}>{medicine.vendor}</p>
//         <div style={styles.productCategory}>
//           <span style={styles.categoryBadge}>{medicine.category}</span>
//         </div>
//         <div style={styles.productFooter}>
//           <p style={styles.productPrice}>₹{medicine.price}</p>
//           <div style={styles.quantityControls}>
//             {quantity > 0 ? (
//               <>
//                 <button 
//                   style={styles.quantityButton}
//                   onClick={() => updateQuantity(medicine.id, quantity - 1)}
//                   type="button"
//                 >
//                   −
//                 </button>
//                 <span style={styles.quantity}>{quantity}</span>
//                 <button 
//                   style={styles.quantityButton}
//                   onClick={() => updateQuantity(medicine.id, quantity + 1)}
//                   type="button"
//                 >
//                   +
//                 </button>
//               </>
//             ) : (
//               <button 
//                 style={styles.addToCartButton}
//                 onClick={() => addToCart(medicine)}
//                 type="button"
//               >
//                 Add to Cart
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MedicineCard;

import React from 'react';
import styles from './Styles';
 

const MedicineCard = ({ medicine, cart, addToCart, updateQuantity, showBuyNow = false, onBuyNow }) => {
  const cartItem = cart.find(item => item.id === medicine.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleBuyNow = () => {
    if (onBuyNow) {
      onBuyNow(medicine);
    } else {
      // Default buy now behavior
      if (quantity === 0) {
        addToCart(medicine);
      }
      // Navigate to cart or proceed to checkout
    }
  };

  return (
    <div style={styles.productCard}>
      {/* Medicine Image */}
      <div style={styles.productImageContainer}>
        {medicine.image ? (
          <img
            src={medicine.image}
            alt={medicine.name}
            style={styles.productImage}
          />
        ) : (
          <div style={styles.productImagePlaceholder}>
            💊
          </div>
        )}
      </div>
      
      <div style={styles.productInfo}>
        <h4 style={styles.productName}>{medicine.name}</h4>
        <p style={styles.productVendor}>{medicine.vendor}</p>
        <div style={styles.productCategory}>
          <span style={styles.categoryBadge}>{medicine.category}</span>
        </div>
        
        {/* Cost per tablet/strip */}
        <div style={styles.medicinePricing}>
          <p style={styles.productPrice}>₹{medicine.price}</p>
          {medicine.unit && (
            <p style={styles.unitPrice}>per {medicine.unit}</p>
          )}
        </div>
        
        <div style={styles.productFooter}>
          <div style={styles.quantityControls}>
            {quantity > 0 ? (
              <>
                <button 
                  style={styles.quantityButton}
                  onClick={() => updateQuantity(medicine.id, quantity - 1)}
                  type="button"
                >
                  −
                </button>
                <span style={styles.quantity}>{quantity}</span>
                <button 
                  style={styles.quantityButton}
                  onClick={() => updateQuantity(medicine.id, quantity + 1)}
                  type="button"
                >
                  +
                </button>
              </>
            ) : (
              <div style={styles.productActions}>
                <button 
                  style={styles.addToCartButton}
                  onClick={() => addToCart(medicine)}
                  type="button"
                >
                  Add to Cart
                </button>
                {showBuyNow && (
                  <button 
                    style={styles.buyNowButton}
                    onClick={handleBuyNow}
                    type="button"
                  >
                    Buy Now
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;