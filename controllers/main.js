const api = new Api();
// const dssp = new DSSP();

function getElE(id) {
  return document.getElementById(id);
}

// const mangSanPham = [
//   {
//     id: "topcloth_1",
//     type: "topclothes",
//     name: "Top Cloth 1",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/clothes/topcloth1_show.jpg",
//     imgSrc_png: "../assets/images/clothes/topcloth1.png"
//   },
//   {
//     id: "topcloth_2",
//     type: "topclothes",
//     name: "Top Cloth 2",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/clothes/topcloth2_show.jpg",
//     imgSrc_png: "../assets/images/clothes/topcloth2.png"
//   },
//   {
//     id: "topcloth_3",
//     type: "topclothes",
//     name: "Top Cloth 3",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/clothes/topcloth3_show.jpg",
//     imgSrc_png: "../assets/images/clothes/topcloth3.png"
//   },
//   {
//     id: "topcloth_4",
//     type: "topclothes",
//     name: "Top Cloth 4",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/clothes/topcloth4_show.jpg",
//     imgSrc_png: "../assets/images/clothes/topcloth4.png"
//   },
//   {
//     id: "topcloth_5",
//     type: "topclothes",
//     name: "Top Cloth 5",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/clothes/topcloth5_show.jpg",
//     imgSrc_png: "../assets/images/clothes/topcloth5.png"
//   },
//   {
//     id: "topcloth_6",
//     type: "topclothes",
//     name: "Top Cloth 6 ",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/clothes/topcloth6_show.jpg",
//     imgSrc_png: "../assets/images/clothes/topcloth6.png"
//   },
//   {
//     id: "botcloth_1",
//     type: "botclothes",
//     name: "Bot Cloth 1",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/clothes/botcloth1_show.jpg",
//     imgSrc_png: "../assets/images/clothes/botcloth1.png"
//   },
//   {
//     id: "botcloth_2",
//     type: "botclothes",
//     name: "Bot Cloth 2",
//     des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/clothes/botcloth2_show.jpg",
//     imgSrc_png: "../assets/images/clothes/botcloth2.png"
//   },
//   {
//     id: "botcloth_3",
//     type: "botclothes",
//     name: "Bot Cloth 3",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/clothes/botcloth3_show.jpg",
//     imgSrc_png: "../assets/images/clothes/botcloth3.png"
//   },
//   {
//     id: "botcloth_4",
//     type: "botclothes",
//     name: "Bot Cloth 4",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/clothes/botcloth4_show.jpg",
//     imgSrc_png: "../assets/images/clothes/botcloth4.png"
//   },
//   {
//     id: "botcloth_5",
//     type: "botclothes",
//     name: "Bot Cloth 5",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/clothes/botcloth5_show.jpg",
//     imgSrc_png: "../assets/images/clothes/botcloth5.png"
//   },
//   {
//     id: "shoes_1",
//     type: "shoes",
//     name: "Shoes 1",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/shoes/shoes1_show.jpg",
//     imgSrc_png: "../assets/images/shoes/shoes1.png"
//   },
//   {
//     id: "shoes_2",
//     type: "shoes",
//     name: "Shoes 2",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/shoes/shoes2_show.jpg",
//     imgSrc_png: "../assets/images/shoes/shoes2.png"
//   },
//   {
//     id: "shoes_3",
//     type: "shoes",
//     name: "Shoes 3",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/shoes/shoes3_show.jpg",
//     imgSrc_png: "../assets/images/shoes/shoes3.png"
//   },
//   {
//     id: "shoes_4",
//     type: "shoes",
//     name: "Shoes 4",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/shoes/shoes4_show.jpg",
//     imgSrc_png: "../assets/images/shoes/shoes4.png"
//   },
//   {
//     id: "shoes_5",
//     type: "shoes",
//     name: "Shoes 5",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/shoes/shoes5_show.jpg",
//     imgSrc_png: "../assets/images/shoes/shoes5.png"
//   },
//   {
//     id: "handbag_1",
//     type: "handbags",
//     name: "Handbag 1",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/handbags/handbag1_show.jpg",
//     imgSrc_png: "../assets/images/handbags/handbag1.png"
//   },
//   {
//     id: "handbag_2",
//     type: "handbags",
//     name: "Handbag 2",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/handbags/handbag2_show.jpg",
//     imgSrc_png: "../assets/images/handbags/handbag2.png"
//   },
//   {
//     id: "handbag_3",
//     type: "handbags",
//     name: "Handbag 3",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/handbags/handbag3_show.jpg",
//     imgSrc_png: "../assets/images/handbags/handbag3.png"
//   },
//   {
//     id: "necklace_1",
//     type: "necklaces",
//     name: "Necklace 1",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/necklaces/necklace1_show.jpg",
//     imgSrc_png: "../assets/images/necklaces/necklace1.png"
//   },
//   {
//     id: "necklace_2",
//     type: "necklaces",
//     name: "Necklace 2",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/necklaces/necklace2_show.jpg",
//     imgSrc_png: "../assets/images/necklaces/necklace2.png"
//   },
//   {
//     id: "necklace_3",
//     type: "necklaces",
//     name: "Necklace 3",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/necklaces/necklace3_show.jpg",
//     imgSrc_png: "../assets/images/necklaces/necklace3.png"
//   },
//   {
//     id: "hairstyle_1",
//     type: "hairstyle",
//     name: "Hairstyle 1",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/hairstyle/hairstyle1_show.jpg",
//     imgSrc_png: "../assets/images/hairstyle/hairstyle1.png"
//   },
//   {
//     id: "hairstyle_2",
//     type: "hairstyle",
//     name: "Hairstyle 2",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/hairstyle/hairstyle2_show.jpg",
//     imgSrc_png: "../assets/images/hairstyle/hairstyle2.png"
//   },
//   {
//     id: "hairstyle_3",
//     type: "hairstyle",
//     name: "Hairstyle 3",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/hairstyle/hairstyle3_show.jpg",
//     imgSrc_png: "../assets/images/hairstyle/hairstyle3.png"
//   },
//   {
//     id: "background_1",
//     type: "background",
//     name: "Background 1",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/background/background1_show.jpg",
//     imgSrc_png: "../assets/images/background/background1.jpg"
//   },
//   {
//     id: "background_2",
//     type: "background",
//     name: "Background 2",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/background/background2_show.jpg",
//     imgSrc_png: "../assets/images/background/background2.jpg"
//   },
//   {
//     id: "background_3",
//     type: "background",
//     name: "Background 3",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/background/background3_show.jpg",
//     imgSrc_png: "../assets/images/background/background3.jpg"
//   },
//   {
//     id: "background_4",
//     type: "background",
//     name: "Background 4",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//     imgSrc_jpg: "../assets/images/background/background4_show.jpg",
//     imgSrc_png: "../assets/images/background/background4.jpg"
//   }
// ];


