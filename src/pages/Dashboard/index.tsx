import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

import { Container } from './styles';

const Dashboard: React.FC = () => {
    
    const options =[
        {value: 'Jandson', label: 'Jandson'},
        {value: 'Eduarda', label: 'Eduarda'},
        {value: 'Lisboa', label: 'Lisboa'},
    ]

    
    return(
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F28A20">
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    )
}

export default Dashboard;