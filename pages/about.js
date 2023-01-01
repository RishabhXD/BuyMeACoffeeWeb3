import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const About = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="About RishabhXD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                  Hi 👋, I'm RishabhXD
                </h1>

                <p className="my-4 text-gray-600 dark:text-gray-400">
                  I'm a Full Stack Web3 developer currently in my junior year of
                  engineering. I love to create and learn new tech in the field
                  of development. I study with the help of projects and
                  contributions.
                </p>
                <div className="flex flex-row gap-6">
                  <Link href="https://github.com/rishabhXD" >
                    <AiFillGithub fontSize={35} />
                  </Link>
                  <Link href="https://www.linkedin.com/in/rishabh-pant-42760919b/">
                    <AiFillLinkedin fontSize={35} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <Image
                src="https://i.pinimg.com/564x/6e/c4/4f/6ec44f4f173e748699b20a3437550a58.jpg"
                alt="Picture of Mine"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
