import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StatusBadge, { Status } from '@/components/StatusBadge';

describe('StatusBadge', () => {
  const statuses: Status[] = ['alive', 'dead', 'boxed', 'released'];

  it('renders a badge for each status', () => {
    statuses.forEach((s) => {
      render(<StatusBadge status={s} />);
      const badge = screen.getByText(s);
      expect(badge).toBeInTheDocument();
    });
  });
});
