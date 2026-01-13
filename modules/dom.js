const root = document.documentElement;
const themeToggler = document.querySelector("#themeToggler");
const themeMeta = document.querySelector("#themeMeta");

const imageInputBtn = document.querySelector("#imageUploadBtn");
const uploadedImg = document.querySelector("#uploaded-image");

let savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  if (savedTheme === "dark") {
    root.classList.toggle("dark");
    if (root.classList.contains("dark")) {
      themeMeta.setAttribute("content", "#212121");
      themeToggler.setAttribute("class", "lucide lucide-sun-icon lucide-sun");
      themeToggler.innerHTML = `<circle cx="12" cy="12" r="4" />
  <path d="M12 2v2" />
  <path d="M12 20v2" />
  <path d="m4.93 4.93 1.41 1.41" />
  <path d="m17.66 17.66 1.41 1.41" />
  <path d="M2 12h2" />
  <path d="M20 12h2" />
  <path d="m6.34 17.66-1.41 1.41" />
  <path d="m19.07 4.93-1.41 1.41" />`;
      console.log("theme toggled");
    }
  }
}

imageInputBtn.addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";

  input.onchange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.error("No file selected!");
      return;
    }

    console.log("Selected file : ", file);

    const imageURL = URL.createObjectURL(file);
    uploadedImg.innerHTML = `<img src ="${imageURL}"/>`;
  };

  input.click();
});

themeToggler.addEventListener("click", () => {
  console.log("theme toggled");
  root.classList.toggle("dark");
  if (root.classList.contains("dark")) {
    themeMeta.setAttribute("content", "#212121");
    themeToggler.setAttribute("class", "lucide lucide-sun-icon lucide-sun");
    themeToggler.innerHTML = `<circle cx="12" cy="12" r="4" />
  <path d="M12 2v2" />
  <path d="M12 20v2" />
  <path d="m4.93 4.93 1.41 1.41" />
  <path d="m17.66 17.66 1.41 1.41" />
  <path d="M2 12h2" />
  <path d="M20 12h2" />
  <path d="m6.34 17.66-1.41 1.41" />
  <path d="m19.07 4.93-1.41 1.41" />`;
    console.log("theme toggled");
    localStorage.setItem('theme', 'dark');
} else {
    themeMeta.setAttribute("content", "#ffffff");
    themeToggler.innerHTML = `<path
    d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
    />`;
    localStorage.setItem('theme', 'light');
    console.log("theme toggled");
  }
});
