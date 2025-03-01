const colors = [
    "bg-gray-500",
    "bg-gray-500",
    "bg-blue-400",
    "bg-green-600",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-teal-400",
    "bg-slate-400",
    "bg-red-500",
    "bg-yellow-300",
    "bg-orange-300",
  ];
  
  document.getElementById("change-bg-btn").addEventListener("click", function () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    document.getElementById("bodyColor").classList.add(`${randomColor}`);
    document.getElementById("mainContent").classList.add(`${randomColor}`);
  });