// function hienThiTrangHome() {
//   let type = "topclothes";
//   renderUI(type);
// }
// hienThiTrangHome();


// function taoMangCungKieu(type, callback) {
//   setTimeout(function () {
//     let mangCungKieu = new Array();
//     for (let i = 0; i < mangSanPham.length; i++) {
//       const product = mangSanPham[i];
//       if (product.type === type) {
//         mangCungKieu.push(product);
//       }
//     }
//     callback(mangCungKieu);
//   },);

// }

// function renderUI(type) {
// taoMangCungKieu(type, function(result){;
//     let content = "";
//     result.forEach(function (product) {
//       content += `
//     <div class="item1" id = "content_item">
//     <img src="../assets/images/clothes/${product.imgSrc_jpg}">
//     <div>
//       <p>${product.name}</p>
//       </div>
//       <div>
//       <button>Thử đồ</button>
//       </div>
//     </div>
//     `;

//     },);

//     document.getElementById("list").innerHTML = content;
//   }, 2000);
// }

// function taoMangCungKieu(type, callback) {
//   setTimeout(function(){
//   let mangCungKieu = new Array();
//   for (let i = 0; i < mangSanPham.length; i++) {
//     if (mangSanPham[i].type === type) {
//       mangCungKieu.push(mangSanPham[i]);
//     }
//   }
//   console.log(mangCungKieu);
//   callback(mangCungKieu);
// }, 1000);

// }

function getlistProducts(type) {
  const promise = api.fecthData();
  promise
    .then(function (result) {
      renderUI(result.data, type);
    })
    .catch(function (error) { })
}
getlistProducts("topclothes");

function renderUI(data, type) {
  let content = "";

  let mangCungKieu = kiemTraCungKieu(data, type);
  mangCungKieu.forEach(product => {
    content += `
        <div class="item1" id = "content_item">
        <img src="../assets/images/${product.type}/${product.imgSrc_jpg}">
        <div>
          <p>${product.name}</p>
          <span>${product.type}</span>
          </div>
          <div>
          <button data-id="${product.id}" data-name="${product.name}" data-type="${product.type}" data-imgSrcjpg="${product.imgSrc_jpg}" data-imgSrcpng="${product.imgSrc_png}" class="thuDo" id="test123" onclick="maiKhongXong()">Thử đồ</button>
          </div>
        </div>
    `;
  });

  getElE("list").innerHTML = content;

}
function kiemTraCungKieu(data, type) {
  let mangCungKieu = new Array();
  for (let i = 0; i < data.length; i++) {
    if (data[i].type === type) {
      mangCungKieu.push(data[i]);
    }
  }
  return mangCungKieu;
}

