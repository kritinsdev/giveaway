'use client';

import useListingModal from "@/app/hooks/useListingModal";
import Modal from "./Modal";
import { useState } from "react";

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4
}

const ListingModal = () => {
    const listingModal = useListingModal();

    const [step, setStep] = useState(STEPS.CATEGORY);

    return (
        <Modal
            isOpen={listingModal.isOpen}
            onClose={listingModal.onClose}
            onSubmit={listingModal.onClose}
            actionLabel="Submit"
            title="Add a listing"
        />
    );
}

export default ListingModal;