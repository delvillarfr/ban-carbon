import { ReactNode } from 'react';

export interface LawData {
  id: number;
  title: string;
  header: string;
  body: ReactNode;
}

export default function Law({ lawData, className = '' }: { lawData: LawData; className?: string }) {
  return (
    <div className={`law law-${lawData.id} worn-paper ${className}`.trim()}>
      <div className="law-content">
        <div className="law-title">
          {lawData.title}
        </div>
        <div className="law-header">
          {lawData.header}
        </div>
        <p className="law-body">
          {lawData.body}
        </p>
      </div>
    </div>
  );
}
