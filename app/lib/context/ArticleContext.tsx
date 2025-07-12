"use client";

import { createContext, useContext, useMemo, useState } from 'react';

interface ArticleContextType {
  article : Article;
  selectedArticleItem: ArticleItem | null;
  setSelectedArticleItem: (item: ArticleItem | null) => void;
}

interface Props {
  children: React.ReactNode;
  article: Article;
}

const ArticleContext = createContext<ArticleContextType | null>(null);

export function useArticle() {
  const context = useContext(ArticleContext);
  if (!context) {
    throw new Error('useArticle must be used within an ArticleProvider');
  }
  return context;
}

export function ArticleProvider({ children, article }: Readonly<Props>) {
  const [selectedArticleItem, setSelectedArticleItem] = useState<ArticleItem | null>(article.articleItems[0] || null);

  const value = useMemo(() => ({ article, selectedArticleItem, setSelectedArticleItem }), [article, selectedArticleItem]);

  return (
    <ArticleContext.Provider value={value}>
      {children}
    </ArticleContext.Provider>
  );
}