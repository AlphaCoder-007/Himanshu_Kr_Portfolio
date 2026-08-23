import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

// Bulletproof mock for framer-motion to avoid JSDOM compatibility issues
vi.mock('framer-motion', () => ({
  motion: {
    div: vi.fn().mockImplementation(({ children, className, onClick, id, role }) => (
      <div className={className} onClick={onClick} id={id} role={role}>
        {children}
      </div>
    )),
    h1: vi
      .fn()
      .mockImplementation(({ children, className }) => <h1 className={className}>{children}</h1>),
    h2: vi
      .fn()
      .mockImplementation(({ children, className }) => <h2 className={className}>{children}</h2>),
    p: vi
      .fn()
      .mockImplementation(({ children, className }) => <p className={className}>{children}</p>),
    form: vi.fn().mockImplementation(({ children, className, onSubmit, noValidate }) => (
      <form className={className} onSubmit={onSubmit} noValidate={noValidate}>
        {children}
      </form>
    )),
    section: vi.fn().mockImplementation(({ children, id, className }) => (
      <section id={id} className={className}>
        {children}
      </section>
    )),
    ul: vi
      .fn()
      .mockImplementation(({ children, className }) => <ul className={className}>{children}</ul>),
    li: vi
      .fn()
      .mockImplementation(({ children, className }) => <li className={className}>{children}</li>),
    svg: vi.fn().mockImplementation(({ children, className, viewBox, fill, xmlns, ...props }) => (
      <svg className={className} viewBox={viewBox} fill={fill} xmlns={xmlns} {...props}>
        {children}
      </svg>
    )),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// Mock useSiteConfig to return default values in tests
vi.mock('../hooks/useSiteConfig', () => ({
  useSiteConfig: () => ({
    gitURL: 'https://github.com/testuser',
    linkedInURL: 'https://www.linkedin.com/in/testuser',
  }),
}));

// Mock window.matchMedia which doesn't exist in JSDOM
beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  // Mock fetch for config.json
  globalThis.fetch = vi.fn().mockResolvedValue({
    json: () =>
      Promise.resolve({
        gitURL: 'https://github.com/testuser',
        linkedInURL: 'https://www.linkedin.com/in/testuser',
      }),
  });

  // Clear localStorage
  localStorage.clear();
});

describe('Portfolio Application Test Suite', () => {
  it('renders Header with navigation links and active home link', () => {
    render(<App />);

    // Check that header links exist
    const navHome = screen.getAllByText('Home')[0];
    const navAbout = screen.getAllByText('About')[0];
    const navSkills = screen.getAllByText('Skills')[0];

    expect(navHome).toBeInTheDocument();
    expect(navAbout).toBeInTheDocument();
    expect(navSkills).toBeInTheDocument();
  });

  it('can toggle theme from light to dark', () => {
    render(<App />);

    const root = document.documentElement;

    // Initial should be light (or based on matches: false)
    expect(root.classList.contains('light')).toBe(true);

    // Find theme toggle button (labeled as "Switch to dark mode")
    const themeToggles = screen.getAllByLabelText(/Switch to dark mode/i);
    expect(themeToggles[0]).toBeInTheDocument();

    // Click toggle
    fireEvent.click(themeToggles[0]);
    expect(root.classList.contains('dark')).toBe(true);
    expect(root.classList.contains('light')).toBe(false);
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('handles project filtering based on category selection', async () => {
    render(<App />);

    // Find category filter buttons
    const filterAll = screen.getByRole('button', { name: 'All Projects' });
    const filterAutomation = screen.getByRole('button', { name: 'automation' });

    expect(filterAll).toBeInTheDocument();
    expect(filterAutomation).toBeInTheDocument();

    // Check that fullstack projects are visible initially
    expect(screen.getByText('Bug Tracking System')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Reporting Application')).toBeInTheDocument();

    // Check that automation projects are also visible (in "All Projects" mode)
    expect(screen.getByText('Enterprise Web Automation Framework')).toBeInTheDocument();
    expect(screen.getByText('End-to-End Test Automation Platform')).toBeInTheDocument();

    // Click "automation" filter — automation projects should be visible, fullstack hidden
    fireEvent.click(filterAutomation);

    expect(screen.getByText('Enterprise Web Automation Framework')).toBeInTheDocument();
    expect(screen.getByText('End-to-End Test Automation Platform')).toBeInTheDocument();
    expect(screen.queryByText('Bug Tracking System')).not.toBeInTheDocument();
    expect(screen.queryByText('Full Stack Reporting Application')).not.toBeInTheDocument();
  });

  it('can open project modal details and close it', async () => {
    render(<App />);

    // Click on a project card to select it
    const projectCard = screen.getByText('Bug Tracking System');
    fireEvent.click(projectCard);

    // Modal should open, and should show detailed overview sections
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('The Engineering Challenge')).toBeInTheDocument();
    expect(screen.getByText('The Implemented Solution')).toBeInTheDocument();

    // Click on close button inside modal
    const closeBtn = screen.getByLabelText('Close project modal');
    fireEvent.click(closeBtn);

    // Modal should close
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('validates contact form fields and shows error state, then allows successful transmission', async () => {
    render(<App />);

    const nameInput = screen.getByPlaceholderText('Alex Mercer');
    const emailInput = screen.getByPlaceholderText('alex.mercer@example.com');
    const messageInput = screen.getByPlaceholderText(/Describe your testing needs/i);
    const submitBtn = screen.getByRole('button', { name: /Submit Message/i });

    // Submit empty form
    fireEvent.click(submitBtn);

    // Errors should appear
    expect(screen.getByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Message is required')).toBeInTheDocument();

    // Fill form with invalid email
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john-invalid-email' } });
    fireEvent.change(messageInput, {
      target: { value: 'Hello, looking for a framework consult.' },
    });

    fireEvent.click(submitBtn);

    expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();

    // Correct email and submit again
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.click(submitBtn);

    // Button state should change to submitting
    expect(screen.getByText('Transmitting Payload...')).toBeInTheDocument();

    // Wait for simulate API submit success message
    await waitFor(
      () => {
        expect(screen.getByText('Transmission Complete!')).toBeInTheDocument();
      },
      { timeout: 2000 },
    );
  });
});
