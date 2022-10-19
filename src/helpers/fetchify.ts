import { ReactElement } from 'react';

type ContentType = string | undefined | null | boolean | ReactElement[];

export const fetchify = (isFetched: boolean, content: ContentType) => {
    if (!isFetched && !content) {
        return 'Загрузка...';
    }

    if (typeof content !== 'undefined') {
        return content;
    }

    return null;
};
