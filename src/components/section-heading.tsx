import React from 'react';

type SectionHeadingProps = {
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ title, description, className = '' }: SectionHeadingProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
