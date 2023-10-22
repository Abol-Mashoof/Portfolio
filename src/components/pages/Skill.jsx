import { useEffect, useState } from "react";
import {Skills} from "./";
import { devSkills } from "../../constants/devSkills";
const Skill = () => {
  const { htmlSkill, cssSkill, reactSkill, jsSkill, nodeSkill, gitSkill } =
    devSkills;

  const [javascript, setJavascript] = useState(0);
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [reactjs, setReactJs] = useState(0);
  const [nodejs, setNodeJs] = useState(0);
  const [git, setGit] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setJavascript((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 60);
      });
      setHtml((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 95);
      });
      setCss((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 85);
      });
      setGit((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 20);
      });
      setNodeJs((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 30);
      });
      setReactJs((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 70);
      });
    }, 250);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Skills
        name={htmlSkill.name}
        color={htmlSkill.color}
        icon={htmlSkill.icon}
        value={html}
      />
      <Skills
        name={cssSkill.name}
        color={cssSkill.color}
        icon={cssSkill.icon}
        value={css}
      />
      <Skills
        name={jsSkill.name}
        color={jsSkill.color}
        icon={jsSkill.icon}
        value={javascript}
      />
      <Skills
        name={reactSkill.name}
        color={reactSkill.color}
        icon={reactSkill.icon}
        value={reactjs}
      />
      <Skills
        name={nodeSkill.name}
        color={nodeSkill.color}
        icon={nodeSkill.icon}
        value={nodejs}
      />
      <Skills
        name={gitSkill.name}
        color={gitSkill.color}
        icon={gitSkill.icon}
        value={git}
      />
    </>
  );
};
export default Skill;
