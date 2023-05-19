import React from 'react';
import Routes from './routes';
import Header from './Header';





class Page extends React.Component {

  render() {
    return (
      <>
      <Header/>
      <div className="content" >
          <Routes/>

      </div>
      </>
  );
  }
}

export default Page;
