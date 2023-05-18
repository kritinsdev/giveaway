'use client';
import useSearchModal from '@/app/hooks/useSearchModal';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
    const searchModal = useSearchModal();

    return (
        <div
            onClick={searchModal.onOpen}
            className="w-full md:w-auto py-2 rounded-full hover:scale-110 transition cursor-pointer"
        >
            <div className="flex flex-row items-center justify-between">
                <div className="p-2">
                    <BiSearch size={20} />
                </div>
            </div>
        </div>
    );
}

export default Search;