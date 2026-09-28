import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectsCarousel, type ProjectItem } from './ProjectsCarousel';

const mockProjects: ProjectItem[] = [
  {
    title: 'LMS Platform Next.js',
    category: 'Full Stack',
    status: 'Em Produção',
    description: 'Plataforma educacional com Next.js e TypeScript.',
    highlights: ['Server Components', 'Autenticação segura'],
    stack: ['Next.js 16', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Cr1stofe/lms-front-next',
    featuredIcon: <span data-testid="test-icon">icon</span>,
    accentBg: 'bg-white',
    accentBorder: 'border-slate-200',
    accentIcon: 'bg-ocean-50 text-ocean-700',
    accentHover: 'hover:text-ocean-700',
  },
];

describe('ProjectsCarousel Component', () => {
  it('should render project titles and descriptions', () => {
    render(
      <ProjectsCarousel
        projects={mockProjects}
        highlightsLabel="Destaques de Engenharia"
        viewRepo="Ver Repositório"
      />
    );

    expect(screen.getAllByText('LMS Platform Next.js')[0]).toBeInTheDocument();
    expect(
      screen.getAllByText('Plataforma educacional com Next.js e TypeScript.')[0]
    ).toBeInTheDocument();
  });

  it('should render highlights and stack tags', () => {
    render(
      <ProjectsCarousel
        projects={mockProjects}
        highlightsLabel="Destaques de Engenharia"
        viewRepo="Ver Repositório"
      />
    );

    expect(screen.getAllByText('Server Components')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Next.js 16')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Tailwind CSS')[0]).toBeInTheDocument();
  });

  it('should render external links with target="_blank" pointing to the repository', () => {
    render(
      <ProjectsCarousel
        projects={mockProjects}
        highlightsLabel="Destaques de Engenharia"
        viewRepo="Ver Repositório"
      />
    );

    const repoLinks = screen.getAllByRole('link', { name: /ver repositório/i });
    expect(repoLinks.length).toBeGreaterThan(0);
    expect(repoLinks[0]).toHaveAttribute(
      'href',
      'https://github.com/Cr1stofe/lms-front-next'
    );
    expect(repoLinks[0]).toHaveAttribute('target', '_blank');
  });
});
