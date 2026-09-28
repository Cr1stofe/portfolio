import { describe, it, expect } from 'vitest';
import { generatePersonSchema } from './schema';

describe('generatePersonSchema', () => {
  it('should generate valid Person and WebSite schema graph for pt locale', () => {
    const schema = generatePersonSchema('pt', 'https://cr1stofe.dev');

    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@graph']).toHaveLength(2);

    const person = schema['@graph'][0];
    expect(person['@type']).toBe('Person');
    expect(person.jobTitle).toBe('Desenvolvedor Full Stack');
    expect(person.url).toBe('https://cr1stofe.dev');
    expect(person.sameAs).toContain('https://github.com/Cr1stofe');

    const website = schema['@graph'][1];
    expect(website['@type']).toBe('WebSite');
    expect(website.inLanguage).toBe('pt-BR');
  });

  it('should generate valid Person schema for en locale', () => {
    const schema = generatePersonSchema('en', 'https://cr1stofe.dev');
    const person = schema['@graph'][0];
    const website = schema['@graph'][1];

    expect(person.jobTitle).toBe('Full Stack Developer');
    expect(website.inLanguage).toBe('en-US');
  });
});
