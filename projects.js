const projects = [{

        title: "Weather App",
        description: "Uses geolocaiton and open weather api. Created using JS, HTML, CSS",
        sourceLink: ""
    },
{
    title: "Ecommerce App",
    description: "Ecommece app built using React, Material UI, Redux Toolkit",
   
    
    sourceLink: ""
},
{
    title: "Spotify Clone",
    description: "Spotify Clone created using Vanilla JS, Tailwind CSS, Vite",
    
    
    sourceLink: ""
},
];


function loadProjects() {
    const projectsList = document.querySelector("#projects .projects-list");

    let innerHTML = "";
    for (const { title, description, coverUrl, demoLink, sourceLink } of projects) {
        innerHTML += `
        <section class="project shadow move-y">
            <section class="image-container">
              <img loading="lazy" src="${coverUrl}" alt="">
            </section>
            <h3>${title}</h3>
            <p>${description}</p>
            <ul class="links">
              <li><a href="${demoLink}" target="_blank">Demo</a></li>
              <li><a href="${sourceLink}" target="_blank"><img width="30" height="30" src="github.svg" alt="octocat iamge"> Source Code</a></li>
            </ul>
          </section >

        `
    }
    projectsList.innerHTML = innerHTML;


    // </section >
}

document.addEventListener("DOMContentLoaded", () => {
    loadProjects();
})
