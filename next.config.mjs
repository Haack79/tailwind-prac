/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**via.placeholder.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'unsplash.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
            }
        ],
    }
};

export default nextConfig;
