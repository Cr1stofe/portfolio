import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  sendAnalyticsEvent,
  trackProjectClick,
  trackContactClick,
  trackLanguageChange,
  trackCtaClick,
} from './analytics';

describe('Analytics Utility (GA4)', () => {
  beforeEach(() => {
    window.gtag = vi.fn();
  });

  it('should call window.gtag with project_click payload', () => {
    trackProjectClick(
      'LMS NestJS',
      'api_docs',
      'https://api-veltro.cr1stofe.dev/api/docs'
    );

    expect(window.gtag).toHaveBeenCalledWith('event', 'project_click', {
      project_name: 'LMS NestJS',
      link_type: 'api_docs',
      destination_url: 'https://api-veltro.cr1stofe.dev/api/docs',
    });
  });

  it('should call window.gtag with contact_click payload', () => {
    trackContactClick(
      'linkedin',
      'https://linkedin.com/in/cristofe-albuquerque'
    );

    expect(window.gtag).toHaveBeenCalledWith('event', 'contact_click', {
      channel: 'linkedin',
      destination_url: 'https://linkedin.com/in/cristofe-albuquerque',
    });
  });

  it('should track language changes via gtag', () => {
    trackLanguageChange('en', 'pt');

    expect(window.gtag).toHaveBeenCalledWith('event', 'language_change', {
      previous_locale: 'en',
      new_locale: 'pt',
    });
  });

  it('should track CTA clicks via gtag', () => {
    trackCtaClick('hero_view_projects', '#projects');

    expect(window.gtag).toHaveBeenCalledWith('event', 'cta_click', {
      cta_name: 'hero_view_projects',
      destination_href: '#projects',
    });
  });

  it('should not throw if window.gtag is undefined', () => {
    delete (window as { gtag?: unknown }).gtag;

    expect(() => {
      sendAnalyticsEvent({
        event: 'cta_click',
        cta_name: 'test',
        destination_href: '#test',
      });
    }).not.toThrow();
  });
});
