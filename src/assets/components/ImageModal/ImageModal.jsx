import Modal from 'react-modal';
import css from './ImageModal.module.css'
Modal.setAppElement('#root');

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      padding: 32,
    },
  };
const ImageModal = ({
    closeModal,
    modalIsOpen,
    modal: { alt_description, imgUrl },
  }) => {
    return (
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <div className={css.imageWrapper}>
          <img className={css.image} src={imgUrl} alt={alt_description} />
        </div>
      </Modal>
    );
  };
  
  export default ImageModal;