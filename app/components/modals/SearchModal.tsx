import useSearchModal from "@/app/hooks/useSearchModal";
import Modal from "./Modal";

const searchModal = () => {
    const searchModal = useSearchModal();
    return (
        <Modal
            isOpen={searchModal.isOpen}
            onClose={searchModal.onClose}
        />
    );
}

export default searchModal;