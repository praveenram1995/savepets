import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>SavePets</h1>
          <p className='lead'>
            You can't change a dog's past, but you could rewrite his future." Adopting a dog not only saves a life, it just makes sense. Don't shop! Always adopt!

          </p>
          <p className='info'>
            Add/Adopt animals by signing up
          </p>
          <div className='buttons'>
            <Link to='/animals' className='btn btn-success'>
              Browse Pets
            </Link>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
