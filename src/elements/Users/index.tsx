import { useEffect, useState } from 'react';

import * as Styled from './styles';
import { UserProps } from '../../interfaces/user';
import { UserCard } from 'components/UserCard';

export const Users = () => {
  const [cards, setCards] = useState<UserProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api?results=10');

        if (response) {
          const data = await response.json();
          setCards(data.results);
        }
      } catch (err) {
        console.error(err);
      }
    };

    void fetchData();
  }, []);

  return (
    <Styled.All>
      <Styled.Column>
        {cards.map(el => (
          <UserCard key={el.id.value} card={el} />
        ))}
      </Styled.Column>
    </Styled.All>
  );
};
