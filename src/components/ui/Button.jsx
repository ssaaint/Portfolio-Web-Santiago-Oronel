const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-60';

const variants = {
  primary:
    'bg-ink-950 text-white shadow-sm hover:-translate-y-0.5 hover:bg-violet-700 dark:bg-white dark:text-ink-950 dark:hover:bg-violet-100',
  secondary:
    'border border-ink-900/[0.15] bg-white/70 text-ink-900 backdrop-blur hover:-translate-y-0.5 hover:border-violet-400 hover:text-violet-700 dark:border-white/[0.12] dark:bg-white/[0.06] dark:text-white dark:hover:border-violet-300 dark:hover:text-violet-200',
  ghost:
    'text-ink-700 hover:bg-ink-900/5 hover:text-ink-950 dark:text-ink-100 dark:hover:bg-white/10 dark:hover:text-white',
};

function Button({ as: Component = 'button', variant = 'primary', className = '', children, ...props }) {
  return (
    <Component className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}

export default Button;
