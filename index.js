const body = document.getElementById("body");

const blogComponent = () => {
  const container = document.createElement("div");
  container.classList.add("container");
  container.style.margin = "0 auto";
  container.style.width = "70%";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.alignItems = "center";
  container.style.justifyContent = "center";
  container.style.backgroundColor = "grey";
  container.style.minHeight = "500px";
  container.style.marginTop = "50px";
  container.style.border = "3px solid black";
  body.appendChild(container);

  const title = document.createElement("h1");
  container.appendChild(title);
  title.textContent = "Blog Title";

  const mailIcon = document.createElement("img");
  container.appendChild(mailIcon);
  mailIcon.setAttribute("src", "./mail-icon.png");
  mailIcon.style.width = "20%";
  mailIcon.style.marginTop = "20px";

  const paragraph = document.createElement("p");
  container.appendChild(paragraph);
  paragraph.textContent =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt exercitationem nisi, quis, dolor dolorem explicabo vel voluptatem, quod quibusdam cumque deleniti quas facere error est dolore at nihil consequatur! Atque?";
  paragraph.style.textAlign = "center";
  paragraph.style.width = "20%";
  paragraph.style.marginTop = "20px";

  const button = document.createElement("button");
  container.appendChild(button);
  button.textContent = "Read More";
  button.style.boxShadow = "2px 2px";
  button.style.border = "2px solid black";
  button.style.marginTop = "20px";
};
blogComponent();
