import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { FetchArticals } from './Htpp';
import Modal from 'react-modal';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';


function App() {
  const [articals, setArticals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [modalItem, setModalItem] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleSubmit = async query => {
    setQuery(query);
    setPage(1);
    setArticals([]);
  };

  const openModal = item => {
    setModalItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    async function getArticals() {
      if (query === "") {
        return;
      }
      try {
        setIsLoading(true);
        const data = await FetchArticals(query, page);
        setArticals(prevArticals => [...prevArticals, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getArticals();
  }, [query, page]);
Modal.setAppElement("#root")
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery items={articals} onClick={openModal} />
      {articals.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      {modalItem && (
        <ImageModal
          item={modalItem}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          
        />
        
      )}
    </>
  );
}

export default App;
