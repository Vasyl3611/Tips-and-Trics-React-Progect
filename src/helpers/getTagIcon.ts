// Instruments
import { icons } from '../theme/icons/tag';

export const getTagIcon = (tag = 'JavaScript') => {
    const TagIcon = icons[ tag ];

    // Возвращает SVG компонент из папки /theme/icons/tag
    // по имени тега выбирается нужный *.tsx файл
    return TagIcon;
};
