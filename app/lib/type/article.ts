interface Article {
  id: string;
  name: string;
  price: number;
  articleItems: ArticleItem[];
}

interface ArticleLight {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}