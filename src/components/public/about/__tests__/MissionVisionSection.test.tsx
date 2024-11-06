import { render, screen } from '@testing-library/react';
import MissionVisionSection from '../MissionVisionSection';

// Mock framer-motion to avoid animation-related issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<object>) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: React.PropsWithChildren<object>) => <h2 {...props}>{children}</h2>,
  },
}));

describe('MissionVisionSection', () => {
  it('renders section title', () => {
    render(<MissionVisionSection />);
    expect(screen.getByText('Our Mission & Vision')).toBeInTheDocument();
  });

  it('displays mission content', () => {
    render(<MissionVisionSection />);
    expect(screen.getByText('Our Mission')).toBeInTheDocument();
    expect(screen.getByText(/To provide exceptional education/)).toBeInTheDocument();
    expect(screen.getByText('Foster academic excellence')).toBeInTheDocument();
  });

  it('displays vision content', () => {
    render(<MissionVisionSection />);
    expect(screen.getByText('Our Vision')).toBeInTheDocument();
    expect(screen.getByText(/To be a leading educational institution/)).toBeInTheDocument();
    expect(screen.getByText('Lead in educational innovation')).toBeInTheDocument();
  });

  it('renders all mission points', () => {
    render(<MissionVisionSection />);
    expect(screen.getByText('Foster academic excellence')).toBeInTheDocument();
    expect(screen.getByText('Develop critical thinking skills')).toBeInTheDocument();
    expect(screen.getByText('Promote ethical behavior')).toBeInTheDocument();
    expect(screen.getByText('Encourage community engagement')).toBeInTheDocument();
  });

  it('renders all vision points', () => {
    render(<MissionVisionSection />);
    expect(screen.getByText('Lead in educational innovation')).toBeInTheDocument();
    expect(screen.getByText('Create inclusive learning spaces')).toBeInTheDocument();
    expect(screen.getByText('Build global partnerships')).toBeInTheDocument();
    expect(screen.getByText('Inspire lifelong learning')).toBeInTheDocument();
  });
}); 