document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const header = document.getElementById("main-header");
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector(".main-nav");
  const searchTrigger = document.querySelector(".search-trigger");
  const searchModal = document.querySelector(".search-modal");
  const closeSearch = document.getElementById("close-search");
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");

  // Sticky Header Effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile Menu Toggle
  mobileMenuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    const icon = mobileMenuBtn.querySelector("i");
    if (nav.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      const icon = mobileMenuBtn.querySelector("i");
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    });
  });

  // Search Modal Functionality
  searchTrigger.addEventListener("click", () => {
    searchModal.classList.add("active");
    setTimeout(() => searchInput.focus(), 100);
  });

  const closeSearchModal = () => {
    searchModal.classList.remove("active");
  };

  closeSearch.addEventListener("click", closeSearchModal);

  // Close on click outside
  searchModal.addEventListener("click", (e) => {
    if (e.target === searchModal) {
      closeSearchModal();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && searchModal.classList.contains("active")) {
      closeSearchModal();
    }
  });

  // Search Action (Demo)
  const performSearch = () => {
    const query = searchInput.value.trim();
    if (query) {
      alert(`Đang tìm kiếm: ${query} (Tính năng đang phát triển)`);
      searchInput.value = "";
      closeSearchModal();
    }
  };

  searchBtn.addEventListener("click", performSearch);
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      performSearch();
    }
  });

  // Add animation delay to category cards
  const cards = document.querySelectorAll(".category-card");
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
});

