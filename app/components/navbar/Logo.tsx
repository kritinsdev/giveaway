'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import {BiGift} from 'react-icons/bi';

const Logo = () => {
    const router = useRouter();

    return (
        <div className="flex items-center gap-1">
            <BiGift size={32} />
            <span className="font-bold text-lg uppercase">Giveaway</span>
        </div>

    );
}

export default Logo;