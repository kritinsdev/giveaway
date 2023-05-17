'use client';

import useCities from '@/app/hooks/useCities';
import Select from 'react-select';

export type CitySelectValue = {
    name: string,
    latlng: number[],
    value: string
}

interface CitySelectProps {
    value?: CitySelectValue;
    onChange: (value: CitySelectValue) => void;
}

const CitySelect: React.FC<CitySelectProps> = ({
    value,
    onChange
}) => {
    const { getAll } = useCities();

    return (
        <div>
            <Select
                placeholder="City"
                isClearable
                options={getAll()}
                value={value}
                onChange={(value) => onChange(value as CitySelectValue)}
                classNames={{
                    control: () => 'p-3 border-2 my-4',
                    input: () => 'text-lg',
                    option: () => 'text-lg'
                }}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 6,
                    colors: {
                        ...theme.colors,
                        primary: 'black',
                        primary25: '#ffe4e6'
                    }
                })}
            />
        </div>
    );
}

export default CitySelect;