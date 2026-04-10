



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BiTimeFive } from 'react-icons/bi';
import { HiLocationMarker } from 'react-icons/hi';
import { MdWork } from 'react-icons/md';
import Search from '../SearchDiv/Search.jsx';
import { Link } from 'react-router-dom';

const MOCK_JOBS = [
  { id: 1, title: 'Plumbing', time: '2 days ago', location: 'Lagos, Nigeria', description: 'Need an experienced plumber for pipe installation and repairs in a residential building.', img: 'https://i.pravatar.cc/40?img=1', company: 'Homefix Ltd' },
  { id: 2, title: 'Electrical Work', time: '1 day ago', location: 'Abuja, Nigeria', description: 'Seeking a certified electrician for full house wiring and solar panel installation.', img: 'https://i.pravatar.cc/40?img=2', company: 'PowerPro Nigeria' },
  { id: 3, title: 'Carpentry', time: '3 days ago', location: 'Port Harcourt, Nigeria', description: 'Looking for a skilled carpenter to build custom furniture and wardrobes.', img: 'https://i.pravatar.cc/40?img=3', company: 'WoodCraft Co.' },
  { id: 4, title: 'Painting', time: '5 hours ago', location: 'Ibadan, Nigeria', description: 'Need a professional painter for interior and exterior painting of a 4-bedroom duplex.', img: 'https://i.pravatar.cc/40?img=4', company: 'BrightWalls Ltd' },
  { id: 5, title: 'Tiling', time: '1 day ago', location: 'Enugu, Nigeria', description: 'Experienced tiler needed for bathroom, kitchen, and living room floor tiling.', img: 'https://i.pravatar.cc/40?img=5', company: 'TileKing Interiors' },
  { id: 6, title: 'Welding', time: '2 days ago', location: 'Kano, Nigeria', description: 'Welder required for gate fabrication and metal roofing work on a commercial property.', img: 'https://i.pravatar.cc/40?img=6', company: 'IronWorks Nigeria' },
  { id: 7, title: 'AC Repair', time: '4 hours ago', location: 'Lagos, Nigeria', description: 'Urgent need for an AC technician to service and repair split unit air conditioners.', img: 'https://i.pravatar.cc/40?img=7', company: 'CoolTech Services' },
  { id: 8, title: 'Masonry', time: '3 days ago', location: 'Benin City, Nigeria', description: 'Experienced mason needed for block laying and plastering on a new construction project.', img: 'https://i.pravatar.cc/40?img=8', company: 'BuildRight Contractors' },
];

const SkeletonCard = () => (
  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 animate-pulse">
    <div className="h-1.5 bg-gray-200 rounded w-full mb-4" />
    <div className="flex justify-between items-start mb-3">
      <div className="h-5 bg-gray-200 rounded w-2/3" />
      <div className="h-4 bg-gray-100 rounded w-1/5" />
    </div>
    <div className="h-4 bg-gray-100 rounded w-1/2 mb-3" />
    <div className="h-3 bg-gray-100 rounded w-full mb-2" />
    <div className="h-3 bg-gray-100 rounded w-4/5 mb-5" />
    <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
      <div className="w-8 h-8 rounded-full bg-gray-200" />
      <div className="h-3 bg-gray-100 rounded w-1/3" />
    </div>
    <div className="h-9 bg-gray-100 rounded-xl mt-4" />
  </div>
);

const Jobs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('https://api.i-wan-wok.com/api/', {
          headers: { Authorization: `Token ${token}` }
        });
    
        setData(response.data.length ? response.data : MOCK_JOBS);
      } catch (error) {
        console.error("API unavailable, using mock data:", error);
        setData(MOCK_JOBS);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);






  
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Hero banner ── */}
      <div className="bg-green-900 pt-12 pb-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-700 opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-600 opacity-10 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 max-w-2xl mx-auto">
        
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
            Find Skilled Workers <br />
            <span className="text-green-300 font-normal italic">Near You, Fast.</span>
          </h1>
          <p className="text-green-200 text-sm opacity-80 mb-8 max-w-md mx-auto">
            Browse hundreds of verified artisans and service providers across Nigeria. Hire with confidence.
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-2">
            <Search />
          </div>
        </div>
      </div>

    
    

      {/* ── Job cards ── */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            Available Services
            {!loading && (
              <span className="ml-2 text-sm font-normal text-gray-400">({data.length} listings)</span>
            )}
          </h2>
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <MdWork className="text-green-500" /> Updated daily
          </span>
        </div>

        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
            : data.map(job => (
              <div data-aos="fade-up" key={job.id}
                className="group flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="h-1.5 bg-green-500 w-full group-hover:bg-green-600 transition-colors" />

                <div className="flex flex-col flex-1 p-5">
                  {/* Title & time */}
                  <div className="flex justify-between items-start mb-2">
                    <h1 className="text-base font-bold text-gray-800 group-hover:text-green-700 transition-colors leading-snug">
                      {job.title}
                    </h1>
                    <span className="flex items-center gap-1 text-gray-400 text-xs whitespace-nowrap ml-2 mt-0.5">
                      <BiTimeFive />
                      {job.time}
                    </span>
                  </div>

                  {/* Location */}
                  <p className="flex items-center gap-1 text-xs text-green-600 font-medium mb-3">
                    <HiLocationMarker className="shrink-0" />
                    {job.location}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-gray-500 leading-relaxed border-t border-gray-100 pt-3 flex-1">
                    {job.description}
                  </p>

                  {/* Company row */}
                  <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-100">
                    <img
                      src={job.img}
                      alt={job.company}
                      className="w-8 h-8 rounded-full object-cover ring-2 ring-green-100"
                    />
                    <span className="text-xs font-medium text-gray-600">{job.company}</span>
                  </div>

                  {/* CTA button */}
                  <Link
                    to={`/api/artisans-by-service/${encodeURIComponent(job.title)}`}
                    className="mt-4 bg-green-50 hover:bg-green-600 border border-green-500 text-green-700 hover:text-white text-sm font-semibold py-2.5 px-4 rounded-xl text-center transition-all duration-300 block"
                  >
                    See Workers
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Jobs;




