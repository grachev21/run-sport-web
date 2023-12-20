// КОМПОНЕНТ ДЛЯ СТИЛИЗАЦИИ

import './Card.css';

function Card(props) {
  // Создаем переменную для того чтобы можно было в 
  // элементе card использовать классы
  const classes = 'card ' + props.className;
  // Указываем здесь эту переменную вместо имени класса
  return <div className={classes}>{props.children}</div>;
}

export default Card;
