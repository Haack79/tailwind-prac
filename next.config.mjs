/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**via.placeholder.com',
                port: '',
            },
        ],
    }
};

export default nextConfig;
