import angular from '../../../public/images/angular.svg';
import aws from '../../../public/images/aws.svg';
import azure from '../../../public/images/azure.svg';
import bootstrap from '../../../public/images/bootstrap.svg';
import c from '../../../public/images/c.svg';
import canva from '../../../public/images/canva.svg';
import cplusplus from '../../../public/images/cplusplus.svg';
import html from '../../../public/images/html.svg';
import css from '../../../public/images/css.svg';
import figma from '../../../public/images/figma.svg';
import git from '../../../public/images/git.svg';
import java from '../../../public/images/java.svg';
import javascript from '../../../public/images/javascript.svg';
import microsoftoffice from '../../../public/images/microsoftoffice.svg';
import mongoDB from '../../../public/images/mongoDB.svg';
import mysql from '../../../public/images/mysql.svg';
import numpy from '../../../public/images/numpy.svg';
import python from '../../../public/images/python.svg';
import react from '../../../public/images/react.svg';
import tailwind from '../../../public/images/tailwind.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'react':
      return react;
    case 'bootstrap':
      return bootstrap;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'tailwind':
      return tailwind;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'java':
      return java;
    case 'aws':
      return aws;
    case 'git':
      return git;
    case 'numpy':
      return numpy;
    case 'figma':
      return figma;
    case 'microsoft office':
      return microsoftoffice;
    case 'canva':
      return canva;
    default:
      break;
  }
}