import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const ModalLaunch = (props) => {
  const baseURL = 'https://image.tmdb.org/t/p/original';

  // console.log(movie.poster_path)
  return (
    <div>
      <Modal isOpen={props.isOpen} toggle={props.toggle}>
        <ModalHeader>High Resolution Poster</ModalHeader>
        <ModalBody>
          <img src={baseURL + props.movie.poster_path}
            width='50%'
            height='50%'
            alt={props.movie.title} />
        </ModalBody>
      </Modal>
    </div>
  );

};

export default ModalLaunch;
