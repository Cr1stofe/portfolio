import { describe, it, expect } from 'vitest';
import { cn } from './utils';

describe('cn utility', () => {
  it('should merge class names correctly', () => {
    const result = cn('px-4 py-2', 'bg-red-500');
    expect(result).toBe('px-4 py-2 bg-red-500');
  });

  it('should resolve tailwind conflicts by keeping the last class', () => {
    const result = cn('px-4', 'px-6');
    expect(result).toBe('px-6');
  });

  it('should handle conditional classes properly', () => {
    const isActive = true;
    const isHidden = false;
    const result = cn(
      'base-class',
      isActive && 'active-class',
      isHidden && 'hidden-class'
    );
    expect(result).toBe('base-class active-class');
  });

  it('should ignore null, undefined and boolean values', () => {
    const result = cn('text-sm', null, undefined, false, 'text-slate-900');
    expect(result).toBe('text-sm text-slate-900');
  });
});
