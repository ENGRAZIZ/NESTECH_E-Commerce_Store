import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



import bannerimage0 from '../assets/banner/banner (1).webp';
import bannerimage1 from '../assets/banner/banner (2).jpg';
import bannerimage2 from '../assets/banner/banner (3).jpg';
import bannerimage3 from '../assets/banner/banner (4).jpg';
import bannerimage4 from '../assets/banner/banner (5).jpg';
import bannerimage5 from '../assets/banner/banner (6).webp';
import bannerimage6 from '../assets/banner/banner (7).jpeg';
import bannerimage7 from '../assets/banner/banner (8).jpg';
import bannerimage8 from '../assets/banner/banner (9).jpg';
import bannerimage9 from '../assets/banner/banner (10).jpg';
import bannerimage10 from '../assets/banner/banner (11).jpg';

import bannerimage1Mobile from '../assets/banner/mobile (1).jpg';
import bannerimage2Mobile from '../assets/banner/mobile (1).jpeg';
import bannerimage3Mobile from '../assets/banner/mobile (2).jpg';
import bannerimage4Mobile from '../assets/banner/mobile (2).jpeg';
import bannerimage5Mobile from '../assets/banner/mobile (3).jpeg';
import bannerimage6Mobile from '../assets/banner/mobile (4).jpeg';

import { FaAngleRight } from 'react-icons/fa6';
import { FaAngleLeft } from 'react-icons/fa6';

