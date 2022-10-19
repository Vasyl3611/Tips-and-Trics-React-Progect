import { RecentTipsAside, TagsAside, TipView } from '../features/tip-by-id';
import { Layout } from '../components';

export const TipByIdPage: React.FC = () => {
    return (
        <Layout>
            <section className = 'tip-view-layout'>
                <TipView />
                <section className = 'asides'>
                    <RecentTipsAside />
                    <TagsAside />
                </section>
            </section>
        </Layout>
    );
};
