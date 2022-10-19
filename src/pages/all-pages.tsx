// Components
import {
    Hero, TipList, Layout,
} from '../components';

export const AllTopicsPage: React.FC = () => {
    return (
        <>
            { /* <Settings /> */ }
            <Layout>
                <Hero tipViewMode = 'all-topics' />
                <TipList tipViewMode = 'all-topics' />
            </Layout>
        </>
    );
};
