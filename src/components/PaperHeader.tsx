
import React from 'react';

interface PaperHeaderProps {
  title: string;
  studentName: string;
  idNumber: string;
  supervisor: string;
  submissionDate: string;
  year: string;
}

const PaperHeader: React.FC<PaperHeaderProps> = ({
  title,
  studentName,
  idNumber,
  supervisor,
  submissionDate,
  year
}) => {
  return (
    <div className="paper-header animate-fade-in-up">
      <div className="mb-8">
        <h1 className="text-primary font-bold mb-2">המכללה האקדמית וינגייט</h1>
        <h2 className="text-lg font-semibold text-muted-foreground">חוג לחינוך גופני</h2>
        <p className="text-muted-foreground mt-2">
          סמינריון — חינוך אזרחי ודמוקרטיה (קוד 4218.07)
        </p>
        <p className="text-muted-foreground">שנת הלימוד: {year}</p>
      </div>
      
      <div className="my-12">
        <h1 className="text-3xl font-bold text-primary mb-8 leading-tight">
          {title}
        </h1>
      </div>
      
      <div className="space-y-4 text-right">
        <div className="flex justify-between items-center">
          <span className="font-medium">שם המגישה:</span>
          <span className="text-primary font-semibold">{studentName}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">ת.ז:</span>
          <span>{idNumber}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">מנחה:</span>
          <span className="text-primary">{supervisor}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">תאריך הגשה:</span>
          <span>{submissionDate}</span>
        </div>
      </div>
    </div>
  );
};

export default PaperHeader;
