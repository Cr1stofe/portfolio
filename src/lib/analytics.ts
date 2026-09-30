export interface ProjectClickEvent {
  event: 'project_click';
  project_name: string;
  link_type: 'live_demo' | 'api_docs' | 'github_repo';
  destination_url: string;
}

export interface ContactClickEvent {
  event: 'contact_click';
  channel: 'linkedin' | 'github' | 'email' | 'whatsapp';
  destination_url: string;
}

export interface LanguageChangeEvent {
  event: 'language_change';
  previous_locale: string;
  new_locale: string;
}

export interface CtaClickEvent {
  event: 'cta_click';
  cta_name: string;
  destination_href: string;
}

export type AnalyticsEvent =
  ProjectClickEvent | ContactClickEvent | LanguageChangeEvent | CtaClickEvent;

export function sendAnalyticsEvent(data: AnalyticsEvent): void {
  if (typeof window === 'undefined') return;

  try {
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      keepalive: true,
    }).catch(() => {});
  } catch {
    // no-op
  }
}

export function trackProjectClick(
  projectName: string,
  linkType: 'live_demo' | 'api_docs' | 'github_repo',
  destinationUrl: string
): void {
  sendAnalyticsEvent({
    event: 'project_click',
    project_name: projectName,
    link_type: linkType,
    destination_url: destinationUrl,
  });
}

export function trackContactClick(
  channel: 'linkedin' | 'github' | 'email' | 'whatsapp',
  destinationUrl: string
): void {
  sendAnalyticsEvent({
    event: 'contact_click',
    channel,
    destination_url: destinationUrl,
  });
}

export function trackLanguageChange(
  previousLocale: string,
  newLocale: string
): void {
  sendAnalyticsEvent({
    event: 'language_change',
    previous_locale: previousLocale,
    new_locale: newLocale,
  });
}

export function trackCtaClick(ctaName: string, destinationHref: string): void {
  sendAnalyticsEvent({
    event: 'cta_click',
    cta_name: ctaName,
    destination_href: destinationHref,
  });
}
