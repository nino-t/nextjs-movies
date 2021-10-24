import React from 'react';
import { Lightbox } from 'react-modal-image';

export interface ImagePreview {
  image: string
  alt: string
}

const MviPreviewImage: React.FC<{ image: string, alt: string, handleClose: () => void }> = ({ image, alt, handleClose }) => {
  return (
    <Lightbox
      medium={image}
      large={image}
      alt={alt}
      onClose={handleClose}
    />
  );
}

export default React.memo(MviPreviewImage);