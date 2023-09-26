import "./env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		serverActions: true,
		swcPlugins: [["@swc-jotai/react-refresh", {}]],
	},
};

export default nextConfig;