let suKienClick = document.querySelectorAll("a");
for (let i = 0; i < suKienClick.length; i++) {
  const product = suKienClick[i];
  product.addEventListener("click", function (event) {
    let temp = product.innerText;
    console.log(product.innerText);
    if (temp === "Áo") {
      getlistProducts("topclothes");
    } else if (temp === "Quần") {
      getlistProducts("botclothes");
    } else if (temp === "Giầy Dép") {
      getlistProducts("shoes");
    } else if (temp === "Túi Xách") {
      getlistProducts("handbags");
    } else if (temp === "Dây Chuyền") {
      getlistProducts("necklaces");
    } else if (temp === "Kiểu Tóc") {
      getlistProducts("hairstyle");
    } else if (temp === "Nền") {
      getlistProducts("background");
    }
  })
}

// $("body").delegate(".thuDo", "click", function () {
//   var id = $(this).data("id");
//   var type = $(this).data("type");
//   var name = $(this).data("name");
//   var desc = $(this).data("desc");
//   var imgsrc_jpg = $(this).data("imgsrcjpg");
//   var imgSrc_png = $(this).data("imgsrcpng");

//   var product = new Product(id, type, name, desc, imgsrc_jpg, imgSrc_png);
//   console.log(product.type);
//   console.log(imgSrc_png);

//   if (product.type === "topclothes") {

//     renderBikiniTop(product.imgSrc_png);
//   }
//   if (product.type === "botclothes") {
//     renderBikiniBottom(product.imgSrc_png);
//   }
//   if (product.type === "shoes") {
//     renderFeet(product.imgSrc_png);
//   }
//   if (product.type === "handbags") {
//     renderHandbags(product.imgSrc_png);
//   }
//   if (product.type === "necklaces") {
//     renderNecklace(product.imgSrc_png);
//   }
//   if (product.type === "hairstyle") {
//     renderHairstyle(product.imgSrc_png);
//   }
//   if (product.type === "background") {
//     renderBackground(product.imgSrc_png);
//   }
// })


function maiKhongXong() {
  let kiemtra = getElE("test123");
  let elementParent = kiemtra.parentElement;
  let product = elementParent.parentElement;
  product.imgSrc_jpg= product.querySelector("img").src;
  product.name = product.querySelector("p").innerText;
  product.type = product.querySelector("span").innerText;
  console.log(product.name);
  console.log(product.type);
  console.log(product.imgSrc_jpg);

  if (product.type === "topclothes") {

    renderBikiniTop(product.imgSrc_png);
  }
  if (product.type === "botclothes") {
    renderBikiniBottom(product.imgSrc_png);
  }
  if (product.type === "shoes") {
    renderFeet(product.imgSrc_png);
  }
  if (product.type === "handbags") {
    renderHandbags(product.imgSrc_png);
  }
  if (product.type === "necklaces") {
    renderNecklace(product.imgSrc_png);
  }
  if (product.type === "hairstyle") {
    renderHairstyle(product.imgSrc_png);
  }
  if (product.type === "background") {
    renderBackground(product.imgSrc_png);
  }

}
function renderBikiniTop(img) {
  $(".bikinitop").css({
    width: "500px",
    height: "500px",
    background: `url(${img})`,
    position: "absolute",
    top: "-9%",
    left: "-5%",
    zIndex: "3",
    transform: "scale(0.5)"
  });
}

function renderBikiniBottom(img) {
  $(".bikinibottom").css({
    width: "500px",
    height: "1000px",
    background: `url(${img})`,
    position: "absolute",
    top: "-30%",
    left: "-5%",
    zIndex: "2",
    transform: "scale(0.5)"
  });
}

function renderFeet(img) {
  $(".feet").css({
    width: "500px",
    height: "1000px",
    background: `url(${img})`,
    position: "absolute",
    bottom: "-37%",
    right: "-3.5%",
    transform: "scale(0.5)",
    zIndex: "1"
  });
}

function renderHandbags(img) {
  $(".handbag").css({
    width: "500px",
    height: "1000px",
    background: `url(${img})`,
    position: "absolute",
    bottom: "-40%",
    right: "-3.5%",
    transform: "scale(0.5)",
    zIndex: "4"
  });
}

function renderNecklace(img) {
  $(".necklace").css({
    width: "500px",
    height: "1000px",
    background: `url(${img})`,
    position: "absolute",
    bottom: "-40%",
    right: "-3.5%",
    transform: "scale(0.5)",
    zIndex: "4"
  });
}

function renderHairstyle(img) {
  $(".hairstyle").css({
    width: "1000px",
    height: "1000px",
    background: `url(${img})`,
    position: "absolute",
    top: "-75%",
    right: "-57%",
    transform: "scale(0.15)",
    zIndex: "4"
  });
}

function renderBackground(img) {
  $(".background").css({
    backgroundImage: `url(${img})`
  });
}

