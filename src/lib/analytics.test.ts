import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  sendAnalyticsEvent,
  trackProjectClick,
  trackContactClick,
  trackLanguageChange,
  trackCtaClick,
} from './analytics';

describe('Analytics Utility (Server-Side Proxy)', () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue({ ok: true });
  });

  it('should dispatch project_click to /api/analytics', () => {
    trackProjectClick(
      'LMS NestJS',
      'api_docs',
      'https://api-veltro.cr1stofe.dev/api/docs'
    );

    expect(global.fetch).toHaveBeenCalledWith('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'project_click',
        project_name: 'LMS NestJS',
        link_type: 'api_docs',
        destination_url: 'https://api-veltro.cr1stofe.dev/api/docs',
      }),
      keepalive: true,
    });
  });

  it('should dispatch contact_click to /api/analytics', () => {
    trackContactClick(
      'linkedin',
      'https://linkedin.com/in/cristofe-albuquerque'
    );

    expect(global.fetch).toHaveBeenCalledWith('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'contact_click',
        channel: 'linkedin',
        destination_url: 'https://linkedin.com/in/cristofe-albuquerque',
      }),
      keepalive: true,
    });
  });

  it('should dispatch language_change to /api/analytics', () => {
    trackLanguageChange('en', 'pt');

    expect(global.fetch).toHaveBeenCalledWith('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'language_change',
        previous_locale: 'en',
        new_locale: 'pt',
      }),
      keepalive: true,
    });
  });

  it('should dispatch cta_click to /api/analytics', () => {
    trackCtaClick('hero_view_projects', '#projects');

    expect(global.fetch).toHaveBeenCalledWith('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'cta_click',
        cta_name: 'hero_view_projects',
        destination_href: '#projects',
      }),
      keepalive: true,
    });
  });

  it('should handle fetch errors gracefully without throwing', () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network failure'));

    expect(() => {
      sendAnalyticsEvent({
        event: 'cta_click',
        cta_name: 'test',
        destination_href: '#test',
      });
    }).not.toThrow();
  });
});
