import { Layout, Nav } from '../components';
import { PublishTipForm } from '../components/forms/PublishTipForm';

export const PublishPage: React.FC = () => {
    return (
        <Layout>
            <Nav />
            <PublishTipForm />
        </Layout>
    );
};
