interface CartItem {
  id: string;
  articleItem: ArticleCartItem;
  quantity: number;
  createdAt: Date;

}

interface CartItemRequest {
  id: string;
  cartId: string;
  articleItemId: string;
  quantity: number;
}
