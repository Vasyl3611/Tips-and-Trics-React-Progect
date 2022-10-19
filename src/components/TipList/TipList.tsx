import { useSelector } from 'react-redux';
import { Tip } from './Tip';

// Hooks
import { useTips } from '../../hooks';

// Helpers
import { fetchify } from '../../helpers';
import { getSelectedTagId } from '../../lib/redux/selectors';
import { ITipModel, TipViewMode } from '../../types';

// Layout
import { TipListWrapper } from '../styled/TipList.styles';

type Props = {
    tipViewMode: TipViewMode;
};

export const TipList: React.FC<Props> = ({ tipViewMode }) => {
    const { data, isFetched } = useTips();
    const selectedTagId = useSelector(getSelectedTagId);
    let tips = data;
    if (tipViewMode === 'topic-by-tag' && Array.isArray(data)) {
        tips = data.filter((tip) =>  tip.tag.id === selectedTagId);
    }
    const tipsJSX = tips.map((tip: ITipModel) => (
        <Tip key = { tip.id } { ...tip } />
    ));

    return (
        <TipListWrapper>
            { fetchify(isFetched, tipsJSX) }
        </TipListWrapper>
    );
};
