'use client';

import Container from "../Container";
import CategoryBox from "../CategoryBox";
import { TbCherry } from 'react-icons/tb';
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
    {
        label: 'Computers',
        icon: TbCherry,
        description: 'Some lorem description'
    },
    {
        label: 'Clothing',
        icon: TbCherry,
        description: 'Some lorem description'
    },
    {
        label: 'House Appliances',
        icon: TbCherry,
        description: 'Some lorem description'
    },
    {
        label: 'Furniture',
        icon: TbCherry,
        description: 'Some lorem description'
    },
    {
        label: 'Shoes',
        icon: TbCherry,
        description: 'Some lorem description'
    },
    {
        label: 'Electronics',
        icon: TbCherry,
        description: 'Some lorem description'
    },
    {
        label: 'Other',
        icon: TbCherry,
        description: 'Some lorem description'
    },
    {
        label: 'Beauty',
        icon: TbCherry,
        description: 'Some lorem description'
    },
    {
        label: 'Construction',
        icon: TbCherry,
        description: 'Some lorem description'
    },
    {
        label: 'Tools',
        icon: TbCherry,
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