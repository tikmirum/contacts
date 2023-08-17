import { useState } from 'react';

import { UserProps } from '../../interfaces/user';
import * as Styled from './styles';

type UserCardProps = {
  card: UserProps;
};

export const UserCard = ({ card }: UserCardProps) => {
  const [CardShow, setCardShow] = useState(false);

  return (
    <Styled.All>
      <Styled.CardImage src={card.picture.large}></Styled.CardImage>
      <Styled.CardInfo>
        <Styled.Row>
          <Styled.CardLabel>NAME:</Styled.CardLabel>
          <Styled.CardNameValue>{`${card.name.first} ${card.name.last}`}</Styled.CardNameValue>
        </Styled.Row>
        <Styled.Row>
          <Styled.CardLabel>EMAIL:</Styled.CardLabel>
          <Styled.CardEmailValue>{card.email}</Styled.CardEmailValue>
        </Styled.Row>
        <Styled.Row>
          {CardShow ? (
            <>
              <Styled.CardLabel>AGE:</Styled.CardLabel>
              <Styled.CardAgeValue>{card.dob.age}</Styled.CardAgeValue>
            </>
          ) : null}
        </Styled.Row>

        <Styled.CardButton onClick={() => setCardShow(!CardShow)}>
          {CardShow ? 'Hide Age' : 'Show Age'}
        </Styled.CardButton>
      </Styled.CardInfo>
    </Styled.All>
  );
};
