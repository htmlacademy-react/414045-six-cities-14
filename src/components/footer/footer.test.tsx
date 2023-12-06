import {withRouter} from '../../mocks/mock-component.tsx';
import Footer from './footer.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: Footer', () => {
  it('should render correctly', () => {
    const componentWithRouter = withRouter(<Footer/>);

    render(componentWithRouter);

    expect(screen.getByAltText('6 cities logo'));
  });
});
