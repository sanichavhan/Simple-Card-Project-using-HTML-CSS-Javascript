const users = [
  {
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=300",
    fullname: "Amit Sharma",
    job: "Frontend Developer",
    description: "Specializes in building responsive UI using React, CSS, and modern JavaScript frameworks."
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300",
    fullname: "Sneha Patil",
    job: "UI/UX Designer",
    description: "Creates intuitive user experiences with a strong focus on accessibility and visual design."
  },
  {
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300",
    fullname: "Rahul Verma",
    job: "Backend Developer",
    description: "Experienced in Node.js, REST APIs, databases, and server-side performance optimization."
  },
  {
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300",
    fullname: "Neha Kulkarni",
    job: "Data Analyst",
    description: "Transforms raw data into meaningful insights using Python, SQL, and visualization tools."
  },
  {
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300",
    fullname: "Kunal Mehta",
    job: "Full Stack Developer",
    description: "Works across frontend and backend to deliver scalable, end-to-end web applications."
  },
  {
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300",
    fullname: "Amit Sharma",
    job: "Frontend Developer",
    description: "Specializes in creating responsive and user-friendly interfaces using React and CSS."
  },
  {
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=300",
    fullname: "Rahul Verma",
    job: "Backend Developer",
    description: "Focuses on server-side logic, APIs, and database optimization."
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
    fullname: "Sneha Patil",
    job: "UI/UX Designer",
    description: "Designs intuitive user experiences and clean visual interfaces."
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300",
    fullname: "Priya Deshmukh",
    job: "Software Tester",
    description: "Ensures product quality by identifying bugs and improving reliability."
  },
  {
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=300",
    fullname: "Rohit Kulkarni",
    job: "DevOps Engineer",
    description: "Manages CI/CD pipelines and cloud infrastructure for smooth deployments."
  },
  {
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300",
    fullname: "Ankit Joshi",
    job: "Mobile App Developer",
    description: "Builds high-performance Android and iOS applications."
  },
  {
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300",
    fullname: "Neha Rane",
    job: "Data Analyst",
    description: "Analyzes data trends to support informed business decisions."
  },
  {
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300",
    fullname: "Pooja Malhotra",
    job: "AI Engineer",
    description: "Develops intelligent systems using machine learning and deep learning."
  },
  {
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300",
    fullname: "Saurabh Mishra",
    job: "Cyber Security Analyst",
    description: "Protects systems and networks from cyber threats."
  },

  {
    img: "https://images.unsplash.com/photo-1541534401786-2077eed87a7b?w=300",
    fullname: "Vikas Gupta",
    job: "Cloud Architect",
    description: "Designs scalable cloud solutions on AWS and Azure."
  },
  {
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300",
    fullname: "Aditya Pawar",
    job: "Java Developer",
    description: "Builds enterprise applications using Java and Spring Boot."
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
    fullname: "Harsh Singh",
    job: "Python Developer",
    description: "Creates automation scripts and backend services using Python."
  },
  {
    img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300",
    fullname: "Ritika Jain",
    job: "Product Manager",
    description: "Bridges business goals and technical teams for product success."
  },
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300",
    fullname: "Komal Shah",
    job: "Business Analyst",
    description: "Gathers requirements and optimizes business processes."
  },

  {
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300",
    fullname: "Nikhil Bansal",
    job: "QA Engineer",
    description: "Maintains software quality through automated and manual testing."
  },
  {
    img: "https://images.unsplash.com/photo-1545996124-0501ebae84d0?w=300",
    fullname: "Rashmi Kulkarni",
    job: "HR Executive",
    description: "Manages talent acquisition and employee engagement."
  },
  {
    img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=300",
    fullname: "Deepak Yadav",
    job: "System Administrator",
    description: "Handles servers, networks, and system maintenance."
  },
  {
    img: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=300",
    fullname: "Manisha Joshi",
    job: "Content Writer",
    description: "Creates engaging technical and marketing content."
  },
  {
    img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=300",
    fullname: "Arjun Malviya",
    job: "Game Developer",
    description: "Designs and develops interactive gaming experiences."
  },

  {
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300",
    fullname: "Karthik Iyer",
    job: "Blockchain Developer",
    description: "Builds decentralized applications using blockchain technology."
  },
  {
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300",
    fullname: "Sonal Kapoor",
    job: "Digital Marketer",
    description: "Drives online presence through SEO and marketing campaigns."
  },
  {
    img: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=300",
    fullname: "Yogesh Patil",
    job: "Network Engineer",
    description: "Designs and maintains secure network infrastructures."
  },
  {
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300",
    fullname: "Ishita Roy",
    job: "Research Analyst",
    description: "Conducts market and technical research."
  },
  {
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300",
    fullname: "Sameer Khan",
    job: "Support Engineer",
    description: "Provides technical assistance and troubleshooting."
  },

  {
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=300",
    fullname: "Abhishek Tiwari",
    job: "ERP Consultant",
    description: "Implements and supports enterprise ERP systems."
  },
  {
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300",
    fullname: "Meenal Joshi",
    job: "Scrum Master",
    description: "Facilitates agile development and team collaboration."
  },
  {
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300",
    fullname: "Siddharth Rao",
    job: "Tech Lead",
    description: "Guides development teams and architectural decisions."
  },
  {
    img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=300",
    fullname: "Ravi Khandelwal",
    job: "Database Administrator",
    description: "Manages and optimizes database performance."
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
    fullname: "Anjali More",
    job: "Technical Recruiter",
    description: "Finds and hires skilled technical professionals."
  },

  {
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=300",
    fullname: "Mohit Choudhary",
    job: "Embedded Systems Engineer",
    description: "Develops firmware and hardware-integrated systems."
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300",
    fullname: "Tanvi Kulkarni",
    job: "Electronics Engineer",
    description: "Designs and tests electronic circuits and systems."
  },
  {
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300",
    fullname: "Ajay Nair",
    job: "IoT Developer",
    description: "Builds connected devices and IoT platforms."
  },
  {
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300",
    fullname: "Nisha Kulkarni",
    job: "Project Coordinator",
    description: "Coordinates tasks, timelines, and team communication."
  },
  {
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300",
    fullname: "Varun Malhotra",
    job: "Solutions Architect",
    description: "Designs technical solutions aligned with business goals."
  }
];

var sum = "";

users.forEach(function(elem) {
  sum += `
    <div class="card">
      <img src="${elem.img}" alt="${elem.fullname}">
      <h2>${elem.fullname}</h2>
      <h3>${elem.job}</h3>
      <p>${elem.description}</p>
    </div>
  `;
});

var sum = "";

users.forEach(function(elem) {
    sum = sum + `<div class="card">
            <img src="${elem.img}" alt="Portrait">
            <h2>${elem.fullname}</h2>
            <h3>${elem.job}</h3>
            <p>${elem.description}</p>
        </div>`;
}
);

var main = document.querySelector('main');
main.innerHTML = sum;