import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import DashboardTable from '@/app/(dashboard)/_components/DashboardTable';
import { ReduxProvider } from '@/redux/provider';

jest.mock('next/dynamic', () => () => {
  return function DynamicComponent(props) {
    return <div {...props} />;
  };
});

describe('DashboardTable', () => {
  const renderDashboardTable = () => {
    return render(
      <ReduxProvider>
        <DashboardTable />
      </ReduxProvider>
    );
  };

  it('displays loading state', () => {
    renderDashboardTable();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('handles pagination changes', () => {
    renderDashboardTable();
    const select = screen.getByRole('combobox');
    fireEvent.mouseDown(select);
    const option = screen.getByRole('option', { name: '25' });
    fireEvent.click(option);
    expect(select).toHaveTextContent('25');
  });
}); 