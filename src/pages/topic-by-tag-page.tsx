// Components
import {
    Hero, Layout, TipList,
} from '../components';

export const TopicByTagPage: React.FC = () => {
    return (
        <>
            <Layout>
                <Hero tipViewMode = 'topic-by-tag' />
                <TipList tipViewMode = 'topic-by-tag' />
            </Layout>
        </>
    );
};
