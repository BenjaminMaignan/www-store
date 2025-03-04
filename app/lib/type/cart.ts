interface Cart {
  id: string;
  customer: string;
  cartItems: CartItem[];
  created_at: string;
}

interface CartRequest {
  id: string;
  customerId: string;
  cartItems: CartItemRequest[];
}
