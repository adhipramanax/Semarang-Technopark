import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer';

import FullPelatihan from './Pelatihan'
import Rekomendasi from './Rekomendasi'

const Index = () => {
  return (
    <>
      <div class="bg-[url('https://res.cloudinary.com/dhuvbrmgg/image/upload/v1662816138/Mini%20Project%20SEAL/bg-red.png')] bg-no-repeat-x bg-cover aspect-auto w-screen h-28">
        <Navbar
          auth="/login"
          title="Masuk"
        />
      </div>
      <div className="px-24 py-8">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><Link className="text-error text-lg font-medium" to="/">Home</Link ></li>
            <li><Link className="text-error text-lg font-medium" to="/pelatihan">Pelatihan</Link ></li>
            <li className="text-lg font-medium">Detail Pelatihan</li>
          </ul>
        </div>
        <div className="flex gap-6 mt-10">
          <FullPelatihan />
        </div>
        <Rekomendasi />
      </div>
      <Footer />
    </>
  );
};

export default Index;
