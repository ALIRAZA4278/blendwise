'use client';

/**
 * ScrollSection - A wrapper component that adds scroll animations to its children
 *
 * Usage:
 * <ScrollSection animation="fade-up">
 *   <YourContent />
 * </ScrollSection>
 *
 * Available animations:
 * - fade-up (default)
 * - fade-down
 * - fade-left
 * - fade-right
 * - scale
 * - fade
 */

export default function ScrollSection({
  children,
  animation = 'fade-up',
  className = '',
  delay = 0
}) {
  const animationClass = `scroll-${animation}`;
  const delayStyle = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div className={`${animationClass} ${className}`} style={delayStyle}>
      {children}
    </div>
  );
}
