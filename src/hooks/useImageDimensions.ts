import { useEffect, useState } from 'react';
import { Image, ImageURISource } from 'react-native';

const useImageDimensions = (image: ImageURISource) => {
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: -1 });

  useEffect(() => {
    if (image.uri) {
      Image.getSize(image.uri, (width, height) => {
        setDimensions({ width, height });
      });
    } else {
      const { width, height } = Image.resolveAssetSource(image);
      setDimensions({ width, height });
    }
  }, [image]);

  const [width, height] = [dimensions.width, dimensions.height];
  const aspectRatio = width / height;

  return { width, height, aspectRatio };
};

export default useImageDimensions;
