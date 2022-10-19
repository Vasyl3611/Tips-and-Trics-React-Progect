import { Link } from 'react-router-dom';
// hepers
import { getTagIcon, formatDate } from '../../helpers';

// Icons
import { ITipModel } from '../../types';

export const Tip: React.FC<IPropTypes> = (props) => {
    const {
        title, created, author, preview, tag, id,
    } = props;
    const TagIcon = getTagIcon(tag.name);
    const formattedDate = formatDate(created);

    return (
        <article>
            <header>
                <TagIcon />
                <h1>{ title }</h1>
            </header>
            <main>
                <time>
                    <TagIcon />
                    <div>
                        <span>🚀 { formattedDate }</span>
                        <span>
                            👨🏼‍🚀 Автор:  { author }
                        </span>
                    </div>
                </time>
                <h2>{ title }</h2>
                <p>{ preview }</p>
            </main>
            <footer>
                <Link to = { id }>📖 &nbsp;Читать полностью &rarr;</Link>
            </footer>
        </article>
    );
};

interface IPropTypes extends ITipModel {}

