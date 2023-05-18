'use client';

import useCities from "@/app/hooks/useCities";
import { SafeUser, SafeListing } from "@/app/types";

import Image from "next/image"
import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface ListingCardProps {
    data: SafeListing;
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId?: string;
    currentUser?: SafeUser | null
}

const ListingCard: React.FC<ListingCardProps> = ({
    data,
    onAction,
    disabled,
    actionLabel,
    actionId = "",
    currentUser
}) => {
    const router = useRouter();
    const { getByValue } = useCities();

    const location = getByValue(data.locationValue);

    const handleCancel = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();

            if (disabled) {
                return;
            }

            onAction?.(actionId);
        }, [onAction, actionId, disabled])

    return (
        <div
            onClick={() => router.push(`/listings/${data.id}`)}
            className="col-span-1 cursor-pointer"
        >
            <div className="flex flex-col w-full shadow overflow-hidden rounded-xl">
                <div className="aspect-square w-full relative">
                    <Image
                        fill
                        alt="Listing"
                        src={data.imageSrc}
                        className="h-full w-full transition"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <div className="font-semibold text-lg">
                        {data?.title}
                    </div>
                    <div className="text-sm rounded bg-sky-500 py-1 px-2 text-white">
                        {data.category}
                    </div>
                </div>
                <div className="flex justify-between items-center text-sm font-light text-neutral-500">
                    <div>
                        {location?.name}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ListingCard;