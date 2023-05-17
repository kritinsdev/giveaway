'use client';

import useListingModal from "@/app/hooks/useListingModal";
import Modal from "./Modal";
import { useMemo, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Heading from "../Heading";
import { categories } from "../navbar/Categories";
import CategoryInput from "../inputs/CategoryInput";
import CitySelect from "../inputs/CitySelect";
import dynamic from "next/dynamic";
import Input from "../inputs/Input";
import ImageUpload from "../inputs/ImageUpload";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    IMAGES = 2,
    INFO = 3,
}

const ListingModal = () => {
    const router = useRouter();
    const listingModal = useListingModal();

    const [step, setStep] = useState(STEPS.CATEGORY);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        },
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            category: '',
            location: null,
            title: '',
            description: '',
            brand: '',
            width: null,
            height: null,
            depth: null,
            imageSrc: '',
        }
    })

    const category = watch('category');
    const location = watch('location');
    const brand = watch('brand');
    const width = watch('width');
    const height = watch('height');
    const depth = watch('depth');
    const imageSrc = watch('imageSrc');

    const Map = useMemo(() => dynamic(() => import('../Map'), {
        ssr: false
    }), [location])

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true
        })
    }

    const onPrevious = () => {
        setStep((value) => value - 1);
    }

    const onNext = () => {
        setStep((value) => value + 1);
    }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (step !== STEPS.INFO) {
            return onNext();
        }

        setIsLoading(true);

        axios.post('/api/listings', data)
            .then(() => {
                toast.success('Listing added!');
                router.refresh();
                reset();
                setStep(STEPS.CATEGORY);
                listingModal.onClose();
            })
            .catch((error) => {
                toast.error('Something went wrong');
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const actionLabel = useMemo(() => {
        if (step === STEPS.INFO) {
            return 'Create listing';
        }

        return 'Next';
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
            return undefined;
        }

        return 'Back';
    }, [step]);

    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading
                title="Category"
                subtitle="Pick a category"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto">
                {categories.map((cat) => (
                    <div
                        key={cat.label}
                        className="col-span-1"
                    >
                        <CategoryInput
                            onClick={(category) => setCustomValue('category', category)}
                            selected={category === cat.label}
                            label={cat.label}
                            icon={cat.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    );

    if (step === STEPS.LOCATION) {
        bodyContent = (
            <div>
                <Heading
                    title="Location"
                    subtitle="Approximate location"
                />
                <CitySelect
                    value={location}
                    onChange={(value) => setCustomValue('location', value)}
                />
                <Map
                    center={location?.latlng}
                />
            </div>
        )
    }

    if (step === STEPS.INFO) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Add information"
                    subtitle="What can you tell about this item"
                />

                <Input
                    id="title"
                    label="Title"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                />

                <Input
                    id="description"
                    label="Short description"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                />

                <hr />

                <Input
                    id="brand"
                    label="Brand"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                />

                <div className="flex flex-row gap-2">
                    <Input
                        id="width"
                        label="Width(cm)"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                    />

                    <Input
                        id="height"
                        label="Height(cm)"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                    />

                    <Input
                        id="depth"
                        label="Depth(cm)"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                    />
                </div>
            </div>
        )
    }

    if (step === STEPS.IMAGES) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Add photos"
                    subtitle="You can add multiple images"
                />

                <ImageUpload
                    value={imageSrc}
                    onChange={(value) => setCustomValue('imageSrc', value)}
                />
            </div>
        );
    }

    return (
        <Modal
            isOpen={listingModal.isOpen}
            onClose={listingModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.CATEGORY ? undefined : onPrevious}
            title="Add a listing"
            body={bodyContent}
        />
    );
}

export default ListingModal;