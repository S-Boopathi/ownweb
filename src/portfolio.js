const header={
  title:"Portfolio"
}

const about ={
  name:"Boopathi",
  role: 'Front-End-UI-Developer',
  description:"I recently completed my education in BCA and have gained a solid foundation in web development, particularly in HTML, CSS, JavaScript, and React.js. Throughout my academic journey, I have successfully completed various projects that have allowed me to apply my skills and enhance my understanding of front-end development",
  resume:"https://drive.google.com/file/d/1--tZQ6S5R95BWXncuj3WeSrF2eUjg51Q/view?usp=drivesdk",
  social:{
      linkedin: 'https://www.linkedin.com/in/boopathi-s-987519249',
  github: 'https://github.com/S-Boopathi',
  instagram: 'https://instagram.com/chiyan_boopathi?igshid=YTQwZjQ0NmI0OA==',
  },

}

const projects =[
  {
  name:"User-app",
  description:"It's seems like a simple user login page but the base of the project which connect the API to private server using mockapi and we bind to Read page on that Read page we have a two buttons one is for delete another one is update",
  stack:["React","CSS"],
  sourcecode:"https://github.com/S-Boopathi/Userapps.git",
  livePreview: "https://jade-tarsier-716241.netlify.app",
  },
  {
      name:"Todo-list",
      description:"A todo-list based on the input what we gave input that which showen in a todolist if we want to delete the specific todo-list means we have a delete button to delete the seprate todo-list",
      stack:["React","CSS"],
      sourcecode:"https://github.com/S-Boopathi/User-todo-list.git",
      livePreview:"https://spectacular-rolypoly-55a491.netlify.app"
  },
  {
      name:"Newsportal",
      description:"A news portal website that which have onchange button which consist of india,australia,japan and united states options are there. We need to read the seprate contry news means we need to  click the respective country which in the onchange button and it will fetch the data in API and showen to you",
      stack:["React","CSS"],
      sourcecode:"https://github.com/S-Boopathi/Newsportal.git",
      livePreview:"https://github.com/S-Boopathi/Newsportal.git"
  }   
]


const skills = [
  
  'HTML',
  'CSS',
  'JavaScript',
  'BootStrap',
  'React js',
  'Git',
  'GitHub',
  'Redux'
]
const contact = {
  
  email: 'boopathi2412003@gmail.com',
}
export { header, about, projects, skills, contact }