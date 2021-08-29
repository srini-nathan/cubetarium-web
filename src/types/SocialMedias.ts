interface SocialMedia {
    path: string,
    route:string
}

const SocialMedias = {
    Twitter: {
        path: '/twitter',
        route: 'https://twitter.com/cubetarium/'
    } as SocialMedia,
    Discord: {
        path:'/discord',
        route: 'https://discord.com/invite/xHUXWTjKdj'
    } as SocialMedia
}

export default SocialMedias;