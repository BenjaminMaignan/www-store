"use client";

import { createContext, useContext, useMemo } from 'react';

interface ArticleContextType {
  article : Article;
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
  return context.article;
}

export function ArticleProvider({ children, article }: Readonly<Props>) {
  const value = useMemo(() => ({ article }), [article]);

  return (
    <ArticleContext.Provider value={value}>
      {children}
    </ArticleContext.Provider>
  );
}