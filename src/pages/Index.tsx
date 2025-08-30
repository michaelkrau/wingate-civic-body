
import React, { useState } from 'react';
import PaperHeader from '@/components/PaperHeader';
import TableOfContents from '@/components/TableOfContents';
import ChapterEditor from '@/components/ChapterEditor';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Save, Download, FileText } from 'lucide-react';

interface Chapter {
  id: string;
  title: string;
  content: string;
}

const Index = () => {
  const [currentView, setCurrentView] = useState<'overview' | 'editing'>('overview');
  const [selectedChapter, setSelectedChapter] = useState<string>('');
  
  const [paperData, setPaperData] = useState({
    title: 'תפקיד המורה לחינוך גופני בקידום ערכים אזרחיים ודמוקרטיים',
    studentName: '[שם מלא]',
    idNumber: '[מספר תעודת זהות]',
    supervisor: 'ד"ר יעקב (ג\'קי) זבולון',
    submissionDate: '23/08/2025',
    year: 'תשפ"ה (קיץ 2025)'
  });

  const [chapters, setChapters] = useState<Chapter[]>([
    { id: 'abstract', title: '1. תקציר', content: '' },
    { id: 'introduction', title: '2. מבוא', content: '' },
    { id: 'literature', title: '3. סקירת ספרות', content: '' },
    { id: 'methodology', title: '4. מתודולוגיה', content: '' },
    { id: 'findings', title: '5. ממצאים', content: '' },
    { id: 'discussion', title: '6. דיון', content: '' },
    { id: 'conclusion', title: '7. סיכום והמלצות', content: '' },
    { id: 'bibliography', title: '8. ביבליוגרפיה', content: '' }
  ]);

  const tocItems = chapters.map((chapter, index) => ({
    id: chapter.id,
    title: chapter.title,
    page: index + 1
  }));

  const handleChapterSelect = (chapterId: string) => {
    setSelectedChapter(chapterId);
    setCurrentView('editing');
  };

  const updateChapter = (chapterId: string, field: 'title' | 'content', value: string) => {
    setChapters(prev => prev.map(chapter => 
      chapter.id === chapterId 
        ? { ...chapter, [field]: value }
        : chapter
    ));
  };

  const currentChapter = chapters.find(ch => ch.id === selectedChapter);

  const savePaper = () => {
    localStorage.setItem('academicPaper', JSON.stringify({ paperData, chapters }));
    alert('העבודה נשמרה בהצלחה!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/20 to-background p-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Navigation */}
        <Card className="mb-6 p-4 animate-fade-in-up">
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Button onClick={() => setCurrentView('overview')} variant={currentView === 'overview' ? 'default' : 'outline'}>
                <FileText className="h-4 w-4 ml-2" />
                סקירה כללית
              </Button>
            </div>
            <div className="flex gap-2">
              <Button onClick={savePaper} variant="outline">
                <Save className="h-4 w-4 ml-2" />
                שמירה
              </Button>
              <Button variant="secondary">
                <Download className="h-4 w-4 ml-2" />
                ייצוא PDF
              </Button>
            </div>
          </div>
        </Card>

        {currentView === 'overview' ? (
          <div className="academic-paper animate-paper-float">
            <PaperHeader {...paperData} />
            <TableOfContents 
              items={tocItems}
              onItemClick={handleChapterSelect}
            />
            
            <div className="mt-8 p-6 bg-accent/30 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-right">הנחיות לכתיבה</h3>
              <ul className="space-y-2 text-right">
                <li>• שמירה על פורמט APA לציטוטים</li>
                <li>• כתיבה אקדמית ברמה גבוהה</li>
                <li>• שימוש במקורות מהימנים ועדכניים</li>
                <li>• שמירה על רצף לוגי בין הפרקים</li>
              </ul>
            </div>
          </div>
        ) : (
          currentChapter && (
            <div className="max-w-4xl mx-auto">
              <Button 
                onClick={() => setCurrentView('overview')} 
                variant="outline" 
                className="mb-6"
              >
                ← חזרה לסקירה
              </Button>
              
              <div className="academic-paper">
                <ChapterEditor
                  title={currentChapter.title}
                  content={currentChapter.content}
                  onTitleChange={(value) => updateChapter(selectedChapter, 'title', value)}
                  onContentChange={(value) => updateChapter(selectedChapter, 'content', value)}
                />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Index;
