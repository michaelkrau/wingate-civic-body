
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface ChapterEditorProps {
  title: string;
  content: string;
  onContentChange: (content: string) => void;
  onTitleChange: (title: string) => void;
}

const ChapterEditor: React.FC<ChapterEditorProps> = ({
  title,
  content,
  onContentChange,
  onTitleChange
}) => {
  const [showCitationHelper, setShowCitationHelper] = useState(false);

  const insertCitation = (type: 'book' | 'article' | 'website') => {
    const citations = {
      book: '(שם המחבר, שנה)',
      article: '(שם המחבר, שנה, עמ\' X)',
      website: '(שם המחבר/ארגון, שנה)'
    };
    
    const newContent = content + citations[type];
    onContentChange(newContent);
  };

  return (
    <div className="chapter-section animate-fade-in-up">
      <div className="mb-4">
        <Input
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          placeholder="כותרת הפרק"
          className="text-lg font-semibold text-right"
        />
      </div>
      
      <div className="mb-4">
        <Textarea
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          placeholder="תוכן הפרק..."
          className="min-h-[300px] text-right leading-relaxed"
          dir="rtl"
        />
      </div>
      
      <div className="flex gap-2 justify-end">
        <Button
          variant="outline"
          onClick={() => setShowCitationHelper(!showCitationHelper)}
        >
          עזרה בציטוט
        </Button>
      </div>
      
      {showCitationHelper && (
        <Card className="mt-4 p-4">
          <h4 className="font-semibold mb-3 text-right">הוספת ציטוט APA</h4>
          <div className="flex gap-2 justify-end mb-3">
            <Button size="sm" onClick={() => insertCitation('book')}>
              ספר
            </Button>
            <Button size="sm" onClick={() => insertCitation('article')}>
              מאמר
            </Button>
            <Button size="sm" onClick={() => insertCitation('website')}>
              אתר
            </Button>
          </div>
          <div className="citation-field text-right">
            <p><strong>דוגמה לציטוט ספר:</strong> כהן, מ. (2023). חינוך לדמוקרטיה. הוצאת האוניברסיטה הפתוחה.</p>
            <p><strong>דוגמה לציטוט מאמר:</strong> לוי, ש. (2022). תפקיד החינוך הגופני בחברה. כתב העת לחינוך, 15(3), 45-67.</p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ChapterEditor;
