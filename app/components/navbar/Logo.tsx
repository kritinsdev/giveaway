'use client';

import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push('/')}
            className="flex items-center gap-1 hover:cursor-pointer">
            <span className="font-bold text-lg uppercase">Giveaway</span>
        </div>

    );
}

export default Logo;