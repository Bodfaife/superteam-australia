import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-primary-100 text-primary-700 hover:bg-primary-200',
        secondary: 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200',
        accent: 'bg-accent-100 text-accent-700 hover:bg-accent-200',
        australian: 'bg-australian-100 text-australian-700 hover:bg-australian-200',
        success: 'bg-green-100 text-green-700 hover:bg-green-200',
        warning: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200',
        danger: 'bg-red-100 text-red-700 hover:bg-red-200',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}
