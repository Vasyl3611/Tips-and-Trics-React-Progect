// Hooks
import { useTags } from '../hooks';

// Helpers
import { fetchify, getTagIcon } from '../helpers';
import { TipViewMode } from '../types';

// Styles
import { TagsWrapper } from './styled/Tags.styles';

type Props = {
    tipViewMode : TipViewMode;
};

export const Tags: React.FC<Props> = ({ tipViewMode }) => {
    const {
        data, isFetched, setSelectedTagId, selectedTagId,
    } = useTags();

    const tagsJSX = Array.isArray(data) && data.map(({ id, name }) => {
        const TagIcon = getTagIcon(name);

        const handleClick = () => {
            setSelectedTagId(id);
        };

        return (
            <span
                role = 'listitem'
                data-active = { selectedTagId === id || tipViewMode === 'all-topics' }
                key = { id }
                className = 'tag'
                onClick = { handleClick }>
                <TagIcon />
                { name }
            </span>
        );
    });

    return (
        <TagsWrapper>
            { fetchify(isFetched, tagsJSX) }
        </TagsWrapper>
    );
};
