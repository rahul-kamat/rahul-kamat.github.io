import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import linkedin from '../images/LinkedInIcon.png'
import github from '../images/GitHubIcon.png'
import instagram from '../images/InstagramIcon.png'
import facebook from '../images/FacebookIcon.png'

const useStyles = createUseStyles({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FAE3C7',
  },
  footerContainer: {
    width: '100%',
    backgroundColor: 'none',
    display: 'flex',
    flexDirection: 'column',
  },
  iconsContainer: {
    width: '100%',
    backgroundColor: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerItem: {
    fontSize: '36px',
    marginLeft: '10px',
    marginRight: '10px',
  },
  iconContainer: {
    width: '30px',
    height: 'auto',
  },
  icon: {
    width: '100%',
    height: 'auto',
    transition: '1.7s',
    '&:hover': {
      filter: 'invert(100%)',
    },
  },
  darkModeIcon: {
    filter: 'invert(100%)',
    '&:hover': {
      filter: 'invert(10%)',
    },
  },
  lightModeIcon: {
    '&:hover': {
      filter: 'invert(100%)',
    },
  },
  spacingContainer: {
    width: '100%',
    height: '10px',
  },
  spacingContainerSmall: {
    width: '100%',
    height: '10px',
  },
  darkModeBackground: {
    backgroundColor: '#000000',
  },
  lightModeBackground: {
    backgroundColor: '#C6C6C6',
  },
});

function Footer(props) {
  const [ stylePath ] = useState('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

  const { darkMode, lightMode } = props;

  const classes = useStyles();

  useEffect(() => {
    var head = document.head;
    var link = document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = stylePath;

    head.appendChild(link);
  }, [stylePath]);

  return (
    <div className={ classNames(classes.cardContainer, darkMode ? classes.darkModeBackground : null, lightMode ? classes.lightModeBackground : null) }>
      <div className={ classes.footerContainer }>
        <div className={ classes.spacingContainer } />

        <div className={ classes.iconsContainer }>
          <div className={ classNames(classes.footerItem, classes.iconContainer) } >
            <a href='https://linkedin.com/in/rahul-kamat' target='_blank' rel='noopener noreferrer'>
              <img
                className={ classNames(classes.icon, darkMode ? classes.darkModeIcon : null, lightMode ? classes.lightModeIcon : null) }
                src={ linkedin }
                alt='linkedin'
              />
            </a>
          </div>

          <div className={ classNames(classes.footerItem, classes.iconContainer) } >
            <a href='https://github.com/rahul-kamat' target='_blank' rel='noopener noreferrer'>
              <img
                className={ classNames(classes.icon, darkMode ? classes.darkModeIcon : null, lightMode ? classes.lightModeIcon : null) }
                src={ github }
                alt='github'
              />
            </a>
          </div>

          <div className={ classNames(classes.footerItem, classes.iconContainer) } >
            <a href='https://instagram.com/rahul__kamat' target='_blank' rel='noopener noreferrer'>
              <img
                className={ classNames(classes.icon, darkMode ? classes.darkModeIcon : null, lightMode ? classes.lightModeIcon : null) }
                src={ instagram }
                alt='instagram'
              />
            </a>
          </div>

          <div className={ classNames(classes.footerItem, classes.iconContainer) } >
            <a href='https://facebook.com/rahulkamat44' target='_blank' rel='noopener noreferrer'>
              <img
                className={ classNames(classes.icon, darkMode ? classes.darkModeIcon : null, lightMode ? classes.lightModeIcon : null) }
                src={ facebook }
                alt='facebook'
              />
            </a>
          </div>
        </div>

        <div className={ classes.spacingContainer } />
      </div>
    </div>
  );
}

export default Footer;