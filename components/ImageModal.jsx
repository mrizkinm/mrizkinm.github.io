import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
import { Button } from './ui/button'
import { EyeIcon, XIcon } from 'lucide-react'
import Image from 'next/image';

const ImageModal = ({images}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setTimeout(() => setIsVisible(true), 100); // Delay untuk transisi masuk
  };

  const closeModal = () => {
    setIsVisible(false); // Transisi keluar
    setTimeout(() => setIsOpen(false), 300); // Delay sebelum modal benar-benar ditutup
  };

  const handleBackdropClick = (e) => {
    if (e.target.id === 'modal-backdrop') {
      closeModal();
    }
  };

  return (
    <div>
      <Button onClick={openModal} title="View" className="bg-slate-700 w-[45px] h-[45px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 hover:bg-slate-700">
        <EyeIcon className="text-white" />
      </Button>
      {isOpen && (
        <div id="modal-backdrop" onClick={handleBackdropClick} className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div onClick={(e) => e.stopPropagation()} className="rounded-lg w-[90%] pt-12 relative transition-all duration-300 transform">
            {/* Tombol Close */}
            <button 
              onClick={closeModal} 
              className="absolute top-0 right-0 rounded-full cursor-pointer p-1 hover:scale-105 ease-in duration-300 border border-gray-300 dark:border-accent bg-gray-50 dark:bg-accent hover:bg-gray-100 dark:hover:bg-accent"
            >
              <XIcon />
            </button>

            {/* Swiper Gallery */}
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image src={image} alt={`Slide ${index}`} width="500" height="500" className="w-full h-auto max-h-[80vh] object-contain" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageModal