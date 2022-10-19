import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchify, formatDate, getTagIcon } from '../../helpers';
import { useTipById } from '../../hooks';

export const TipView: React.FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { data: tipToView, isFetchedAfterMount } = useTipById(params.id);

    useEffect(() => {
        if (!tipToView && isFetchedAfterMount) {
            navigate('..', { replace: true });
        }
    }, [tipToView, isFetchedAfterMount]);

    const TagIcon = getTagIcon(tipToView?.tag?.name);

    const goBack = () => {
        navigate('..');
    };

    return (
        <>
            <article>
                <header>
                    <TagIcon /> <h1>{ fetchify(isFetchedAfterMount, tipToView?.title) }</h1>
                </header>
                <main>
                    <time>
                        <TagIcon />
                        <div>
                            <span>{
                                fetchify(isFetchedAfterMount, formatDate(tipToView?.created))
                            }</span>
                            <span>
                            Автор:
                                { fetchify(isFetchedAfterMount, tipToView?.author) }
                            </span>
                        </div>
                    </time>
                </main>
                <footer>
                    <a onClick = { goBack }>&larr;&nbsp;Назад</a>
                </footer>
            </article>
            <main>{ fetchify(isFetchedAfterMount, tipToView?.body) }</main>
        </>
    );
};
