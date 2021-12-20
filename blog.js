let blogs = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image").files;

  /*  console.log('function addBlog') */
  image = URL.createObjectURL(image[0]);

  let blog = {
    title: title,
    content: content,
    image: image,
    postAt: new Date(),
  };

  blogs.push(blog);
  /* console.log(blogs) */
  alert("Data Berhasil di Simpan");

  /*  mainFunction(); */
  renderBlog();
  detailBlog()
}

function renderBlog() {
  let contentContainer = document.getElementById("contents");
  contentContainer.innerHTML = "";

  for (let i = 0; i < blogs.length; i++) {
    contentContainer.innerHTML += `
            <div class="blog-list-item">
                <div class="blog-image">
                <img src="${blogs[i].image}" alt="" />
            </div>
            <div class="blog-content">
              <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank"
                >${blogs[i].title}</a
              >
            </h1>
            <div class="detail-blog-content">
              ${getFullTime(blogs[i].postAt)} | Deby Trisandi
            </div>
            <p>${blogs[i].content}</p>
            <div style="text-align: right; margin-top: 20px; font-size: 15px; color:grey">
              ${getDistanceTime(blogs[i].postAt)}
            </div>
                                   `;
  } 
}

function detailBlog() {
  let detailsContainer = document.getElementById("blog-detail");
   detailsContainer.innerHTML =""
    detailsContainer.innerHTML = `
    <div> class="blog-detail">
      <div class="blog-detail-container">
        <h1>${blogs[i].title}</h1>
        <div class="author"> ${getFullTime(
          blogs[i].postAt
        )} | Deby Trisandi</div>
        <img src="${blogs[i].image}" alt="detail" />
        <p>
          ${blogs[i].content}
        </p>
      </div>
    </div>

  `;
}

let month = [
  "Januari ",
  "Februari ",
  "Maret ",
  "April ",
  "Mei ",
  "Juni ",
  "Juli ",
  "Agustus",
  " September",
  " Oktober",
  "November",
  " Desember",
];

function getFullTime(time) {
  let date = time.getDate();
  let monthIndex = time.getMonth();
  let year = time.getFullYear();
  let hours = time.getHours();
  let minutes = time.getMinutes();

  let result = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`;

  return result;
}

function getDistanceTime(time) {
  let timePost = time;
  let timeNow = new Date();

  let distance = timeNow - timePost;

  let miliseconds = 1000;
  let secondsInMinutes = 60;
  let minutesInHours = 60;
  let hoursInDay = 23;

  let disctanceDay = Math.floor(
    distance / (miliseconds * secondsInMinutes * minutesInHours * hoursInDay)
  );

  if (disctanceDay >= 1) {
    return `${disctanceDay} Day Ago`;
  } else {
    let distanceHour = Math.floor(
      distance / (miliseconds * secondsInMinutes * minutesInHours)
    );

    if (distanceHour >= 1) {
      return `${distanceHour} Hour Ago`;
    } else {
      let distanceMinutes = Math.floor(
        distance / (miliseconds * secondsInMinutes)
      );
      if (distanceMinutes >= 1) {
        return `${distanceMinutes} Minutes Ago`;
      } else {
        let disctanceSeconds = Math.floor(distance / miliseconds);

        return `${disctanceSeconds} Seconds Ago`;
      }
    }
  }
}

setInterval(() => {
  renderBlog();
}, 1000);
