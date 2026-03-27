import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form, Spinner, ProgressBar, Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/donorRedux';
import {
  FaWeight, FaBirthdayCake, FaClock, FaTint, FaUserCheck, FaUserCircle, FaStethoscope,
  FaSyringe, FaUtensils, FaChevronDown, FaHandHoldingHeart, FaSun, FaMoon, FaSignOutAlt, FaComments
} from 'react-icons/fa';

import ChartJsImage from 'chartjs-to-image';

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';

import annotationPlugin from 'chartjs-plugin-annotation';
ChartJS.register(annotationPlugin);

import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(ChartDataLabels);

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  annotationPlugin,
  ChartDataLabels
);


import { QRCodeCanvas } from 'qrcode.react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { publicRequest } from "../../requestMethods";

import './DonorPage.css';

const MIN_WEIGHT = 50;
const MIN_AGE = 18;
const MAX_AGE = 65;
const DONATION_INTERVAL_DAYS = 60;

const compatibilityMap = {
  'A+': ['A+', 'A-', 'O+', 'O-'],
  'A-': ['A-', 'O-'],
  'B+': ['B+', 'B-', 'O+', 'O-'],
  'B-': ['B-', 'O-'],
  'AB+': ['Everyone'],
  'AB-': ['AB-', 'A-', 'B-', 'O-'],
  'O+': ['O+', 'O-'],
  'O-': ['O-'],
};


const DonorPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };



  return (
    <div>


              {/* Logout */}
              <button
                className="btn btn-danger d-flex align-items-center gap-2 px-3 py-2 fw-semibold shadow-sm"
                onClick={handleLogout}
                title="Logout"
              >
                <FaSignOutAlt size={18} />
              </button>
    
  
    </div>
  );
};

export default DonorPage;