const datas = [
    {
        company: "ShopEase",
        task: "Fix Mobile Button Issue",
        description: "Debug using Chrome DevTools, check for overlappi...",
        deadline: "21 March 2025",
        status: "Completed",
    },
    {
        company: "DevSolutions",
        task: "Upgrade Node.js Version",
        description:
            "Update Node.js to latest stable version, test compatibility...",
        deadline: "20 April 2025",
        status: "Pending",
    },
    {
        company: "ByteWorks",
        task: "Refactor Frontend Code",
        description:
            "Optimize components, remove unused code, improve structure...",
        deadline: "25 March 2025",
        status: "In Progress",
    },
    {
        company: "AppMasters",
        task: "Fix API Authentication Bug",
        description: "Debug the authentication flow, fix token validation...",
        deadline: "28 March 2025",
        status: "Completed",
    },
    {
        company: "PixelCraft",
        task: "Design Landing Page",
        description: "Create wireframes, implement responsive design...",
        deadline: "18 April 2025",
        status: "In Review",
    },
    {
        company: "CodeSquad",
        task: "Implement User Profile Page",
        description: "Develop a user profile page with dynamic data fetching...",
        deadline: "1 April 2025",
        status: "Pending",
    },
    {
        company: "CodeCrafters",
        task: "Implement Dark Mode",
        description: "Modify Tailwind config, add theme switcher...",
        deadline: "10 April 2025",
        status: "Completed",
      },
    {
        company: "CloudWave",
        task: "Migrate App to AWS",
        description:
            "Set up EC2 instances, migrate databases, configure security groups...",
        deadline: "15 April 2025",
        status: "In Progress",
    },
    {
        company: "DevXperts",
        task: "Fix Broken Links on Website",
        description: "Identify and replace broken internal and external links...",
        deadline: "7 April 2025",
        status: "Completed",
    },

    {
        company: "SwiftPay",
        task: "Optimize Home page",
        description: "Debug using Chrome DevTools, check for overlappi...",
        deadline: "21 March 2025",
        status: "Completed",
    },
    {
        company: "Meta",
        task: "Add new emoji 🙌🙌",
        description: "Debug using Chrome DevTools, check for overlappi...",
        deadline: "21 March 2025",
        status: "Completed",
    },
    {
        company: "Google LLC",
        task: "Integrate OpenAI API",
        description: "Debug using Chrome DevTools, check for overlappi...",
        deadline: "21 March 2025",
        status: "Completed",
    },
];

let index = 0;
for (const data of datas) {
    index++;
    const div = document.createElement("div");
    div.classList.add("my-3");
    div.innerHTML = `
   <div class=" w-full max-w-sm bg-[#f4f7ff] rounded-2xl border border-gray-200 shadow-md">
      <div class="p-5">
      <div class="h-10 px-4 py-2 bg-white rounded-lg justify-center items-center gap-2.5 inline-flex mt-4">
    <div class="text-[#00303c] text-base font-normal font-['Poppins'] tracking-wide ">${data.company}</div>
</div>
      <div class="text-[#00303c] text-2xl font-medium font-['Poppins'] tracking-wide mt-4">${data.task}</div>
       <div class=" bg-white rounded-lg mt-4 border border-[#3752fd]/0">
       <div class="p-4 opacity-50 text-black text-base font-normal font-['Poppins'] tracking-wide">${data.description}</div>
       </div>

       <div class="w-[294px] h-[0px] border border-[#3752fd]/20 mt-4"></div>

        <div class="flex justify-between items-center mt-4">
         <div class="text-[#00303c] text-medium font-medium font-['Poppins'] tracking-wide">Deadline:<br />${data.deadline}</div>
         
        
        <button id="status-btn-${index}" class="status-btn btn btn-info bg-[#3752fd] px-5 py-2.5  rounded-lg justify-center items-center gap-2.5 inline-flex text-white text-base font-medium font-['Poppins'] tracking-wide">Completed</div>
         </button>
        </div>
      
    </div>
  `;
    getElement("tasks-container").appendChild(div);
}
getElement("clear-history");

eventHandler("clear-history", function () {
    getElement("sidebar-card-container").innerHTML = "";
    location.reload();
});
let taskAssigned = getElement("task-assigned");
let tasksQuantity = datas.length;
taskAssigned.innerText = `${tasksQuantity}`;

for (let i = 0; i < datas.length; i++) {
    const btn = document.getElementById(`status-btn-${i + 1}`);

    if (btn) {
        btn.addEventListener("click", function () {
            let noti = Number(getInnerText("notification"));
            console.log(noti, "data.js", 199);
            console.log(`Button ${i} clicked`);
            tasksQuantity--;
            noti++;
            getElement("notification").innerText = noti;
            taskAssigned.innerText = `${tasksQuantity}`;

            let text = this?.parentNode?.parentNode?.childNodes[3]?.textContent;
            alert(`Congratulations completed task ${text}`);
            if (tasksQuantity < 1) {
                alert("Congratulations All tasks completed");
            }

            this.setAttribute("disabled", "");
            let completedDiv = document.createElement("div");
            completedDiv.innerHTML = `
  <h2 class="my-3 border border-black shadow-md p-3 rounded-md bg-gray-50">
    You have Completed The Task <span class="text-black text-mediem font-semibold">${text} </span> at ${new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true })}
  </h2>
  `;
            getElement("sidebar-card-container").appendChild(completedDiv);
        });
    }
}
getElement("u_date").innerHTML = ` 
  <span class="font-normal">${new Date().toLocaleDateString("en-US", { weekday: "short" })}
  </span>
  <br>
  ${new Date()
        .toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        })
        .replace(",", "")
        .replace(/(\d+) (\d+)/, "$1 $2")} `;
