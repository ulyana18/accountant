import React, { Component } from 'react';
import './aboutUs.css';
import friends from '../../data/images/friendship.svg';

import { Icon } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faUsersCog, faShieldAlt, faClosedCaptioning } from '@fortawesome/free-solid-svg-icons';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);


class AboutUs extends Component {
    constructor() {
      super();
    }

    render() {

      return (
        <div className='aboutUs'>
            <div className='aboutUsWrapper'>
                <h3 className='headerAboutUs headers'>Кто мы?</h3>
                <p className='textAboutUs'>
                    <span>Accout Team</span> - это молодая, перспективная, развивающаяся компания, предлагающая услуги в области бухгалтерского и налогового учета, а также комплексное администрирование Вашего бизнеса, включая кадровое делопроизводство, экономические расчеты и анализ, юридическое сопровождение.
                </p>
                <div className='blocksAboutUs'>
                    <div className='block'>
                        <div className='blockWrapper'>
                            <div className='iconCircle'>
                                <FontAwesomeIcon icon={faUserGraduate} size='3x' />
                            </div>
                            
                            <span className='blockText'>15-летний опыт работы в области бухгалтерского и налогового учета, экономики и финансов</span>
                        </div>
                    </div>
                    <div className='block'>
                        <div className='blockWrapper'>
                            <div className='iconCircle'>
                                <FontAwesomeIcon icon={faUsersCog} size='3x' />
                            </div>
                            
                            <span className='blockText'>Индивидуальный подход к каждому клиенту</span>
                        </div>
                    </div>
                    <div className='block'>
                        <div className='blockWrapper'>
                            <div className='iconCircle'>
                                <FontAwesomeIcon icon={faShieldAlt} size='3x' />
                            </div>
                            
                            <span className='blockText'>Страхование деятельности от ошибок</span>
                        </div>
                    </div>
                    <div className='block'>
                        <div className='blockWrapper'>
                            <div className='iconCircle'>
                                <FontAwesomeIcon icon={faClosedCaptioning} size='3x' />
                            </div>
                            
                            <span className='blockText'>Предоставление клиентам доступа к лицензионной платформе 1С</span>
                        </div>
                    </div>

                </div>
            </div>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
            >
                <div className='carouselSlide'>
                    <h4 className='carouselHeader'>Мы – Ваш консультант и помощник в ведении бизнеса</h4>
                    <span className='carouselText'>Предложим Вам решение от простых до самых сложных задач</span>
                </div>
                <div className='carouselSlide'>
                    <h4 className='carouselHeader'>Мы – Ваш консультант и помощник в ведении бизнеса</h4>
                    <span className='carouselText'>Найдем оптимальный выход из неординарных ситуаций</span>
                </div>
                <div className='carouselSlide'>
                    <h4 className='carouselHeader'>Мы – Ваш консультант и помощник в ведении бизнеса</h4>
                    <span className='carouselText'>Вместе с Вами спрогнозируем результат и подберем инструменты для его достижения</span>
                </div>
            </AutoplaySlider>
            <div className='advantages'>
                <div className='advantagesWrapper'>
                    <h4>Преимущества работы с нами</h4>
                    <div className='advantagesGridWrapper'>
                        <div className='advantageItem advantageItem-1'>
                            <span class='advantageText'>Профессиональная поддержка Вашего бизнеса</span>
                        </div>
                        <div className='advantageItem advantageItem-2'>
                            <span class='advantageText'>Комплексное сопровождение и концентрация услуг – это простота принятия и осуществления Вами бизнес-решений (не нужно тратить время и средства на поиски юриста для составления договоров и других документов, экономиста для составления экономических расчетов, специалиста по кадрам для кадрового делопроизводства, бухгалтера для ведения учета)</span>
                        </div>
                        <div className='advantageItem advantageItem-3'>
                            <span class='advantageText'>Непрерывное обслуживание без ухода в отпуска и больничные</span>
                        </div>
                        <div className='advantageItem advantageItem-4'>
                            <span class='advantageText'>Экономия средств на заработной плате штатных работников и «зарплатных» налогах</span>
                        </div>
                        <div className='advantageItem advantageItem-5'>
                            <span class='advantageText'>Отсутствие необходимости организации рабочих мест, приобретения ПО, доступа к нормативной базе</span>
                        </div>
                        <div className='advantageItem advantageItem-6'>
                            <span class='advantageText'>Доступ к платформе 1С для совместной Вашей и нашей работы</span>
                        </div>
                        <div className='advantageItem advantageItem-7'>
                            <span class='advantageText'>Ваша возможность сконцентрироваться на ведении бизнеса без отвлечения на его администрирование</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='friends'>
                <div className='friendsWrapper'>
                    <h4>Познакомившись однажды, Вы останетесь с нами надолго!</h4>
                </div>
                <div className='friendsImage'>
                    <img src={friends} alt='friends'/>
                </div>
            </div>

        </div>
      )
    }
}

export default AboutUs;
