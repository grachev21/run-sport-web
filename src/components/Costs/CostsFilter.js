// ФИЛЬТР ПО ГОДАМ

import './CostsFilter.css';

// Запускается в onChange
const CostsFilter = (props) => {

    const yearChangeHandler = (event) => {
      console.log(event.target.value);
      props.onChangeYear(event.target.value);
    };

    return (
        <div className='costs-filter'>
            <div className='costs-filter__control'>
                <label>Выбор по году</label>
                <select value={props.year} onChange={yearChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default CostsFilter;
