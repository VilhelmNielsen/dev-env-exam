import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  container: {
    position: 'relative',
    height: '100%',
  },
  title: {
    position: 'relative',
    zIndex: 2,
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '1.111111px',
    fontSize: '6rem',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    margin: 'auto 0',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'black',
    opacity: '0.4',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
};

// TODO: router link

export default ({ title, link, thumbnail }) => (
  <Link to={link}>
    <div style={style.container}>
      <img style={style.img} src={thumbnail} alt={title} />
      <div style={style.overlay} />
      <div style={style.title}>{title}</div>
    </div>
  </Link>
);
