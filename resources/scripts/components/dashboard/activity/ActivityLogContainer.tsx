import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import FlashMessageRender from '@/components/FlashMessageRender';
import PageContentBlock from '@/components/elements/PageContentBlock';
// FIXME: add icons back
import Spinner from '@/components/elements/Spinner';
import ActivityLogEntry from '@/components/elements/activity/ActivityLogEntry';
import { styles as btnStyles } from '@/components/elements/button/index';
import PaginationFooter from '@/components/elements/table/PaginationFooter';

import { ActivityLogFilters, useActivityLogs } from '@/api/account/activity';

import { useFlashKey } from '@/plugins/useFlash';
import * as Tooltip from '@radix-ui/react-tooltip';
// import Tooltip from '@/components/elements/tooltip/Tooltip';
import useLocationHash from '@/plugins/useLocationHash';

export default () => {
    const { hash } = useLocationHash();
    const { clearAndAddHttpError } = useFlashKey('account');
    const [filters, setFilters] = useState<ActivityLogFilters>({ page: 1, sorts: { timestamp: -1 } });
    const { data, isValidating, error } = useActivityLogs(filters, {
        revalidateOnMount: true,
        revalidateOnFocus: false,
    });

    useEffect(() => {
        setFilters((value) => ({ ...value, filters: { ip: hash.ip, event: hash.event } }));
    }, [hash]);

    useEffect(() => {
        clearAndAddHttpError(error);
    }, [error]);

    return (
        <PageContentBlock title={'Account Activity Log'}>
            <FlashMessageRender byKey={'account'} />
            {(filters.filters?.event || filters.filters?.ip) && (
                <div className={'flex justify-end mb-2'}>
                    <Link
                        to={'#'}
                        className={clsx(btnStyles.button, btnStyles.text, 'w-full sm:w-auto')}
                        onClick={() => setFilters((value) => ({ ...value, filters: {} }))}
                    >
                        Clear Filters
                    </Link>
                </div>
            )}
            {!data && isValidating ? (
                <Spinner centered />
            ) : (
                <div className={'bg-zinc-700'}>
                    {data?.items.map((activity) => (
                        <ActivityLogEntry key={activity.id} activity={activity}>
                            {typeof activity.properties.useragent === 'string' && (
                                <Tooltip content={activity.properties.useragent} placement={'top'}>
                                <span>{/* <DesktopComputerIcon /> */}</span>
                                </Tooltip>
                            )}
                        </ActivityLogEntry>
                    ))}
                </div>
            )}
            {data && (
                <PaginationFooter
                    pagination={data.pagination}
                    onPageSelect={(page) => setFilters((value) => ({ ...value, page }))}
                />
            )}
        </PageContentBlock>
    );
};
