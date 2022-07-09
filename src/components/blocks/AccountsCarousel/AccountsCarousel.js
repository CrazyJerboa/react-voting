import {useEffect, useState} from "react";
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import './AccountCarousel.scss';

export const AccountsCarousel = ({slides, slideChanged}) => {
    const [settings] = useState({
        mouseDrag: true,
        gutter: 15,
        controls: false,
        loop: false,
        nav: true,
        navPosition: 'bottom'
    });
    const [currentSlide, setCurrentSlide] = useState(0);
    
    useEffect(() => {
        slideChanged(currentSlide);
    }, [currentSlide, slideChanged]);

    const customizedFunction = e => {
        setCurrentSlide(e.index);
        slideChanged(e.index);
    }
    
    const getAnsweredQuestionsCount = index => {
        let count = 0;
        
        slides[index].questions.forEach(slide => {
            if (slide.result) {
                count++;
            }
        });
        
        return count;
    }

    return <div className="accountsCarousel">
        <TinySlider
            settings={settings}
            onIndexChanged={customizedFunction}
        >
            {slides?.length && slides.map((slide, index) => <div className="slideOuter" key={index}>
                <div className="slide">
                    <div className="slide__firstLine">
                        <div className="col-left">
                            <div className="avatar">
                                {slide.avatar ?
                                    <img src={slide.avatar} alt=""/>
                                    :
                                    <>НД</>
                                }
                            </div>

                            <hr className="divider"/>
                        </div>

                        <div className="col-right">
                            <p className="label">Номер участника</p>
                            <p className="value">{slide.userId}</p>

                            <p className="label">Номер счета</p>
                            <p className="value">{slide.id}</p>
                        </div>
                    </div>

                    <div className="slide__secondLine">
                        <div className="col-left">
                            <p className="label">Акции</p>
                            <p className="value">{slide.stockCount}</p>
                        </div>

                        <div className="col-right">
                            <p className="label">Вопросы</p>
                            <p className="value">{getAnsweredQuestionsCount(index)} из {slide.questions.length}</p>
                        </div>
                    </div>
                </div>
            </div>)}
        </TinySlider>
    </div>;
}
