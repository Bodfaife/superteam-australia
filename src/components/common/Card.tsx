import { cn } from '@/utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'elevated';
}

export function Card({ className, variant = 'default', ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border p-6 transition-all duration-300',
        {
          'border-blue-700/30 bg-blue-950/20 shadow-sm hover:shadow-md hover:border-blue-700/50': variant === 'default',
          'border-blue-400/20 bg-blue-950/40 backdrop-blur-md hover:bg-blue-950/60 hover:border-blue-400/40': variant === 'glass',
          'border-blue-700/30 bg-blue-950/30 shadow-lg hover:shadow-xl hover:border-blue-700/50': variant === 'elevated',
        },
        className
      )}
      {...props}
    />
  );
}
