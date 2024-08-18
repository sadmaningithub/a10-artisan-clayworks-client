import img1 from '../../assets/img/1.png'
import img2 from '../../assets/img/2.png'
import img3 from '../../assets/img/3.png'

const Banner = () => {
    return (
        <div >
            <swiper-container
                slides-per-view="1"
                // loop='true'
                navigation="true"
                pagination="true"
                // autoplay-delay="3500"
                effect="fade"
            >

                <swiper-slide>
                    <div>
                        <div className='bg-slate-950'>

                        </div>
                        <div className=''>
                            <img className='w-full' src={img1} alt="" />
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div>
                        <div>

                        </div>
                        <div>
                            <img className='w-full' src={img2} alt="" />
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div>
                        <div>

                        </div>
                        <div>
                            <img className='w-full' src={img3} alt="" />
                        </div>
                    </div>
                </swiper-slide>

            </swiper-container>
        </div>
    );
};

export default Banner;