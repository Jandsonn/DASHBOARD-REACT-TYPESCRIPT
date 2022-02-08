import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import { Container, Content, Filters } from './styles';

const List: React.FC = () => {
  const months = [
    { value: 7, label: 'Julho' },
    { value: 8, label: 'Agosto' },
    { value: 9, label: 'Setembro' },
  ];

  const years = [
    { value: 2022, label: 2022 },
    { value: 2019, label: 2019 },
    { value: 2018, label: 2018 },
  ];




  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#D71C18">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        
        <button type="button" className="tag-filter tag-filter-recurrents">
           Recorrentes  
        </button>

        <button type="button" className="tag-filter tag-filter-eventual">
           Eventuais  
        </button>

      </Filters>



      <Content>
        <HistoryFinanceCard
          tagColor="#D71C18"
          title="Conta de Luz"
          subtitle="08/02/2022"
          amount="R$ 170,00"
        />


      </Content>

    </Container>
  )
}

export default List;