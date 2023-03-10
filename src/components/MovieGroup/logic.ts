import { useState, useEffect, useRef } from 'react';
import { SmallMoviePreviewProps } from '../SmallMoviePreview/types';

export function useMovieSlider(movies: SmallMoviePreviewProps[], numVisible: number) {
  const [currentPage, setCurrentPage] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const start = currentPage;
  const end = currentPage + numVisible;
  const visibleMovies = movies.slice(start, end);

  useEffect(() => {
    setSliderPosition((sliderRef.current?.offsetWidth || 0) / numVisible);
  }, [numVisible, currentPage]);

  function nextPage() {
    if (currentPage >= movies.length - numVisible) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage + 1);
    }
  }

  function prevPage() {
    if (currentPage === 0) {
      setCurrentPage(Math.max(movies.length - numVisible, 0));
    } else {
      setCurrentPage(currentPage - 1);
    }
  }

  return {
    visibleMovies,
    sliderPosition,
    sliderRef,
    nextPage,
    prevPage,
  };
}
