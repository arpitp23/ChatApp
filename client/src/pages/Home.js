import React from 'react';
import { Outlet } from 'react-router';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      {/*message component */}
      <section>
        <Outlet/>
      </section>
    </div>
  );
}

export default Home;

