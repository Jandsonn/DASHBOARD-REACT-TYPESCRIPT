import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

import  { Container }  from './styles';

const List: React.FC = () => {
    const options = [
        {value: 'Jandson', label: 'Jandson'},
        {value: 'Eduarda', label: 'Eduarda'},
        {value: 'Lisboa', label: 'Lisboa'},
    ];

    return(
        <Container>
             <ContentHeader title="Saídas" lineColor="#D71C18">
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    )
}

export default List;