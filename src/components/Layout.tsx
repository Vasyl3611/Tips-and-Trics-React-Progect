import { Nav } from './Nav';

// Styles
import { LayoutWrapper } from './styled/Layout.styles';

type Props = {
    children: React.ReactElement | React.ReactElement[];
};

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <LayoutWrapper>
            <Nav />
            { children }
        </LayoutWrapper>
    );
};
