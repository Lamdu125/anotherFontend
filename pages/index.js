import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import ProgressMobileStepper from '../components/ProgressMobileStepper'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div style={{backgroundColor:'#EDEDED'}}>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
      </Head>

      <ProgressMobileStepper />
      <Button
        textColor={'#000000'}
        width={'243px'}
        height={'60px'}
        borderRadius={'20px'}
        title={'xac nhan'}
        fontSize={'20px'}
        border={'1px solid #000000'}
        backgroundColor={'#FFFFFF'}
        hoverBackground={'#000000'}
        hoverTextColor={'#FFFFFF'}
      >
      </Button>

      <Text content="Con cá trê" />
        <Image
          imagePath="/images/apple.png"
          width={200}
          height={200}
          hoverEnabled={false}
          isCircleAround={true}
        />
    </div>
  );
}
