interface CartItem {
  id: string;
  articleItem: ArticleCartItem;
  quantity: number;
}

interface CartItemRequest {
  id: string;
  cartId: string;
  articleItemId: string;
  quantity: number;
}
