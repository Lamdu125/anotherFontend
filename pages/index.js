import Head from "next/head";
import Image from "../components/image";
import Text from "../components/Text";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Another</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <div>
        <Text content="Con cá trê" />
        <Image
          imagePath="/images/apple.png"
          width={200}
          height={200}
          hoverEnabled={false}
          isCircleAround={true}
        />
      </div>
    </div>
  );
}
