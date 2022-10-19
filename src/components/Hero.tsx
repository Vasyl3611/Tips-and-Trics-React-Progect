// Components
import { TipViewMode } from '../types';
import { Tags } from './Tags';

type Props = {
    tipViewMode: TipViewMode;
};

export const Hero: React.FC<Props> = ({ tipViewMode }) => {
    return (
        <section className = 'hero'>
            <div className = 'title'>
                <h1>Типсы и Триксы</h1>
                <h2>Все темы</h2>
            </div>

            <Tags tipViewMode = { tipViewMode } />
        </section>
    );
};
