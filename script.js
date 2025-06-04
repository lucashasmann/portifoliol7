// Dados dos projetos
const projects = [
    {
        title: "Projeto de Locação de Carros",
        description: "Projeto full-stack para locação de carros com funcionalidades de cadastro, busca e reserva.",
        technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
        imageUrl: "https://via.placeholder.com/400x200?text=Loja+Virtual",
        demoUrl: "#",
        codeUrl: "https://github.com/lucashasmann/pfe1-projeto-locacao-carros-2025"
    },
    {
        title: "Projeto Escola ACME",
        description: "Sistema de gestão escolar full stack com funcionalidades de matrícula e registro",
        technologies: ["JavaScript"],
        imageUrl: "https://via.placeholder.com/400x200?text=E-commerce+Roupas",
        demoUrl: "#",
        codeUrl: "https://github.com/lucashasmann/pbe2-vps01-escola-atividades-2025"
    },
    {
        title: "Projeto de Agenda de Telefones",
        description: "Projeto de registro de contatos para registro.",
        technologies: ["JavaScript"],
        imageUrl: "https://via.placeholder.com/400x200?text=Exercicios+FullStack",
        demoUrl: "#",
        codeUrl: "https://github.com/lucashasmann/projeto_agendatelefones"
    },
    {
        title: "Sistema Cadastro de Tarefas",
        description: "Aplicativo para agendamento de serviços com calendário integrado e notificações.",
        technologies: ["HTML", "CSS3"],
        imageUrl: "https://via.placeholder.com/400x200?text=Sistema+Agendamento",
        demoUrl: "#",
        codeUrl: "https://github.com/lucashasmann/to-do-tarefas"
    }
];

// Dados das habilidades
const skills = [
    { name: "HTML", icon: "📄" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚙️" },
    { name: "Node.js", icon: "🟢" },
    { name: "SQL", icon: "🗃️" },

];

// Função para carregar projetos
function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        
        projectElement.innerHTML = `
            <div class="project-image" style="background-image: url('${project.imageUrl}')"></div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p><strong>Tecnologias:</strong> ${project.technologies.join(', ')}</p>
                <div class="project-links">
                    <a href="${project.codeUrl}" target="_blank">Código</a>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectElement);
    });
}

// Função para carregar habilidades
function loadSkills() {
    const skillsContainer = document.getElementById('skills-list');
    
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        
        skillElement.innerHTML = `
            <div class="skill-icon">${skill.icon}</div>
            <div class="skill-name">${skill.name}</div>
        `;
        
        skillsContainer.appendChild(skillElement);
    });
}

// Função para atualizar o ano no footer
function updateYear() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

// Manipulador do formulário de contato
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Aqui você pode adicionar o código para enviar o formulário
        console.log('Formulário enviado:', { name, email, message });
        alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
        
        // Limpa o formulário
        contactForm.reset();
    });
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    loadSkills();
    updateYear();
    setupContactForm();
    
    // Suaviza a rolagem para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});