// Mock Data
const foodData = [
  // Phở & Bún
  {
    id: 1,
    name: "Phở Bò Tái Nạm",
    price: 65000,
    image:
      "https://phongocha.vn/thumbs/540x540x1/upload/product/ngocha7490-9695.jpg",
    category: "pho",
  },
  {
    id: 2,
    name: "Bún Chả Hà Nội",
    price: 60000,
    image:
      "https://cdn.tgdd.vn/Files/2017/04/12/971481/cach-lam-bun-cha-ha-noi-truyen-thong-202112211431417496.jpg",
    category: "pho",
  },
  {
    id: 3,
    name: "Bún Bò Huế",
    price: 65000,
    image:
      "https://images.unsplash.com/photo-1631709497146-a239ef373cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "pho",
  },
  {
    id: 4,
    name: "Bún Đậu Mắm Tôm",
    price: 55000,
    image:
      "https://i1-giadinh.vnecdn.net/2025/05/16/Bnummtm6vnexpress-1747388495-2256-1747388531.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=X7wLWwHaSeXDoU0MS4XZFQ",
    category: "pho",
  },
  {
    id: 5,
    name: "Bún Riêu Cua",
    price: 50000,
    image:
      "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "pho",
  },
  {
    id: 6,
    name: "Mì Quảng",
    price: 55000,
    image:
      "https://hapinut.com/wp-content/uploads/2022/03/mi-quang-quang-nam.jpg",
    category: "pho",
  },

  // Cơm
  {
    id: 7,
    name: "Cơm Tấm Sườn Bì",
    price: 55000,
    image:
      "https://www.huongnghiepaau.com/wp-content/uploads/2017/08/com-tam-suon-bi-cha-chay.jpg",
    category: "rice",
  },
  {
    id: 8,
    name: "Cơm Gà Hội An",
    price: 60000,
    image:
      "https://i1-giadinh.vnecdn.net/2023/04/22/Buoc-11-thanh-pham-1-11-9981-1682135995.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=EoFEOa6hjGrKmgYE1oOjMg",
    category: "rice",
  },
  {
    id: 9,
    name: "Cơm Rang Dưa Bò",
    price: 50000,
    image:
      "https://i1-giadinh.vnecdn.net/2023/10/17/Buoc-8-Thanh-pham-1-8-2323-1697527935.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=At4h46ylyq2RBgMxf9SO1w",
    category: "rice",
  },
  {
    id: 10,
    name: "Cơm Niêu Cá Kho",
    price: 85000,
    image:
      "https://comnieunhungoc.com/storage/app/uploads/public/650/2bb/bb3/thumb_75_1344_756_0_0_crop.jpg",
    category: "rice",
  },

  // Ăn vặt
  {
    id: 11,
    name: "Bánh Mì Thập Cẩm",
    price: 35000,
    image:
      "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/banh_mi_thap_cam_ef08723920.jpg",
    category: "bread",
  },
  {
    id: 12,
    name: "Gỏi Cuốn Tôm Thịt",
    price: 15000,
    image: "https://lienthanh1906.vn/wp-content/uploads/2023/11/image.jpeg",
    category: "snacks",
  },
  {
    id: 13,
    name: "Bánh Xèo Miền Tây",
    price: 45000,
    image:
      "https://file.hstatic.net/200000721249/file/banh_xeo_mien_tay__1__d8135c53e6a84a6dbbd80431a1d587fe.jpg",
    category: "snacks",
  },
  {
    id: 14,
    name: "Bánh Cuốn Nóng",
    price: 40000,
    image: "https://static.vinwonders.com/production/banh-cuon-ha-noi-1.jpg",
    category: "pho",
  },
  {
    id: 15,
    name: "Nem Nướng Nha Trang",
    price: 55000,
    image:
      "https://mia.vn/media/uploads/blog-du-lich/diem_ten_10_quan_nem_nuong_nha_trang_ngon_quen_loi_ve_1-1623088085.jpg",
    category: "snacks",
  },

  // Đồ uống
  {
    id: 16,
    name: "Cà Phê Sữa Đá",
    price: 25000,
    image: "https://www.cubes-asia.com/storage/blogs/2023/ca-phe-sua-da.jpg",
    category: "drinks",
  },
  {
    id: 17,
    name: "Trà Đào Cam Sả",
    price: 35000,
    image:
      "https://beptruong.edu.vn/wp-content/uploads/2020/10/tra-dao-cam-sa.jpg",
    category: "drinks",
  },
  {
    id: 18,
    name: "Cà Phê Trứng",
    price: 40000,
    image: "https://blog.dktcdn.net/files/cafe-trung-2.jpg",
    category: "drinks",
  },
  {
    id: 19,
    name: "Sinh Tố Bơ",
    price: 45000,
    image: "https://beptruong.edu.vn/wp-content/uploads/2021/03/sinh-to-bo-dua.jpg",
    category: "drinks",
  },
  {
    id: 20,
    name: "Chè Dừa dầm",
    price: 35000,
    image:
      "https://cdn.tgdd.vn/Files/2021/12/24/1406445/cach-lam-che-dua-dam-ngon-chuan-vi-hai-phong-tai-nha-202112240111202994.jpg",
    category: "drinks",
  },
  {
    id: 21,
    name: "Coca-Cola",
    price: 5000,
    image:
      "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/uong_Coca_co_tot_khong_57b0f440a7.jpg",
    category: "drinks",
  },
    {
    id: 22,
    name: "Pepsi",
    price: 5000,
    image:
      "https://fujikostore.vn/wp-content/uploads/2024/08/pepsi-lon-160ml-2.jpg",
    category: "drinks",
  },
  {
    id: 23,
    name: "Cơm trắng",
    price: 5000,
    image:
      "https://product.hstatic.net/200000848723/product/dia_com_e82cf1632f1a42978972bdfd3c0e327f_1024x1024.png",
    category: "Other",
  },
    {
    id: 24,
    name: "Xiên bẩn",
    price: 25000,
    image:
      "https://dienmayhoki.com/wp-content/uploads/2023/09/cach-lam-ca-vien-3.jpg",
    category: "snacks",
  },
  {
    id: 25,
    name: "chả viên nướng",
    price: 10000,
    image:
      "https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/09/cach-lam-cha-vien-nuong-thumb.jpg",
    category: "Other",
  },
  {
    id: 26,
    name: "Nước lọc",
    price: 4000,
    image:
      "https://cdn.tgdd.vn/Products/Images/2563/84816/bhx/thung-24-chai-nuoc-tinh-khiet-aquafina-500ml-202407121620249226.jpg",
    category: "drinks",
  },
  {
    id: 27,
    name: "Mì trộn Indomie",
    price: 15000,
    image:
      "https://mms.img.susercontent.com/vn-11134513-7r98o-lthlp6fjp1cd22@resize_ss640x400!@crop_w640_h400_cT",
    category: "pho",
  },
  {
    id: 28,
    name: "Bánh sừng bò",
    price: 44000,
    image:
      "https://cdn.tgdd.vn/Files/2021/08/06/1373418/cach-lam-banh-sung-bo-banh-croissant-ngan-lop-thom-ngon-noi-tieng-cua-phap-202108061216171587.jpg",
    category: "bread",
  },
];

