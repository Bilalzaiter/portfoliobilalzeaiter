
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  className?: string;
}

const SkillBadge = ({ name, className }: SkillBadgeProps) => {
  return (
    <div 
      className={cn(
        "chip bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors", 
        className
      )}
    >
      {name}
    </div>
  );
};

export default SkillBadge;
