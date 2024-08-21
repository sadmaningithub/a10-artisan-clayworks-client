import img1 from '../../assets/img/1.png'
import img2 from '../../assets/img/2.png'
import img3 from '../../assets/img/3.png'

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto mb-10 text-white'>
            <swiper-container
                slides-per-view="1"
                loop='true'
                navigation="true"
                pagination="true"
                autoplay-delay="3500"
                effect="fade"
            >

                <swiper-slide>
                    <div className='relative'>
                        <div className=''>
                            <img className='w-full' src={img1} alt="" />
                        </div>
                        <div className='absolute left-10 lg:left-20 bottom-7 lg:bottom-1/3 space-y-4 max-w-3xl'>
                            <p className='text-base'>Explore Our Handcrafted Ceramics & Pottery Collection</p>
                            <h1 className='text-xl lg:text-5xl font-bold'>Crafting Timeless Beauty</h1>
                            <p className='text-base lg:text-lg '>Discover the artistry of ceramics, where each piece is lovingly handcrafted to bring elegance and charm into your home. Experience the beauty of timeless designs that speak to your unique style.</p>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div className='relative'>
                        <div className=''>
                            <img className='w-full ' src={img2} alt="" />
                        </div>
                        <div className='absolute left-10 lg:left-20 bottom-7 lg:bottom-1/3 space-y-4 max-w-3xl'>
                            <p className='text-base'>Unique Pottery & Ceramic Creations for Every Home</p>
                            <h1 className='text-xl lg:text-5xl font-bold'>Transform Your Space with Art</h1>
                            <p className='text-base lg:text-lg '>Our collection features one-of-a-kind pottery and ceramic pieces, each crafted to elevate your living space. Whether you are looking for something bold or subtle, find the perfect addition to your home decor.</p>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div className='relative'>
                        <div className=''>
                            <img className='w-full' src={img3} alt="" />
                        </div>
                        <div className='absolute left-10 lg:left-20 bottom-7 lg:bottom-1/3 space-y-4 max-w-3xl'>
                            <p className='text-base'>Discover Exquisite Pottery and Ceramics</p>
                            <h1 className='text-xl lg:text-5xl font-bold'>Where Tradition Meets Artistry </h1>
                            <p className='text-base lg:text-lg '>Immerse yourself in the world of ceramics where traditional techniques meet contemporary design. Our carefully curated collection offers pieces that reflect the rich heritage of pottery with a modern twist.</p>
                        </div>
                    </div>
                </swiper-slide>

            </swiper-container>
        </div>
    );
};

export default Banner;