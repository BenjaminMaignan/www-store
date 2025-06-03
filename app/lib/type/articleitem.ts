interface ArticleItem {
  id: string;
  size: string;
  color: string;
  availableStock: number;
}

interface ArticleCartItem extends ArticleItem {
  articleId: string;
  name: string;
  price: number;
}