// State
let cart = [];
let notifications = [];

// DOM Elements
const foodGrid = document.getElementById("food-grid");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const closeCartBtn = document.querySelector(".close-btn");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");
const cartCountElement = document.getElementById("cart-count");
const checkoutBtn = document.getElementById("checkout-btn");
const paymentModal = document.getElementById("payment-modal");
const closePaymentBtn = document.getElementById("close-payment");
const paymentAmountElement = document.getElementById("payment-amount");
const confirmPaymentBtn = document.getElementById("confirm-payment");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const categoryBtns = document.querySelectorAll(".cat-btn");
const notifIcon = document.getElementById("notif-icon");
const notifDropdown = document.getElementById("notif-dropdown");
const notifList = document.getElementById("notif-list");
const notifCount = document.getElementById("notif-count");
const notificationContainer = document.getElementById("notification-container");

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  renderFood(foodData);
  startRealTimeNotifications();
});

// Render Food Items
function renderFood(items) {
  foodGrid.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("food-card");
    card.innerHTML = `
            <div class="food-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="food-info">
                <h3>${item.name}</h3>
                <span class="food-price">${formatCurrency(item.price)}</span>
                <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                    <i class="fas fa-plus"></i> Thêm vào giỏ
                </button>
            </div>
        `;
    foodGrid.appendChild(card);
  });
}

// Format Currency
function formatCurrency(amount) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
}

// Add to Cart
window.addToCart = function (id) {
  const item = foodData.find((f) => f.id === id);
  const existingItem = cart.find((c) => c.id === id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  updateCartUI();
  showToast(`Đã thêm ${item.name} vào giỏ hàng!`);
};

// Update Cart UI
function updateCartUI() {
  // Update Badge
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountElement.textContent = totalItems;

  // Render Cart Items
  cartItemsContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML =
      '<p class="empty-cart-msg">Giỏ hàng đang trống.</p>';
  } else {
    cart.forEach((item) => {
      total += item.price * item.quantity;
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <span class="cart-item-price">${formatCurrency(
                      item.price,
                    )}</span>
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="updateQuantity(${
                          item.id
                        }, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${
                          item.id
                        }, 1)">+</button>
                        <i class="fas fa-trash remove-item" onclick="removeFromCart(${
                          item.id
                        })"></i>
                    </div>
                </div>
            `;
      cartItemsContainer.appendChild(cartItem);
    });
  }

  cartTotalElement.textContent = formatCurrency(total);
}

// Update Quantity
window.updateQuantity = function (id, change) {
  const item = cart.find((c) => c.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(id);
    } else {
      updateCartUI();
    }
  }
};

// Remove from Cart
window.removeFromCart = function (id) {
  cart = cart.filter((c) => c.id !== id);
  updateCartUI();
};

// Search Functionality
function searchFood() {
  const term = searchInput.value.toLowerCase();
  const filtered = foodData.filter((item) =>
    item.name.toLowerCase().includes(term),
  );
  renderFood(filtered);
}

searchBtn.addEventListener("click", searchFood);
searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") searchFood();
});

// Category Filter
categoryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Active class
    categoryBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;
    if (category === "all") {
      renderFood(foodData);
    } else {
      const filtered = foodData.filter((item) => item.category === category);
      renderFood(filtered);
    }
  });
});

// Modal Logic
cartBtn.addEventListener("click", () => {
  cartModal.style.display = "flex";
});

closeCartBtn.addEventListener("click", () => {
  cartModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === cartModal) cartModal.style.display = "none";
  if (e.target === paymentModal) paymentModal.style.display = "none";
});

// Checkout Logic
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Giỏ hàng trống!");
    return;
  }
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  paymentAmountElement.textContent = formatCurrency(total);
  cartModal.style.display = "none";
  paymentModal.style.display = "flex";
});

closePaymentBtn.addEventListener("click", () => {
  paymentModal.style.display = "none";
});

confirmPaymentBtn.addEventListener("click", () => {
  alert("Cảm ơn bạn đã đặt hàng! Đơn hàng đang được xử lý.");
  cart = [];
  updateCartUI();
  paymentModal.style.display = "none";
});

// Notification Logic
notifIcon.addEventListener("click", () => {
  notifDropdown.classList.toggle("active");
});

function addNotification(message) {
  const notif = {
    id: Date.now(),
    message: message,
    time: new Date().toLocaleTimeString(),
  };
  notifications.unshift(notif);
  updateNotifUI();
  showToast(message);
}

function updateNotifUI() {
  notifCount.textContent = notifications.length;
  notifList.innerHTML = "";
  notifications.forEach((n) => {
    const li = document.createElement("li");
    li.innerHTML = `<i class="fas fa-info-circle"></i> <div><strong>${n.time}</strong>: ${n.message}</div>`;
    notifList.appendChild(li);
  });
}

// Toast Notification
function showToast(message) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <div class="toast-content">
            <h4>Thông báo</h4>
            <p>${message}</p>
        </div>
    `;
  notificationContainer.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 5000);
}

