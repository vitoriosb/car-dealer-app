import { generateStaticParams } from "./src/lib/GenerateStaticParams";

const nextConfig = {
  async generateStaticParams() {
    return await generateStaticParams();
  },
};

export default nextConfig;
