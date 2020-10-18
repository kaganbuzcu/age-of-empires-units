import React from 'react';
import Img from 'react-cool-img';
import './image.scss';

interface IImageProps {
  name: string;
  path: string;
  alt: string;
}

const Image: React.FC<IImageProps> = ({ name, path, alt }: IImageProps) => {
  return (
    <Img
      className="image"
      placeholder={`${path}/192/${name}`}
      src={`${path}/${name}`}
      error="images/error-images.png"
      alt={alt}
    />
  );
};

export default Image;
