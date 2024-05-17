import styled from 'styled-components';

import Button from '@/components/elements/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import { PaginatedResult } from '@/api/http';

interface RenderFuncProps<T> {
    items: T[];
    isLastPage: boolean;
    isFirstPage: boolean;
}

interface Props<T> {
    data: PaginatedResult<T>;
    showGoToLast?: boolean;
    showGoToFirst?: boolean;
    onPageSelect: (page: number) => void;
    children: (props: RenderFuncProps<T>) => React.ReactNode;
}

const Block = styled(Button)``;

function Pagination<T>({ data: { items, pagination }, onPageSelect, children }: Props<T>) {
    const isFirstPage = pagination.currentPage === 1;
    const isLastPage = pagination.currentPage >= pagination.totalPages;

    const pages = [];

    // Start two spaces before the current page. If that puts us before the starting page default
    // to the first page as the starting point.
    const start = Math.max(pagination.currentPage - 2, 1);
    const end = Math.min(pagination.totalPages, pagination.currentPage + 5);

    for (let i = start; i <= end; i++) {
        // @ts-ignore
        pages.push(i);
    }

    return (
        <>
            {children({ items, isFirstPage, isLastPage })}
            {pages.length > 1 && (
                <div className={`mt-4 flex justify-center`}>
                    {(pages?.[0] ?? 0) > 1 && !isFirstPage && (
                        <Block isSecondary color={'primary'} onClick={() => onPageSelect(1)}>
                            <FontAwesomeIcon icon={faAngleDoubleLeft} />
                        </Block>
                    )}
                    {pages.map((i) => (
                        <Block
                            isSecondary={pagination.currentPage !== i}
                            color={'primary'}
                            key={`block_page_${i}`}
                            onClick={() => onPageSelect(i)}
                        >
                            {i}
                        </Block>
                    ))}
                    {(pages?.[4] ?? 0) < pagination.totalPages && !isLastPage && (
                        <Block isSecondary color={'primary'} onClick={() => onPageSelect(pagination.totalPages)}>
                            <FontAwesomeIcon icon={faAngleDoubleRight} />
                        </Block>
                    )}
                </div>
            )}
        </>
    );
}

export default Pagination;
