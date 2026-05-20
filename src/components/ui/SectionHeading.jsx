function SectionHeading({ eyebrow, title, intro, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-700 dark:text-violet-300">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold leading-tight text-ink-950 sm:text-4xl lg:text-5xl dark:text-white">
        {title}
      </h2>
      {intro ? <p className="mt-5 text-base leading-8 text-ink-700 dark:text-ink-100">{intro}</p> : null}
    </div>
  );
}

export default SectionHeading;
