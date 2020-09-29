import React, { useContext } from 'react';
import BasketContext from '../../provider/BasketContext';
import CommentReg from './component/CommentReg';
import ContactComment from './component/ContactComment';

const Contact = () => {
  const { regUser } = useContext(BasketContext);
  return (
    <div>
      <h1>Магазин Электроники</h1>
      <p>
        Адрес: Шереметьевская ул 6к1 ТРЦ Райкин Плаза, -1 этаж, Москва, Россия,
        129594
      </p>
      <p>Телефон: +380 800 217 608</p>
      <p>Время работы: 24/24</p>
      {(regUser && <ContactComment userName={regUser.userName} />) || (
        <CommentReg />
      )}
    </div>
  );
};

export default Contact;
