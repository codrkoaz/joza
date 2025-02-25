import { Avatar, Box, Button, Container, Title } from '@mantine/core';
import React from 'react';
import Image from 'next/image';
import Animation from './Animation';
import { IconChevronRight } from '@tabler/icons';
import { RiLightbulbLine } from 'react-icons/ri';
import { RiLightbulbFill } from 'react-icons/ri';
import JozaPic from '../public/assets/images/joza.png';

const AboutMe = () => {
  return (
    <Container className="box-border items-center justify-center flex-1 h-screen max-w-xl">
      <div className="flex flex-row pr-2 italic font-bold shrink-0 text-gray-500/80 xs:hidden">
        <div className="flex items-center mt-3 mr-20 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex">
            <RiLightbulbLine
              className="shrink-0 fill-white hover:fill-black"
              size={21}
            />
            <RiLightbulbFill
              className="absolute shrink-0 fill-gray-100 hover:fill-yellow-300"
              size={21}
            />
          </div>
          <p>&nbsp; Tip: Use</p>
          <button className="shrink-0 mx-2 inline bg-white focus:outline-none dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-400 text-gray-600 dark:text-white text-sm leading-5 py-0.5 px-1.5 border border-gray-500 rounded-md">
            <kbd className="font-sans no-underline">⌘ </kbd>
            <kbd className="font-sans">K </kbd>
          </button>
          to quickly navigate the site.
        </div>
      </div>
      <div className="h-24" />
      <Box
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[5]
              : theme.colors.gray[2],
          textAlign: 'center',
          fontSize: 'sm',
          padding: theme.spacing.md,
          borderRadius: theme.radius.lg,
        })}
        className="flex flex-wrap justify-center backdrop-blur-sm "
      >
        Hello, I'm an frontend developer based in Michigan!
      </Box>
      <Box className="flex items-center justify-center pt-8 xs:flex-col">
        <Box className="flex flex-col flex-auto">
          <Title order={2}>Joza Smith</Title>
          <p>Digital Craftsman ( Artist / Developer / Designer )</p>
        </Box>
        <Box className="flex items-center mt-4 mr-10 shrink-0">
          <Box className="items-center block w-24 overflow-hidden transition duration-200 ease-in-out border-2 border-gray-200 rounded-full cursor-pointer h- hover:border-gray-500">
            <a
              href="https://github.com/codrkoaz"
              target="_blank"
              rel="noopener"
            >
              <Image
                src={JozaPic}
                alt="JozaPic"
                width="100%"
                height="100%"
                layout="responsive"
              />
            </a>
          </Box>
        </Box>
      </Box>
      <Animation>
        <div>
          <div>
            <Title
              order={3}
              className="pt-3 underline dark:decoration-stone-300/50 decoration-stone-800/40 underline-offset-8"
            >
              Work
            </Title>
            <p className="w-full pt-3 text-justify indent-4">
              I am a frontend developer and digital artist based in Grand
              Rapids, with a passion for building and creating enjoyable
              projects I like. I possess a strong interest in everything from
              planning, designing to solving coding challenges I face. When I'm
              offline, I enjoy playing games and designing for my clothing
              brand.
            </p>
          </div>
          <div className="flex justify-center gap-4 pt-2 pb-5 pr-5">
            <a
              href="/mybrandnewresume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 pl-3 bg-inherit"
              download
            >
              <Button className="flex items-center justify-center w-32 bg-orange-400 border-none rounded-lg hover:bg-orange-500 ">
                Resume
                <IconChevronRight size={15} />
              </Button>
            </a>
          </div>
          <Box className="box-border py-10">
            <Title
              order={3}
              className="underline decoration-stone-300/50 underline-offset-8"
            >
              Bio
            </Title>
            <div>
              <span className="flex flex-row gap-3 pt-3">
                <p className="font-bold">1993</p> Born in Montreal, Quebec
              </span>
              <span className="flex flex-row gap-3 justified">
                <p className="font-bold">2015</p> Received my Certificate in
                Graphic Designs from Washtenaw Community College
              </span>
              <span className="flex flex-row gap-3 justified">
                <p className="font-bold">2021</p> Completed my Associate
                Frontend Web Development Program from Kenzie Academy
              </span>
              <span className="flex flex-row gap-3 justified">
                <p className="font-bold">2022</p> Built and managing my clothing
                brand "ADREAMERSFUTURE"
              </span>
              {/* <span className="flex flex-row gap-3 justified">
                <p className="font-bold">2023</p> Created my own VSCode themes
                tracking in 150+ downloads
              </span>
              <span className="flex flex-row gap-3 justified">
                <p className="font-bold">2024</p> Created my own productivity
                extension for Raycast
              </span> */}
            </div>
          </Box>

          <div>
            <span></span>
          </div>
        </div>

        <Box className="box-border py-10">
          <Title
            order={3}
            className="underline decoration-stone-300/50 underline-offset-8"
          >
            Hobbies
          </Title>
          <div>
            <span className="flex flex-row p-3 indent-3 justified">
              Art, Music, Playing Games, Building Keyboard, Making Clothes
            </span>
          </div>
        </Box>
      </Animation>
    </Container>
  );
};

export default AboutMe;
