interface CartItem {
  id: string;
  articleItem: ArticleItem;
  quantity: number;
}

interface CartItemRequest {
  id: string;
  cartId: string;
  articleItemId: string;
  quantity: number;
}
