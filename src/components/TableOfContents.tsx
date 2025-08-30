
import React from 'react';

interface TOCItem {
  id: string;
  title: string;
  page?: number;
  subsections?: TOCItem[];
}

interface TableOfContentsProps {
  items: TOCItem[];
  onItemClick: (id: string) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items, onItemClick }) => {
  const renderTOCItem = (item: TOCItem, level = 0) => (
    <div key={item.id} className={`${level > 0 ? 'mr-6' : ''}`}>
      <div 
        className="toc-item"
        onClick={() => onItemClick(item.id)}
      >
        <span className={`${level === 0 ? 'font-semibold' : ''} text-right`}>
          {item.title}
        </span>
        <span className="text-muted-foreground">{item.page || '—'}</span>
      </div>
      {item.subsections && (
        <div className="mr-4">
          {item.subsections.map(subsection => renderTOCItem(subsection, level + 1))}
        </div>
      )}
    </div>
  );

  return (
    <div className="chapter-section animate-fade-in-up">
      <h2 className="text-center mb-6">תוכן עניינים</h2>
      <div className="space-y-2">
        {items.map(item => renderTOCItem(item))}
      </div>
    </div>
  );
};

export default TableOfContents;
