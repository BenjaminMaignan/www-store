interface CartItem {
  id: string;
  article: Article;
  quantity: number;
}

interface CartItemRequest {
  id: string;
  cartId: string;
  articleId: string;
  quantity: number;
}
