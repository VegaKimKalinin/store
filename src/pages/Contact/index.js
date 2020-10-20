import React from 'react';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import CommentReg from './component/CommentReg';
import ContactComment from './component/ContactComment';
import * as action from '../../store/action';

const Contact = ({ regUser }) => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <h1>Магазин Электроники</h1>
      <p>
        Адрес: Шереметьевская ул 6к1 ТРЦ Райкин Плаза, -1 этаж, Москва, Россия,
        129594
      </p>
      <p>Телефон: +380 800 217 608</p>
      <p>Время работы: 24/24</p>
      {(user.logIn && <ContactComment userName={user.userName} />) || (
        <CommentReg regUser={regUser} />
      )}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}

export default connect(null, mapDispatchToProps)(Contact);
