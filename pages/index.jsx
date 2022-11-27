import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import Head from 'next/head'
import Image from 'next/image'
import Project from '../scenes/home/Project';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='main'>
      <Project />
    </div>
  );
}
