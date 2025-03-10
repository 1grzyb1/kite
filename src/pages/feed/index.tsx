import { AppBskyFeedGetTimeline } from 'atproto/packages/api';
import { FeedViewPost } from 'atproto/packages/api/src/client/types/app/bsky/feed/defs';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { SESSION_LOCAL_STORAGE_KEY, default as agent, default as atp } from '../../Agent';
import Blue from '../../components/Blue/Blue';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import Sidebar from '../../components/Sidebar/Sidebar';
import { uiAtom } from '../../store/ui';
import SkyCol from './SkyCol';
import Skyline from './Skyline';

export default function Feed(props: {}) {
    const ui = useAtomValue(uiAtom);

    return (
        <Layout className='home'>
            <Skyline />
            {ui.hot ? <SkyCol /> : ''}
        </Layout>
    );
}