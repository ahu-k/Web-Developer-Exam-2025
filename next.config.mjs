/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions:{
        quietDeps: true
    },

    devIndicators:false,
    
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '4000',
                pathname: '/file-bucket/**',
                search: '',
            },
        ],
    },
};

export default nextConfig;

//Overstående kode er kopiret fra en af mine tidligere opgaver.