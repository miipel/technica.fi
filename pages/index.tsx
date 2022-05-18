import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const imageItems = [
    {
      alt: "Adamas",
      srcString: "/logo-adamas.png",
    },
    {
      alt: "Asteriski",
      srcString: "/logo-asteriski.png",
    },
    {
      alt: "Digit",
      srcString: "/logo-digit.png",
    },
    {
      alt: "Machina",
      srcString: "/logo-machina.png",
    },
    {
      alt: "Nucleus",
      srcString: "/logo-nucleus.png",
    },
    {
      alt: "Tyk",
      srcString: "/logo-tyk.jpg",
    },
  ];

  const board = [
    {
      position: "Puheenjohtaja",
      name: "Matti Loimaranta",
    },
    {
      position: "Varapuheenjohtaja",
      name: "Viola Inkinen",
    },
    {
      position: "Taloudenhoitaja",
      name: "Roosa Varjonen",
    },
    {
      position: "Sihteeri",
      name: "Tuisku Polvinen",
    },
    {
      position:
        "Koulutuspolitiikka- ja edunvalvontavastaava sekä Halloped-koordinaattori",
      name: "Jutta Lindfors",
    },
    {
      position: "Yritysyhteistyövastaava",
      name: "Arttu Jokinen",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Technica ry</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo-technica.svg" />
      </Head>

      <main className={styles.main}>
        <div className="relative flex h-128 w-full flex-col xl:h-160">
          <Image
            src="/logo-technica.svg"
            alt="Technica logo"
            height={200}
            width={200}
          />
        </div>
        <h1 className={styles.title}>Technica ry</h1>

        <p className={styles.description}>
          Turun yliopiston Teknillisen tiedekunnan edunvalvontajärjestö
        </p>

        <div className="grid grid-cols-6 grid-flow-row gap-4 grayscale my-8">
          {imageItems.map(({ alt, srcString }) => (
            <Image
              key={alt}
              src={srcString}
              alt={alt}
              width="100%"
              height="100%"
              objectFit="contain"
            />
          ))}
        </div>

        <div className="prose">
          <h2 className="text-xl">Me tiedekunnassa</h2>
          <p className="prose">
            Technica edustaa teknillisen tiedekunnan opiskelijoita, lausuu
            halloped nimityksistä joka toinen vuosi sekä fasilitoi tiedekunnan
            kopojen välistä yhteistyötä.
          </p>
          <br />
          <div>
            <h2 className="text-xl">Hallitus 2022</h2>
            <br />
            {board.map(({ position, name }) => (
              <figcaption key={position + name} className="font-medium">
                <h1 className="text-emerald-600 dark:text-emerald-500 prose">{position}</h1>
                <h1 className="text-slate-700 prose">{name}</h1>
              </figcaption>
            ))}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Technica ry</p>
      </footer>
    </Layout>
  );
};

export default Home;
