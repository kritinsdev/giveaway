'use client';

import Container from "../Container";
import CategoryBox from "../CategoryBox";
import { TbFridge, TbPlant, TbMoodKid, TbQuestionMark, TbDog } from 'react-icons/tb';
import { GiClothes, GiBroom } from 'react-icons/gi';
import { MdDesk, MdSportsTennis, MdTabletMac } from 'react-icons/md';
import { BsTools, BsBalloon } from 'react-icons/bs';
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
    {
        label: 'Sadzīves tehnika',
        icon: TbFridge,
        description: 'Some lorem description'
    },
    {
        label: 'Apģērbs',
        icon: GiClothes,
        description: 'Some lorem description'
    },
    {
        label: 'Mēbeles',
        icon: MdDesk,
        description: 'Some lorem description'
    },
    {
        label: 'Dārzam',
        icon: TbPlant,
        description: 'Some lorem description'
    },
    {
        label: 'Bērniem',
        icon: TbMoodKid,
        description: 'Some lorem description'
    },
    {
        label: 'Elektronika',
        icon: MdTabletMac,
        description: 'Some lorem description'
    },
    {
        label: 'Sports',
        icon: MdSportsTennis,
        description: 'Some lorem description'
    },
    {
        label: 'Dzīvnieki',
        icon: TbDog,
        description: 'Some lorem description'
    },
    {
        label: 'Darbarīki',
        icon: BsTools,
        description: 'Some lorem description'
    },
    {
        label: 'Mājsaimniecība',
        icon: GiBroom,
        description: 'Some lorem description'
    },
    {
        label: 'Atpūta',
        icon: BsBalloon,
        description: 'Some lorem description'
    },
    {
        label: 'Cits',
        icon: TbQuestionMark,
        description: 'Some lorem description'
    },
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathName = usePathname();

    const isHomePage = pathName === '/';

    if (!isHomePage) {
        return null;
    }

    return (
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
    );
}

export default Categories;