// Simulated Real-time Events
function startRealTimeNotifications() {
  const messages = [
    "Có đơn hàng mới từ bàn 5",
    "Món 'Phở Bò' đang được giảm giá 10%",
    "Khách hàng Nguyễn Văn A vừa đánh giá 5 sao",
    "Đã cập nhật thực đơn mới",
  ];

  setInterval(() => {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    // Only show random notification occasionally to not annoy user
    if (Math.random() > 0.7) {
      addNotification(randomMsg);
    }
  }, 15000); // Check every 15 seconds
}

// Auth Modal Logic
const authModal = document.getElementById("auth-modal");
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const closeAuthBtn = document.getElementById("close-auth");
const authTabs = document.querySelectorAll(".auth-tab");
const authForms = document.querySelectorAll(".auth-form");
const captchaDisplay = document.getElementById("captcha-display");
const refreshCaptchaBtn = document.getElementById("refresh-captcha");
const captchaInput = document.getElementById("captcha-input");
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");

let currentCaptcha = "";

// Open Modal
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openAuthModal("login-form");
});

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openAuthModal("register-form");
});

function openAuthModal(targetId) {
  authModal.style.display = "flex";
  switchTab(targetId);
  if (targetId === "register-form") {
    generateCaptcha();
  }
}

closeAuthBtn.addEventListener("click", () => {
  authModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === authModal) authModal.style.display = "none";
});

// Switch Tabs
authTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.target;
    switchTab(target);
  });
});

function switchTab(targetId) {
  // Update Tabs
  authTabs.forEach((t) => {
    if (t.dataset.target === targetId) {
      t.classList.add("active");
    } else {
      t.classList.remove("active");
    }
  });

  // Update Forms
  authForms.forEach((f) => {
    if (f.id === targetId) {
      f.classList.add("active");
    } else {
      f.classList.remove("active");
    }
  });

  if (targetId === "register-form") {
    generateCaptcha();
  }
}

// Captcha Logic
function generateCaptcha() {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  currentCaptcha = captcha;
  captchaDisplay.textContent = captcha;
}

refreshCaptchaBtn.addEventListener("click", generateCaptcha);

// Form Submission
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (captchaInput.value.toUpperCase() !== currentCaptcha) {
    alert("Mã xác nhận không đúng! Vui lòng thử lại.");
    generateCaptcha();
    captchaInput.value = "";
    return;
  }

  alert("Đăng ký thành công! Vui lòng đăng nhập.");
  registerForm.reset();
  switchTab("login-form");
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Đăng nhập thành công!");
  authModal.style.display = "none";
  // Update UI to show logged in state (optional)
  loginBtn.textContent = "Tài khoản";
  registerBtn.style.display = "none";
});

// Social Login
const socialBtns = document.querySelectorAll(".social-btn");
socialBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const provider = btn.textContent.trim();
    alert(`Đang kết nối với ${provider}... (Tính năng đang phát triển)`);
  });
});