const BannerProduct = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const desktopImages = [
        bannerimage0,
        bannerimage1,
        bannerimage2,
        bannerimage3,
        bannerimage4,
        bannerimage5,
        bannerimage6,
        bannerimage7,
        bannerimage8,
        bannerimage9,
        bannerimage10,
    ];

    const mobileImages = [
        bannerimage1Mobile,
        bannerimage2Mobile,
        bannerimage3Mobile,
        bannerimage4Mobile,
        bannerimage5Mobile,
        bannerimage6Mobile,
    ];

    const imagesToUse = window.innerWidth < 768 ? mobileImages : desktopImages; // Adjust based on screen size

    const productTitles = [
        'Stylish Leather Jacket',
        'Classic Denim Jeans',
        'Trendy Sneakers',
        'Elegant Evening Dress',
        'Smartwatch with Fitness Tracker',
        'Wireless Noise-Cancelling Headphones',
        'Portable Bluetooth Speaker',
        'Luxury Handbag',
        'Professional Camera',
        'Ergonomic Office Chair',
        'LED Smart TV'
    ];

    const productDetails = [
        `Crafted with premium materials, this product ensures longevity and durability. 
         Designed to withstand daily wear and tear, making it a trusted choice. 
         Its sleek design blends seamlessly with any style. 
         Built for both performance and reliability. 
         A must-have for those seeking quality and reliability in one package.`,

        `This product combines timeless style with unbeatable durability. 
         Ideal for those who want to make a statement while enjoying lasting use. 
         Its chic design makes it a versatile addition to any wardrobe. 
         Engineered for long-lasting performance without compromising on style. 
         Perfect for fashion-forward individuals who value durability.`,
        
        `Get the best of both worlds with affordability and top-notch efficiency. 
         This product offers excellent value without sacrificing performance. 
         Designed to make everyday tasks easier and more effective. 
         Its user-friendly nature ensures smooth operation. 
         Ideal for those looking for cost-effective solutions without compromise.`,
        
        `Packed with cutting-edge features to enhance your experience. 
         Designed with the user in mind, offering intuitive functionality. 
         A product that pushes the boundaries of innovation in its category. 
         Whether you're a beginner or expert, this product is easy to navigate. 
         Elevate your daily routine with this innovation-packed item.`,
        
        `Crafted with sustainability at its core, helping to reduce your carbon footprint. 
         Made from eco-conscious materials that are safe for the environment. 
         Combines efficiency with planet-friendly design. 
         Perfect for those looking to make an impact while staying stylish. 
         A product that cares for both you and the planet.`,
        
        `Don’t be fooled by its size—this compact product packs a punch. 
         Designed for those who need high performance in a small package. 
         Perfect for space-saving solutions without sacrificing power. 
         Offers top-tier efficiency, whether at home or on the go. 
         Small in size, huge in capabilities.`,
        
        `A product designed to suit a variety of needs and environments. 
         Built with adaptability in mind, easily transforming to meet your demands. 
         Ideal for those who seek a multi-functional, dependable item. 
         Crafted for ultimate flexibility without compromising on quality. 
         Your go-to product for any situation, offering unmatched versatility.`,
        
        `Designed with a modern aesthetic, perfect for contemporary tastes. 
         Its clean, sleek lines add a touch of sophistication to any setting. 
         Combines the latest trends with functional design. 
         Ideal for those who appreciate minimalist yet impactful products. 
         A statement piece that blends form and function seamlessly.`,
        
       `Stay ahead of the curve with cutting-edge technology built into this product. 
        Offers advanced functionality to make life easier and more efficient. 
        Designed for tech-savvy individuals who demand more from their products. 
        Pushes the boundaries of what’s possible with its smart capabilities. 
        A perfect blend of innovation and ease-of-use.`,
        
        `Crafted with the finest materials, ensuring long-lasting quality. 
         Built with attention to detail for those who appreciate fine craftsmanship. 
         Combines luxury with everyday functionality for a premium experience. 
         Designed to withstand the test of time, both in style and durability. 
         Ideal for those seeking top-tier materials and flawless craftsmanship.`,
        
        `Get high-quality at an unbeatable price with this value-packed product. 
         Designed to deliver outstanding performance without breaking the bank. 
         A perfect balance between affordability and superior quality. 
         Ideal for budget-conscious buyers who refuse to compromise on standards. 
         Truly a great investment, offering long-term value at a fair price.`,
    ];

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % imagesToUse.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + imagesToUse.length) % imagesToUse.length);
    };

    const handleDiscClick = (index) => {
        setCurrentImage(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentImage]);

    return (
        <div className='flex container mx-auto px-4 rounded'>
            <div className='flex-1 p-4 hidden md:block relative'>  {/* Added 'relative' here */}
                {/* Description Area */}
                <h2 className='text-xl font-bold mb-2'>{productTitles[currentImage]}</h2>
                <p className='mb-4'>{productDetails[currentImage]}</p>
                <Link to={'/product-category/'} 
                className='bg-blue-500 text-white px-4 py-2 rounded absolute bottom-4 left-4'> {/* Updated position */}
                    Buy
                </Link>
            </div>

            <div className='flex-1 h-56 md:h-72 bg-slate-200 relative w-full'>
                {/**desktop and tablet version */}
                <div className='hidden md:flex h-full w-full overflow-hidden'>
                    {desktopImages.map((imageURL, index) => {
                        return (
                            <div
                                className='w-full h-full min-w-full min-h-full transition-all'
                                key={imageURL}
                                style={{ transform: `translateX(-${currentImage * 100}%)` }}
                            >
                                <img src={imageURL} alt={imageURL} className='w-full h-full object-fill' />
                            </div>
                        );
                    })}
                </div>

                {/**mobile version */}
                <div className='flex h-full w-full overflow-hidden md:hidden'>
                    {mobileImages.map((imageURL, index) => {
                        return (
                            <div
                                className='relative w-full h-full min-w-full min-h-full transition-all'
                                key={imageURL}
                                style={{ transform: `translateX(-${currentImage * 100}%)` }}
                            >
                                <img src={imageURL} alt={imageURL} className='w-full h-full object-fill' />
                                <Link to={'/'} className='absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded'>
                                    Buy
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/** Navigation arrows and Disc buttons */}
                <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4'>
                    <button
                        onClick={prevImage}
                        className='bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition duration-200'
                    >
                        <FaAngleLeft />
                    </button>

                    {imagesToUse.map((_, index) => (
                        <button
                            key={index}
                            className={`h-3 w-3 rounded-full transition duration-300 ${
                                currentImage === index ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                            onClick={() => handleDiscClick(index)}
                        />
                    ))}

                    <button
                        onClick={nextImage}
                        className='bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition duration-200'
                    >
                        <FaAngleRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BannerProduct;
