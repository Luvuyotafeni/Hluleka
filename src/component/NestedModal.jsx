import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import { Button } from '@mui/base/Button';

export default function NestedModal(props) {
  const [open, setOpen] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);
  const [cartCount, setCartCount] = React.useState(getInitialCartCount());
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { title, description, price } = props;
 
  // Function to get the initial cart count from local storage
  function getInitialCartCount() {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    return existingCart.length;
  }

  // Function to update the cart count
  function updateCartCount() {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(existingCart.length);
  }
  
  // Use useEffect to update cart count when the cart is modified
  React.useEffect(() => {
    updateCartCount();
  }, []); 

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(isNaN(newQuantity) ? 1 : newQuantity);
  };

// ... (your existing code)

// ... (your existing code)

const handleAddToCart = () => {
  const cartItem = {
    title,
    quantity,
    price,
  };

  // Get existing cart from local storage or create an empty array
  const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

  // Add the new item to the cart
  const updatedCart = [...existingCart, cartItem];

  // Save the updated cart to local storage
  localStorage.setItem('cart', JSON.stringify(updatedCart));

  // Update the cart count
  setCartCount(updatedCart.length);

  // Close the modal after adding to cart
  handleClose();

  // Refresh the entire website
  window.location.reload();
};

// ... (rest of your code)


// ... (rest of your code)


  return (
    <div>
      <TriggerButton onClick={handleOpen}>More</TriggerButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent sx={style}>
          <h2 id="parent-modal-title" className="modal-title">
            {props.title}
          </h2>
          <p id="parent-modal-description" className="modal-description">
            {props.description}
          </p>
          {price && (
            <>
              <p id="parent-modal-price" className="modal-price">
                Price: {price}
              </p>
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
              />
              <ModalButton onClick={handleAddToCart}>Add to Cart</ModalButton>
            </>
          )}      
        </ModalContent>
      </Modal>
    </div>
  );
}



const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'base-Backdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const blue = {
  200: '#99CCFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0066CC',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Adjusted styles for nested modal size */
  &.base-Modal-open {
    .nested-modal {
      width: 300px;  // Adjust the width as needed
      max-width: 90%;  // Adjust the maximum width as needed
    }
  }
`;
const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,  // Default width for larger screens
  '@media (max-width: 768px)': {
    width: '70%',  // Adjusted width for screens up to 768px
  },
  '@media (max-width: 425px)': {
    width: '80%',  // Further adjusted width for screens up to 425px
  },
};

const ModalContent = styled('div')(
  ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
    padding: 24px;
    color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }

    /* Styles for nested modal */
    & .nested-modal {
      width: 100%;  // Full width by default
      max-width: 100%;  // Full width by default
      transition: all 150ms ease;
    }
  `,
);

const TriggerButton = styled(Button)(
  ({ theme }) => `
    /* Your existing styles for TriggerButton */
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 1.5;
    padding: 10px 30px;
    border-radius: 50px;
    transition: all 150ms ease;
    cursor: pointer;
    background:white;
    border: 0;
    color: black;
    box-shadow: rgb(0 0 0 / 5%) 0 0 8px; 
    &:hover {
      color:white
      box-shadow: rgb(93 24 220) 0px 7px 29px 0px;
    }
  
    &:active {
      letter-spacing: 3px;
      background-color: hsl(261deg 80% 48%);
      color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};
      box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
      transform: translateY(10px);
      transition: 100ms;
    }
  
    &:focus-visible {
      box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
      outline: none;
    }
  
    @media (max-width: 768px) {
      margin-left: 0; /* Adjust margin for smaller screens */
    }
  `,
);


const ModalButton = styled(Button)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  color: black;
  transition: all 150ms ease;
  cursor: pointer;
  &:hover {
    background-color: ;
  }

  &:active {
    background-color: white;
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
    &:hover {
      background-color: ${blue[500]};
    }
  }
`,
);