import React, { Component } from 'react';
import './services.css';
import payroll from '../../data/images/payroll.svg';
import bank from '../../data/images/bank.svg';
import consulting from '../../data/images/consulting.svg';
import budget from '../../data/images/budget.svg';
import marketing from '../../data/images/marketing.svg';
import tax from '../../data/images/tax.svg';
import registration from '../../data/images/registration.svg';
import contract from '../../data/images/contract.svg';
import person from '../../data/images/person.svg';
import travel from '../../data/images/travel.svg';
import paper from '../../data/images/paper.svg';
import fired from '../../data/images/fired.svg';

import { Icon } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faUsersCog, faShieldAlt, faClosedCaptioning } from '@fortawesome/free-solid-svg-icons';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);


class Services extends Component {
    constructor() {
      super();
    }

    render() {

      return (
        <div className='services'>
            <div className='servicesWrapper'>
                <h3>Наши услуги</h3>
                <div class='servicesList'>
                    <h4>Бухгалтерский и налоговый учет</h4>
                    <div className='servicesListwrapper'>
                        <div className='servicesItem'>
                            <img src={payroll} />
                            <span>Расчет заработной платы, налогов, больничных, отпусков</span>
                        </div>                        
                        <div className='servicesItem'>
                            <img src={bank} />
                            <span>Ведение банковских операций</span>
                        </div>
                        <div className='servicesItem'>
                            <img src={consulting} />
                            <span>Консультации по бухгалтерскому учету и по налоговой оптимизации</span>
                        </div>
                        <div className='servicesItem'>
                            <img src={budget} />
                            <span>Полное ведение бухгалтерского и налогового учета</span>
                        </div>
                        <div className='servicesItem'>
                            <img src={marketing} />
                            <span>Подготовка и сдача квартальной и годовой отчетности</span>
                        </div>
                        <div className='servicesItem'>
                            <img src={tax} />
                            <span>Выбор системы налогообложения и разработка учетной политики</span>
                        </div>

                    </div>
                </div>
                <div class='servicesList'>
                    <h4>Кадровое делопроизводство</h4>
                    <div className='servicesListwrapper'>
                        <div className='servicesItem'>
                            <img src={registration} />
                            <span>Подготовка документации по оформлению на работу нового сотрудника</span>
                        </div>                        
                        <div className='servicesItem'>
                            <img src={contract} />
                            <span>Оформление трудовых договоров</span>
                        </div>
                        <div className='servicesItem'>
                            <img src={person} />
                            <span>Оформление личных карточек</span>
                        </div>
                        <div className='servicesItem'>
                            <img src={travel} />
                            <span>Оформление приказов на командировки и отпуска</span>
                        </div>
                        <div className='servicesItem'>
                            <img src={paper} />
                            <span>Оформление переводов, изменений в трудовых договорах</span>
                        </div>
                        <div className='servicesItem'>
                            <img src={fired} />
                            <span>Подготовка документации по оформлению увольнения сотрудника</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className='servicesFor'>
                <h4>Кому подходят наши услуги?</h4>
                <ul>
                    <li>Начинающим бизнес</li>
                    <li>Индивидуальным предпринимателям</li>
                    <li>Малым и средним организациям</li>
                    <li>Сферы бизнеса – оптовая и розничная  торговля, услуги, IT, производство, транспорт, ВЭД</li>
                </ul>
            </div>
        </div>
        )
    }
}

export default Services;
