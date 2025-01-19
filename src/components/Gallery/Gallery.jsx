import { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion"; // Import framer-motion for animation
import { Helmet } from "react-helmet-async"; // Import Helmet for SEO
import gallery from "../../assets/gallery.jpeg";
import gallery1 from "../../assets/gallery1.jpeg";
import gallery2 from "../../assets/gallery2.jpeg";
import gallery3 from "../../assets/gallery3.jpeg";
import gallery4 from "../../assets/gallery4.jpeg";
import gallery5 from "../../assets/gallery5.jpeg";
import gallery6 from "../../assets/gallery6.jpeg";
import gallery7 from "../../assets/gallery7.jpeg";
import gallery8 from "../../assets/gallery8.jpeg";
import gallery9 from "../../assets/gallery9.jpeg";
import gallery19 from "../../assets/gallery19.jpeg";
import gallery10 from "../../assets/gallery10.jpeg";
import gallery11 from "../../assets/gallery11.jpeg";
import gallery12 from "../../assets/gallery12.jpeg";
import gallery13 from "../../assets/gallery13.jpeg";
import gallery14 from "../../assets/gallery14.jpeg";
import gallery15 from "../../assets/gallery15.jpeg";
import gallery16 from "../../assets/gallery16.jpeg";
import gallery17 from "../../assets/gallery17.jpeg";
import gallery18 from "../../assets/gallery18.jpeg";
import gallery20 from "../../assets/9.png";
import galleryposter from "../../assets/galleryposter.png";
import Footer from "../Footer/Footer";

Modal.setAppElement("#root"); // Set the root element for accessibility

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { id: 1, src: gallery, alt: "Image 1" },
        { id: 2, src: gallery1, alt: "Image 2" },
        { id: 3, src: gallery2, alt: "Image 3" },
        { id: 4, src: gallery3, alt: "Image 4" },
        { id: 5, src: gallery4, alt: "Image 5" },
        { id: 6, src: gallery5, alt: "Image 6" },
        { id: 7, src: gallery6, alt: "Image 7" },
        { id: 8, src: gallery7, alt: "Image 8" },
        { id: 9, src: gallery8, alt: "Image 9" },
        { id: 10, src: gallery9, alt: "Image 10" },
        { id: 11, src: gallery10, alt: "Image 10" },
        { id: 12, src: gallery11, alt: "Image 10" },
        { id: 13, src: gallery12, alt: "Image 10" },
        { id: 14, src: gallery13, alt: "Image 10" },
        { id: 15, src: gallery14, alt: "Image 10" },
        { id: 16, src: gallery15, alt: "Image 10" },
        { id: 17, src: gallery16, alt: "Image 10" },
        { id: 18, src: gallery17, alt: "Image 10" },
        { id: 19, src: gallery18, alt: "Image 10" },
        { id: 20, src: gallery19, alt: "Image 10" },
        { id: 21, src: gallery20, alt: "Image 10" },
    ];

    // Handle image click to open the modal
    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    // Handle close modal
    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <Helmet>
                <title>Gallery | Stunning Collection of Images</title>
                <meta name="description" content="Explore our stunning gallery of beautiful images showcasing exquisite designs and moments." />
                <meta name="keywords" content="gallery, images, beautiful designs, photography, stunning moments" />
                <meta property="og:title" content="Gallery | Stunning Collection of Images" />
                <meta property="og:description" content="Explore our stunning gallery of beautiful images showcasing exquisite designs and moments." />
                <meta property="og:image" content={galleryposter} />
                <meta property="og:url" content="https://www.adityacrafts.com/gallery" />
            </Helmet>

            <div className="w-full mt-20">
                <img src={galleryposter} className="w-full h-96 object-cover" alt="Gallery" />
            </div>
            <div className="w-full py-12 flex flex-col items-center bg-gray-100">
                <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>

                {/* Gallery Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
                    {images.map((image) => (
                        <div key={image.id} className="flex justify-center">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-96 h-72 object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
                                onClick={() => handleImageClick(image.src)}
                                loading="lazy" // Lazy load images
                            />
                        </div>
                    ))}
                </div>

                {/* Modal using React Modal */}
                <Modal
                    isOpen={selectedImage !== null}
                    onRequestClose={closeModal}
                    contentLabel="Image Modal"
                    className="fixed inset-0 flex justify-center items-center bg-transparent bg-opacity-60 z-20 mt-28"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-60"
                >
                    <div className="relative">
                        {/* Add animation for image */}
                        <motion.img
                            src={selectedImage}
                            alt="Full View"
                            className="max-w-full max-h-screen object-contain rounded-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                        {/* Close button with improved styling */}
                        <button
                            className="absolute top-4 right-4 p-3  text-white rounded-full bg-transparent hover:text-black transition-all duration-300"
                            onClick={closeModal}
                        >
                            X
                        </button>
                    </div>
                </Modal>
            </div>
            <Footer />
        </>
    );
};

export default Gallery;
