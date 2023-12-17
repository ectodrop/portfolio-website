'use client'
import Image from 'next/image'
import ProjectDescription from '@/components/project'
import projects from '@/data/projects'
import sections from '@/data/sections'
import { useEffect, useRef, useState } from 'react';
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import icons from '@/data/icons'

import { IconContext } from 'react-icons'
import experiences from '@/data/experiences'
import Experience from '@/components/experience'

export default function Home() {
  // used to track scroll positon and set active nav element accordingly
  const [activeSection, setActiveSection] = useState<string>("");
  const sectionsRef = useRef<any[]>([]);

  useEffect(() => {
    const animate = document.querySelectorAll("[data-anim]");

    const animateObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("animate-in")
        }
      })
    });


    animate.forEach((section) => {
      animateObserver.observe(section);
    });

    const sections = document.querySelectorAll("[data-section]")

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0.5) {
          setActiveSection(entry.target.id)
          entry.target.classList.remove("animate-in")
        } 
      })
    }, {threshold: 0.5})

    // sections.forEach((section) => {
    //   sectionObserver.observe(section)
    // })


    return (() => {
      animate.forEach((section) => animateObserver.unobserve(section))
      sections.forEach((section) => sectionObserver.unobserve(section))
    })
  }, []);

  const handleScroll = () => {
    const pageYOffset = window.scrollY;
    let newActiveSection = "";

    sectionsRef.current?.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionOffsetTop - 40 && pageYOffset < sectionOffsetTop + sectionHeight) {
        section.classList.remove("animate-in")
        newActiveSection = section.id;
      }
    });

    if (newActiveSection) {
      setActiveSection(newActiveSection);
    }
  }

  useEffect(() => {
    // @ts-ignore
    sectionsRef.current = document.querySelectorAll('[data-section]');
    window.addEventListener('scroll', handleScroll);

    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='min-h-screen bg-primary-700 text-primary-200 font-mono flex items-center my-20 justify-center'>

      <div className='transform flex flex-col flex-initial bg-primary-700'>
        <div className='flex'>
          <div className='p-4 text-right flex-col space-y-4 h-fit sticky top-1/4 hidden sm:flex'>
            {/* <div className='bg-primary-800 w-full aspect-square rounded-full'><div>Howard</div></div> */}
            <a href='#' className='text-4xl bg-opacity-0'>HOWARD YANG</a>
            <div className='flex justify-end gap-4'>
              <IconContext.Provider value={{ size: "1.5em",}}>
                <a title="github"  href="https://github.com/ectodrop"><FaGithub /></a>
                <a title="linkedin" href="https://www.linkedin.com/in/yang-howard/"><FaLinkedin /></a>
                <a title="resume" href="/howard_yang_resume.pdf"><FaFilePdf /></a>
              </IconContext.Provider>
            </div>
            {sections.map((id, i) => {
              if (id == activeSection)
                return <a key={i} href={"#"+id} className='capitalize duration-200 bg-primary-800'>{id}</a>
              return <a key={i} href={"#"+id} className='capitalize duration-200'>{id}</a>
            })}
          </div>

          <div className='fixed top-0 w-screen z-50 bg-primary-800 sm:hidden'>
            {/* <div className='bg-primary-800 w-full aspect-square rounded-full'><div>Howard</div></div> */}
            <h1 className='text-center bg-opacity-0'>HOWARD YANG</h1>
          </div>

          <div className='flex flex-col flex-initial max-w-[1024px] pr-[3vw] space-y-20'>
            <div data-section id='about' className='z-10 pt-10 flex flex-col mt-56'>
              <section className='relative cube space-y-4'>
                <h1>Hi there!👋</h1>
                <div className='w-1/4 rounded-full aspect-square bg-[position:75%_25%] bg-[size:150%] float-right bg-[url(/smola.png)] duration-300 hover:bg-[url(/smola.gif)]'></div>
                <div>
                  I&#39;m a Computer Science student in my final year at the University of Toronto.
                </div>
                <div>
                  This website is to showcase some of the stuff I&#39;ve worked on.
                </div>
              </section>
            </div>

            <section data-section id='projects' className='animate-in duration-300 mt-4 -pt-4 relative cube space-y-16'>
              <h1 className='mb-4'>[PROJECTS]</h1>
              {projects.map((project, i) => {
                return <div data-anim className='animate-in duration-300' key={i}><ProjectDescription {...project} /></div>
              })}
            </section>

            <section data-section id='experience' className='animate-in duration-300 space-y-4 relative cube bg-primary-800'>
              <h1 className='text-5xl mb-8'>EXPERIENCE</h1>
              {experiences.map((exp, i) => {
                return (
                <div key={i}>
                  <Experience {...exp} />
                </div>
                )
              })}
            </section>
          </div>

        </div>
        <div className='self-center mt-40'>Made with TailwindCSS and Nextjs by Howard Yang</div>
        <a className='self-center block underline' href="mailto:yanghoward1@gmail.com">email me</a>
      </div>
    </div>
  )
}
