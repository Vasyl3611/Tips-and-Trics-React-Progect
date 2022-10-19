import styled from 'styled-components';

export const TagsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-content: flex-start;
    justify-content: center;
    min-height: 135px;
    padding: 15px;
    background-color: var(--color-7);
    border-radius: var(--rounded-corners-bottom);

    // Loading indicator
    & h1 {
        color: var(--color-2);
    }

    .tag {
        display: flex;
        align-items: center;
        padding: 8px 14px;
        color: var(--color-2);
        cursor: pointer;
        background-color: var(--color-4);
        border: 2px solid transparent;
        border-radius: 30px;
        transition: border-color 0.1s ease;
    
        &:hover {
            border-color: var(--color-6);
        }
    
        &[data-active='true'] {
            border-color: var(--color-3);
        }
    
        & svg {
            --size: 24px;
    
            width: var(--size);
            height: var(--size);
            margin-right: 5px;
        }
    
        @media screen and (max-width: 1024px) {
            padding: 5px 7px;
            font-size: 14px;
            border: 1px solid transparent;
            border-radius: 20px;
        }
    }
    
`;
