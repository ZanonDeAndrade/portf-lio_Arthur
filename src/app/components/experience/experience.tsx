import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>Estou cursando o 3° semestre de Sistema de Informação. <br></br>Tenho 2 anos de experiencia como Frontend Developer</p>
          <div className="experience-time">
            <Skill image="/react.png" measure={1} years="1 year"/>
            <Skill image="/ts.png" measure={2} years="2 years"/>
            <Skill image="/js.png" measure={2} years="2 years"/>
            <br></br>
      
          </div>
        </div>
    )
}