import { ProfileViewDetailed } from "atproto/packages/api/src/client/types/app/bsky/actor/defs";
import { FeedViewPost, PostView } from "atproto/packages/api/src/client/types/app/bsky/feed/defs";
import { getSettings } from "../store/settings";

const list = [
    "rick",
];

const blacklist = (
    data: ProfileViewDetailed | FeedViewPost,
    customList?: any[]
) => {
    const isProfileList = data.did;
    const localList = (customList && customList?.filter(i => (i as string).trim().length > 1)) || getSettings()?.blacklist || [];

    if (isProfileList) {
        const isBlacked = [...list, ...localList].filter(i => (data.handle as string).includes(i)).length;
        return !isBlacked;
    } else {
        // @ts-ignore
        const isBlacked = [...list, ...localList].filter(i =>
            // @ts-ignore
            ((data.post as PostView)?.record?.text as string)?.toLowerCase().includes(i)
            // @ts-ignore
            || (data?.reply?.parent?.record?.text as string)?.toLocaleLowerCase().includes(i)
            // @ts-ignore
            || (data?.reply?.root?.record?.text as string)?.toLocaleLowerCase().includes(i)
            // @ts-ignore
            || (data?.post?.author?.handle as string)?.toLocaleLowerCase().includes(i)
            // @ts-ignore
            || (data?.post?.author?.displayName as string)?.toLocaleLowerCase().includes(i)
            // @ts-ignore
            || (data?.reply?.parent?.author?.displayName as string)?.toLocaleLowerCase().includes(i)
            // @ts-ignore
            || (data?.reply?.root?.author?.displayName as string)?.toLocaleLowerCase().includes(i)
        ).length;

        return !isBlacked;
    }
}

export default blacklist;