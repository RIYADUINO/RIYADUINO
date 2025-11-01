/*******************************************/
/** RIYADUINO JAVASCRIPT LOGIC       **/
/*******************************************/

const projectsData = {
    currency: "SAR",
    en: [
        { id: 1, title: "Desktop Weather Station 🌤️", price: 150, image: "https://placehold.co/600x400/0a0a0a/ffd700?text=Weather+Station", description: "A small, simple wooden box that acts as a mini weather station. It uses the DHT11 sensor to read the live temperature and humidity and displays the information on the OLED screen.", components: ["Arduino Uno R3", "DHT11 Sensor", "OLED Screen", "Wooden Box"] },
        { id: 2, title: "Touch-Lamp Cube 💡", price: 150, image: "https://placehold.co/600x400/0a0a0a/ffd700?text=Touch+Lamp", description: "A hollow wooden cube that works as a modern lamp. An RGB LED glows on the inside. You tap a TTP223 Touch Sensor on the outside to turn it on, tap again to cycle through different colors, and tap-and-hold to turn it off.", components: ["Arduino Uno R3", "TTP223 Touch Sensor", "RGB LED", "Wooden Cube"] },
        { id: 3, title: "Remote-Controlled Lamp 📺", price: 150, image: "https://placehold.co/600x400/0a0a0a/ffd700?text=Remote+Lamp", description: "A smart lamp you can control from your sofa. An IR Receiver reads signals from any standard TV remote, allowing you to turn the RGB LED on/off, change its color, and adjust its brightness.", components: ["Arduino Uno R3", "IR Receiver", "RGB LED", "TV Remote (not included)"] },
        { id: 4, title: '"Clap On" Desk Fan 👏', price: 150, image: "https://placehold.co/600x400/0a0a0a/ffd700?text=Clap+Fan", description: 'A "U" shaped wooden stand that holds a DC Motor and fan blade. The Microphone Sensor listens for sharp sounds. You clap once to turn the fan on, and clap a second time to turn it off.', components: ["Arduino Uno R3", "Microphone Sensor", "DC Motor & Fan", "Wooden Stand"] },
        { id: 5, title: "Digital Ruler Panel 📏", price: 150, image: "https://placehold.co/600x400/0a0a0a/ffd700?text=Digital+Ruler", description: "A practical tool made from a flat piece of wood. The HC-SR04 (ultrasonic sensor) points outwards, and the OLED screen displays the precise distance it's measuring in real-time.", components: ["Arduino Uno R3", "HC-SR04 Ultrasonic Sensor", "OLED Screen"] },
        { id: 6, title: 'The "Smart" Humidity Fan 💦', price: 150, image: "https://placehold.co/600x400/0a0a0a/ffd700?text=Smart+Fan", description: 'A "set it and forget it" smart device. The DHT11 sensor monitors the room\'s humidity. If it gets too high (like from a shower), the DC Motor fan automatically turns on to clear the air and then turns itself off.', components: ["Arduino Uno R3", "DHT11 Sensor", "DC Motor & Fan", "Relay Module"] },
        { id: 7, title: 'The "Riyadh Living Clock" ⏰', price: 150, image: "https://placehold.co/600x400/0a0a0a/ffd700?text=Living+Clock", description: 'A clock that\'s "alive." It uses an RTC Module to get the real time, displaying it on an OLED "face." The face blinks every 5 seconds. Every hour on the dot, the Passive Buzzer chirps, and a Servo makes the whole clock "nod."', components: ["Arduino Uno R3", "RTC Module (DS3231)", "OLED Screen", "Passive Buzzer", "Servo Motor"] },
        { id: 8, title: 'The "Popsicle Friend" (Thermometer) 🥶', price: 150, image: "https://placehold.co/600x400/0a0a0a/ffd700?text=Popsicle+Friend", description: 'A cute, visual thermometer. The DHT11 sensor reads the temperature, and the OLED screen shows a face: sweating when hot (O_O;), happy when nice (^_^), or shivering when cold (>_<). An RGB LED also changes color (red, green, blue) to match.', components: ["Arduino Uno R3", "DHT11 Sensor", "OLED Screen", "RGB LED"] },
        { id: 9, title: 'The "Robot Trio" (Communicating Robots) 🤖➡️🤖🤖', price: 150, image: "https://placehold.co/600x400/0a0a0a/ffd700?text=Robot+Trio", description: 'An advanced project. You build one "Leader" robot and two "Follower" robots. You control the Leader with a TV remote. The Leader sends signals with an IR LED (transmitter) from its back, and the Followers read those signals with their IR Receivers and copy the Leader\'s movements.', components: ["3x Arduino Uno R3", "3x Robot Chassis Kits", "IR LED (Transmitter)", "2x IR Receivers", "TV Remote (not included)"] },
        { id: 10, title: 'The "Riyaduino Mini-TV" (Animation Player) 📺', price: 150, image: "https://placehold.co/600x400/0a0a0a/ffd700?text=Mini+TV", description: 'A tiny wooden TV. The OLED is the screen, and a TTP223 Touch Sensor is the "channel" button. Tapping the button cycles through 5 different, purely animated scenes (like an aquarium, a starfield, a bouncing logo, etc.) that run without any sensors.', components: ["Arduino Uno R3", "OLED Screen", "TTP223 Touch Sensor", "Wooden TV Frame"] },
        { id: 11, title: 'The "Touch Piano" 🎹', price: 150, image: "https://placehold.co/600x400/0a0a0a/ffd700?text=Touch+Piano", description: 'A simple musical instrument. You line up several TTP223 Touch Sensors on a wooden base like piano keys. Tapping each sensor tells the Arduino to play a different musical note on the Passive Buzzer.', components: ["Arduino Uno R3", "Multiple TTP223 Touch Sensors", "Passive Buzzer", "Wooden Base"] },
        { id: 12, title: 'The "Too Hot!" Tantrum Bot 🥵', price: 150, image: "https://placehold.co/600x400/0a0a0a/ffd700?text=Tantrum+Bot", description: 'A funny desk bot that hates heat. When the DHT11 sensor detects a high temperature, the bot throws a tantrum: the OLED shows an angry face, the Passive Buzzer plays a loud alarm, and a Servo motor slams a "hammer" on the table (Boomboomboomboom!).', components: ["Arduino Uno R3", "DHT11 Sensor", "OLED Screen", "Passive Buzzer", "Servo Motor"] }
    ],
    ar: [
        { id: 1, title: "محطة طقس مكتبية 🌤️", price: 150, image: "https://placehold.co/600x400/0a0a0a/ffd700?text=Weather+Station", description: "A small, simple wooden box that acts as a mini weather station. It uses the DHT11 sensor to read the live temperature and humidity and displays the information on the OLED screen.", components: ["Arduino Uno R3", "DHT11 Sensor", "OLED Screen", "Wooden Box"] },
        { id: 2, title: "مكعب المصباح باللمس 💡", price: 150, image: "https://placehold.co/600x400/0a0a0a/ffd700?text=Touch+Lamp", description: "A hollow wooden cube that works as a modern lamp. An RGB LED glows on the inside. You tap a TTP223 Touch Sensor on the outside to turn it on, tap again to cycle through different colors, and tap-and-hold to turn it off.", components: ["Arduino Uno R3", "TTP223 Touch Sensor", "RGB LED", "Wooden Cube"] },
        { id: 3, title: "مصباح بالتحكم عن بعد 📺", price: 150, image: "https://placehold.co/600x400/0a0a0a/ffd700?text=Remote+Lamp", description: "A smart lamp you can control from your sofa. An IR Receiver reads signals from any standard TV remote, allowing you to turn the RGB LED on/off, change its color, and adjust its brightness.", components: ["Arduino Uno R3", "IR Receiver", "RGB LED", "TV Remote (not included)"] },
        { id: 4, title: 'مروحة مكتبية بالتصفيق 👏', price: 150, image: "https://placehold.co/600x400/0a0a0a/ffd700?text=Clap+Fan", description: 'A "U" shaped wooden stand that holds a DC Motor and fan blade. The Microphone Sensor listens for sharp sounds. You clap once to turn the fan on, and clap a second time to turn it off.', components: ["Arduino Uno R3", "Microphone Sensor", "DC Motor & Fan", "Wooden Stand"] },
        { id: 5, title: "مسطرة رقمية 📏", price: 150, image: "https://placehold.co/600x400/0a0a0a/ffd700?text=Digital+Ruler", description: "A practical tool made from a flat piece of wood. The HC-SR04 (ultrasonic sensor) points outwards, and the OLED screen displays the precise distance it's measuring in real-time.", components: ["Arduino Uno R3", "HC-SR04 Ultrasonic Sensor", "OLED Screen"] },
        { id: 6, title: 'مروحة الرطوبة الذكية 💦', price: 150, image: "https://placehold.co/600x400/0a0a0a/ffd700?text=Smart+Fan", description: 'A "set it and forget it" smart device. The DHT11 sensor monitors the room\'s humidity. If it gets too high (like from a shower), the DC Motor fan automatically turns on to clear the air and then turns itself off.', components: ["Arduino Uno R3", "DHT11 Sensor", "DC Motor & Fan", "Relay Module"] },
        { id: 7, title: 'ساعة الرياض الحية ⏰', price: 150, image: "https://placehold.co/600x400/0a0a0a/ffd700?text=Living+Clock", description: 'A clock that\'s "alive." It uses an RTC Module to get the real time, displaying it on an OLED "face." The face blinks every 5 seconds. Every hour on the dot, the Passive Buzzer chirps, and a Servo makes the whole clock "nod."', components: ["Arduino Uno R3", "RTC Module (DS3231)", "OLED Screen", "Passive Buzzer", "Servo Motor"] },
        { id: 8, title: 'صديق الحرارة 🥶', price: 150, image: "https://placehold.co/600x400/0a0a0a/ffd700?text=Popsicle+Friend", description: 'A cute, visual thermometer. The DHT11 sensor reads the temperature, and the OLED screen shows a face: sweating when hot (O_O;), happy when nice (^_^), or shivering when cold (>_<). An RGB LED also changes color (red, green, blue) to match.', components: ["Arduino Uno R3", "DHT11 Sensor", "OLED Screen", "RGB LED"] },
        { id: 9, title: 'ثلاثي الروبوتات 🤖➡️🤖🤖', price: 150, image: "https://placehold.co/600x400/0a0a0a/ffd700?text=Robot+Trio", description: 'An advanced project. You build one "Leader" robot and two "Follower" robots. You control the Leader with a TV remote. The Leader sends signals with an IR LED (transmitter) from its back, and the Followers read those signals with their IR Receivers and copy the Leader\'s movements.', components: ["3x Arduino Uno R3", "3x Robot Chassis Kits", "IR LED (Transmitter)", "2x IR Receivers", "TV Remote (not included)"] },
        { id: 10, title: 'تلفاز ريادوينو المصغر 📺', price: 150, image: "https://placehold.co/600x400/0a0a0a/ffd700?text=Mini+TV", description: 'A tiny wooden TV. The OLED is the screen, and a TTP223 Touch Sensor is the "channel" button. Tapping the button cycles through 5 different, purely animated scenes (like an aquarium, a starfield, a bouncing logo, etc.) that run without any sensors.', components: ["Arduino Uno R3", "OLED Screen", "TTP223 Touch Sensor", "Wooden TV Frame"] },
        { id: 11, title: 'بيانو باللمس 🎹', price: 150, image: "https://placehold.co/600x400/0a0a0a/ffd700?text=Touch+Piano", description: 'A simple musical instrument. You line up several TTP223 Touch Sensors on a wooden base like piano keys. Tapping each sensor tells the Arduino to play a different musical note on the Passive Buzzer.', components: ["Arduino Uno R3", "Multiple TTP223 Touch Sensors", "Passive Buzzer", "Wooden Base"] },
        { id: 12, title: 'روبوت غاضب من الحرارة 🥵', price: 150, image: "https://placehold.co/600x400/0a0a0a/ffd700?text=Tantrum+Bot", description: 'A funny desk bot that hates heat. When the DHT11 sensor detects a high temperature, the bot throws a tantrum: the OLED shows an angry face, the Passive Buzzer plays a loud alarm, and a Servo motor slams a "hammer" on the table (Boomboomboomboom!).', components: ["Arduino Uno R3", "DHT11 Sensor", "OLED Screen", "Passive Buzzer", "Servo Motor"] }
    ]
};

function createParticleBurst(element) { const particleCount = 20; for (let i = 0; i < particleCount; i++) { const particle = document.createElement('div'); particle.classList.add('particle-burst'); element.appendChild(particle); const size = Math.random() * 8 + 4; particle.style.width = `${size}px`; particle.style.height = `${size}px`; particle.style.left = `calc(50% - ${size / 2}px)`; particle.style.top = `calc(50% - ${size / 2}px)`; const angle = Math.random() * 360; const radius = Math.random() * 80 + 40; const x = Math.cos(angle * Math.PI / 180) * radius; const y = Math.sin(angle * Math.PI / 180) * radius; particle.style.setProperty('--x', `${x}px`); particle.style.setProperty('--y', `${y}px`); const duration = Math.random() * 500 + 500; particle.style.animation = `burst-particle-anim ${duration}ms ease-out forwards`; setTimeout(() => particle.remove(), duration); } }

const Common = (() => {
    const state = { isArabic: false };
    const translations = {
        en: { 
            couponBar: "🎉 Get 45% OFF with code: <strong>3ala-rasi</strong>",
            navHome: "Home", 
            navStore: "Store", 
            customProjectBtn: "Custom Project", 
            storeTitle: "Prebuilt Projects Store", 
            searchInputPlaceholder: "Search projects...", 
            cartTitle: "Cart", 
            yourCartTitle: "Your Cart", 
            orderPopupTitle: "Complete Your Order", 
            customOrderTitle: "Request a Custom Project", 
            nameInputPlaceholder: "Your Name", 
            emailInputPlaceholder: "Your Email", 
            phoneInputPlaceholder: "Phone Number", 
            couponPlaceholder: "Sale Coupon (Optional)", 
            orderMessagePlaceholder: "Your ordered items...", 
            customOrderPlaceholder: "Describe your custom project requirements here...", 
            confirmBtn: "Confirm Order", 
            successTitle: "Submission Received!", 
            successMessage: "Thank you! Our engineers will review your request.", 
            stepRead: "Read your message", 
            stepAnalyze: "Analyze requirements", 
            stepContact: "Contact you via WhatsApp or Email to confirm details and arrange pickup", 
            stepStart: "<strong>Start Working!</strong>", 
            closeBtn: "Close", 
            componentsTitle: "Key Components", 
            addToCartBtn: "Add to Cart", 
            subtotal: "Subtotal", 
            checkoutBtn: "Proceed to Checkout", 
            emptyCartMsg: "Your cart is empty.", 
            viewDetailsBtn: "View Details",
            // UPDATED Auth Translations
            authTitle: "Sign In or Continue",
            authSignInTab: "Sign In",
            authSignUpTab: "Create Account",
            authNamePlaceholder: "Full Name",
            authEmailPlaceholder: "Email",
            authPasswordPlaceholder: "Password (min. 8 characters)",
            authLoginBtn: "Login",
            authSignUpBtn: "Create Account",
            authDivider: "or",
            authGuestBtn: "Continue as Guest"
        },
        ar: { 
            couponBar: "🎉 احصل على خصم 45% باستخدام الكود: <strong>3ala-rasi</strong>",
            navHome: "الرئيسية", 
            navStore: "المتجر", 
            customProjectBtn: "مشروع مخصص", 
            storeTitle: "متجر المشاريع الجاهزة", 
            searchInputPlaceholder: "ابحث عن مشروع...", 
            cartTitle: "السلة", 
            yourCartTitle: "سلـتـك", 
            orderPopupTitle: "أكمل طلبك", 
            customOrderTitle: "طلب مشروع مخصص", 
            nameInputPlaceholder: "الاسم الكامل", 
            emailInputPlaceholder: "البريد الإلكتروني", 
            phoneInputPlaceholder: "رقم الجوال", 
            couponPlaceholder: "كوبون الخصم (اختياري)", 
            orderMessagePlaceholder: "المنتجات المطلوبة...", 
            customOrderPlaceholder: "صف متطلبات مشروعك المخصص هنا...", 
            confirmBtn: "تأكيد الطلب", 
            successTitle: "تم استلام طلبك!", 
            successMessage: "شكراً لك! سيقوم مهندسونا بمراجعة طلبك.", 
            stepRead: "سنقرأ رسالتك", 
            stepAnalyze: " نحلل متطلباتك", 
            stepContact: "سنتواصل معك عبر الواتساب أو البريد الإلكتروني لتأكيد التفاصيل وترتيب الاستلام", 
            stepStart: "<strong>نبدأ العمل!</strong>", 
            closeBtn: "إغلاق", 
            componentsTitle: "المكونات الرئيسية", 
            addToCartBtn: "أضف إلى السلة", 
            subtotal: "المجموع الفرعي", 
            checkoutBtn: "الانتقال للدفع", 
            emptyCartMsg: "سلتك فارغة.", 
            viewDetailsBtn: "عرض التفاصيل",
            // UPDATED Auth Translations
            authTitle: "تسجيل الدخول أو المتابعة",
            authSignInTab: "تسجيل الدخول",
            authSignUpTab: "إنشاء حساب",
            authNamePlaceholder: "الاسم الكامل",
            authEmailPlaceholder: "البريد الإلكتروني",
            authPasswordPlaceholder: "كلمة المرور (8 أحرف على الأقل)",
            authLoginBtn: "تسجيل الدخول",
            authSignUpBtn: "إنشاء حساب",
            authDivider: "أو",
            authGuestBtn: "المتابعة كزائر"
        }
    };
    const applyTranslation = () => { const lang = state.isArabic ? 'ar' : 'en'; const langPack = translations[lang]; document.documentElement.lang = lang; document.documentElement.dir = state.isArabic ? 'rtl' : 'ltr'; document.querySelectorAll('[data-translate]').forEach(el => { const key = el.dataset.translate; if (!langPack[key]) return; const target = el.querySelector('span.btn-text') || el.querySelector('span') || el; target.innerHTML = langPack[key]; }); document.querySelectorAll('[data-translate-placeholder]').forEach(el => { const key = el.dataset.translatePlaceholder; if (langPack[key]) el.placeholder = langPack[key]; }); document.getElementById('translateBtn').innerText = state.isArabic ? 'English' : 'العربية'; };
    const createParticles = () => { const container = document.getElementById('bg-animation'); if (!container || container.children.length > 0) return; for (let i = 0; i < 20; i++) { const p = document.createElement('div'); p.className = 'particle'; p.style.left = `${Math.random() * 100}vw`; p.style.top = `${Math.random() * 100}vh`; p.style.width = p.style.height = `${1 + Math.random() * 2}px`; p.style.animationDuration = `${15 + Math.random() * 20}s`; p.style.animationDelay = `${Math.random() * -35}s`; container.appendChild(p); } };
    const handleNavScroll = () => { document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50); };
    const init = () => { createParticles(); window.addEventListener('scroll', handleNavScroll); document.getElementById('translateBtn').addEventListener('click', () => { state.isArabic = !state.isArabic; applyTranslation(); document.dispatchEvent(new CustomEvent('languageChange')); }); };
    return { init, isArabic: () => state.isArabic, applyTranslation, getTranslation: (key) => translations[state.isArabic ? 'ar' : 'en'][key] };
})();

// NEW: Email validation helper function
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const StorePage = (() => {
    let isSignUpMode = false; // NEW: State to track auth mode
    const state = { cart: JSON.parse(localStorage.getItem('riyaduinoCart') || '[]') };
    const DOMElements = {
        storeGrid: document.getElementById('storeGrid'), searchInput: document.getElementById('searchInput'), cartWidget: document.getElementById('cartWidget'), cartBadge: document.getElementById('cartBadge'), customProjectBtn: document.getElementById('customProjectBtn'),
        productDetailModal: document.getElementById('productDetailModal'), closeDetailModalBtn: document.getElementById('closeDetailModalBtn'), detailImg: document.getElementById('detailImg'), detailTitle: document.getElementById('detailTitle'), detailDescription: document.getElementById('detailDescription'), detailComponentsList: document.getElementById('detailComponentsList'), detailAddToCartBtn: document.getElementById('detailAddToCartBtn'),
        cartViewModal: document.getElementById('cartViewModal'), closeCartModalBtn: document.getElementById('closeCartModalBtn'), cartItemsContainer: document.getElementById('cart-items-container'), cartSummary: document.getElementById('cart-summary'), emptyCartView: document.getElementById('empty-cart-view'), cartSubtotal: document.getElementById('cartSubtotal'), proceedToCheckoutBtn: document.getElementById('proceedToCheckoutBtn'),
        
        // UPDATED: Auth Modal Elements
        authModal: document.getElementById('authModal'),
        closeAuthModalBtn: document.getElementById('closeAuthModalBtn'),
        authToggleSignIn: document.getElementById('authToggleSignIn'), // NEW
        authToggleSignUp: document.getElementById('authToggleSignUp'), // NEW
        authNameField: document.getElementById('authNameField'), // NEW
        authNameInput: document.getElementById('authNameInput'), // NEW
        loginBtn: document.getElementById('loginBtn'),
        guestBtn: document.getElementById('guestBtn'),
        authEmailInput: document.getElementById('authEmailInput'),
        authPasswordInput: document.getElementById('authPasswordInput'),
        authErrorMsg: document.getElementById('authErrorMsg'), 

        // Order Modal Elements
        orderModal: document.getElementById('orderModal'), closeOrderModalBtn: document.getElementById('closeOrderModalBtn'), checkoutForm: document.getElementById('checkoutForm'), confirmBtn: document.getElementById('confirmBtn'), formView: document.getElementById('form-view'), successView: document.getElementById('success-view'), closeSuccessBtn: document.getElementById('closeSuccessBtn'), orderMessage: document.getElementById('orderMessage'), orderPopupTitle: document.getElementById('orderPopupTitle'),
        emailInput: document.getElementById('emailInput'), 
        nameInput: document.getElementById('nameInput') // NEW: Ref to order form name
    };
    const updateCart = () => { localStorage.setItem('riyaduinoCart', JSON.stringify(state.cart)); DOMElements.cartBadge.textContent = state.cart.reduce((sum, item) => sum + item.qty, 0); };
    const applyCardTiltEffect = () => { const cards = document.querySelectorAll('.product-card'); cards.forEach(card => { card.addEventListener('mousemove', (e) => { const rect = card.getBoundingClientRect(); const x = e.clientX - rect.left; const y = e.clientY - rect.top; const { width, height } = rect; const rotateX = (y / height - 0.5) * -15; const rotateY = (x / width - 0.5) * 15; card.style.transform = `translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`; }); card.addEventListener('mouseleave', () => { card.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)'; }); }); };
    const renderProducts = () => { DOMElements.storeGrid.innerHTML = ''; const lang = Common.isArabic() ? 'ar' : 'en'; const searchTerm = DOMElements.searchInput.value.toLowerCase(); const filteredProjects = projectsData[lang].filter(p => p.title.toLowerCase().includes(searchTerm)); filteredProjects.forEach((project, index) => { const card = document.createElement('div'); card.className = 'product-card'; card.innerHTML = `<h3>${project.title}</h3><div><p style="font-size:1.2rem; font-weight:900; margin-bottom:1rem;">${project.price} ${projectsData.currency}</p><button class="cta-button btn-secondary view-details-btn" data-product-id="${project.id}"><span>${Common.getTranslation('viewDetailsBtn')}</span></button></div>`; DOMElements.storeGrid.appendChild(card); setTimeout(() => card.classList.add('is-visible'), index * 80); }); applyCardTiltEffect(); };
    const showProductDetails = (projectId) => { const lang = Common.isArabic() ? 'ar' : 'en'; const project = projectsData[lang].find(p => p.id === projectId); if (!project) return; DOMElements.detailImg.src = project.image; DOMElements.detailImg.alt = project.title; DOMElements.detailTitle.innerText = project.title; DOMElements.detailDescription.innerText = project.description; DOMElements.detailComponentsList.innerHTML = project.components.map(c => `<li>${c}</li>`).join(''); DOMElements.detailAddToCartBtn.dataset.projectId = projectId; DOMElements.productDetailModal.classList.add('visible'); };
    const addToCart = (projectId) => { const itemInCart = state.cart.find(item => item.id === projectId); if (itemInCart) itemInCart.qty++; else state.cart.push({ id: projectId, qty: 1 }); DOMElements.cartWidget.classList.add('jiggle'); setTimeout(() => DOMElements.cartWidget.classList.remove('jiggle'), 600); updateCart(); };
    const closeModal = (modal) => { modal.querySelector('.modal-content').style.opacity = '0'; modal.querySelector('.modal-content').style.transform = 'scale(0.9)'; setTimeout(() => { modal.classList.remove('visible'); if (modal === DOMElements.orderModal) { setTimeout(() => { DOMElements.formView.style.display = 'block'; DOMElements.successView.style.display = 'none'; DOMElements.checkoutForm.reset(); DOMElements.confirmBtn.disabled = false; DOMElements.confirmBtn.querySelector('span').innerText = Common.getTranslation('confirmBtn'); }, 300); } }, 300); };
    
    const renderCartItems = () => { DOMElements.cartItemsContainer.innerHTML = ''; if (state.cart.length === 0) { DOMElements.emptyCartView.style.display = 'flex'; DOMElements.cartSummary.style.display = 'none'; return; } DOMElements.emptyCartView.style.display = 'none'; DOMElements.cartSummary.style.display = 'block'; let subtotal = 0; const lang = Common.isArabic() ? 'ar' : 'en'; const projects = projectsData[lang]; state.cart.forEach(item => { const project = projects.find(p => p.id === item.id); if (!project) return; subtotal += project.price * item.qty; const itemHTML = `<div class="cart-item" data-product-id="${item.id}"><div class="cart-item-details"><h4>${project.title}</h4><div class="cart-item-price">${project.price} ${projectsData.currency}</div></div><div class="quantity-controls"><button class="quantity-btn quantity-btn-minus" aria-label="Decrease quantity">-</button><span>${item.qty}</span><button class="quantity-btn quantity-btn-plus" aria-label="Increase quantity">+</button></div><button class="cart-item-remove" aria-label="Remove item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button></div>`; DOMElements.cartItemsContainer.insertAdjacentHTML('beforeend', itemHTML); }); DOMElements.cartSubtotal.innerText = `${subtotal} ${projectsData.currency}`; };
    const updateCartItem = (productId, change) => { const itemInCart = state.cart.find(item => item.id === productId); if (!itemInCart) return; if (change === 'remove' || (itemInCart.qty === 1 && change === -1)) { state.cart = state.cart.filter(item => item.id !== productId); } else { itemInCart.qty += change; } updateCart(); renderCartItems(); };
    const openCartView = () => { renderCartItems(); DOMElements.cartViewModal.classList.add('visible'); };
    
    // NEW: Function to open Auth Modal
    const openAuthModal = () => {
        DOMElements.authErrorMsg.style.display = 'none'; // Clear errors
        document.getElementById('authForm').reset(); // Reset form
        DOMElements.authModal.classList.add('visible');
    };

    // UPDATED: Now accepts user data to pre-fill
    const openOrderModal = (isCustom = false, userData = {}) => { 
        DOMElements.checkoutForm.reset(); 
        DOMElements.formView.style.display = 'block'; 
        DOMElements.successView.style.display = 'none'; 

        if (isCustom) { 
            DOMElements.orderPopupTitle.innerText = Common.getTranslation('customOrderTitle'); 
            DOMElements.orderMessage.value = ''; 
            DOMElements.orderMessage.removeAttribute('readonly'); 
            DOMElements.orderMessage.placeholder = Common.getTranslation('customOrderPlaceholder'); 
        } else { 
            DOMElements.orderPopupTitle.innerText = Common.getTranslation('orderPopupTitle'); 
            const lang = Common.isArabic() ? 'ar' : 'en'; 
            const projects = projectsData[lang]; 
            let subtotal = 0; 
            const orderDetails = state.cart.map(item => { const project = projects.find(p => p.id === item.id); subtotal += project.price * item.qty; return `${project.title} (x${item.qty}) - ${project.price * item.qty} ${projectsData.currency}`; }).join('\n'); 
            DOMElements.orderMessage.value = `Order Details:\n${orderDetails}\n\nTotal: ${subtotal} ${projectsData.currency}`; 
            DOMElements.orderMessage.setAttribute('readonly', true); 
        } 
        
        // NEW: Pre-fill user data if provided
        if (userData.email) {
            DOMElements.emailInput.value = userData.email;
        }
        if (userData.name) {
            DOMElements.nameInput.value = userData.name;
        }

        DOMElements.orderModal.classList.add('visible'); 
    };

    const handleFormSubmit = async (e) => { e.preventDefault(); const form = e.target; DOMElements.confirmBtn.disabled = true; DOMElements.confirmBtn.querySelector('span').innerText = '...'; try { const response = await fetch(form.action, { method: form.method, body: new FormData(form), headers: { 'Accept': 'application/json' } }); if (response.ok) { DOMElements.formView.style.display = 'none'; DOMElements.successView.style.display = 'block'; state.cart = []; updateCart(); Common.applyTranslation(); /* <-- FIX: Added this line */ } else throw new Error('Form submission failed'); } catch (error) { alert('There was a problem. Please try again.'); DOMElements.confirmBtn.disabled = false; Common.applyTranslation(); } };
    
    // NEW: Function to set auth mode
    const setAuthMode = (isSignUp) => {
        isSignUpMode = isSignUp;
        DOMElements.authErrorMsg.style.display = 'none';
        
        // Toggle active button style
        DOMElements.authToggleSignIn.classList.toggle('active', !isSignUp);
        DOMElements.authToggleSignUp.classList.toggle('active', isSignUp);
        
        // Show/Hide Name field
        DOMElements.authNameField.style.display = isSignUp ? 'block' : 'none';
        DOMElements.authNameInput.required = isSignUp;
        
        // Change button text
        const btnText = DOMElements.loginBtn.querySelector('.btn-text');
        btnText.innerHTML = isSignUp ? Common.getTranslation('authSignUpBtn') : Common.getTranslation('authLoginBtn');
    };

    const init = () => {
        updateCart();
        renderProducts();
        DOMElements.searchInput.addEventListener('input', renderProducts);
        DOMElements.customProjectBtn.addEventListener('click', () => openOrderModal(true, {}));
        DOMElements.cartWidget.addEventListener('click', openCartView);
        
        [DOMElements.closeDetailModalBtn, DOMElements.closeCartModalBtn, DOMElements.closeOrderModalBtn, DOMElements.closeSuccessBtn, DOMElements.closeAuthModalBtn].forEach(btn => { const modal = btn.closest('.modal-overlay'); btn.addEventListener('click', () => closeModal(modal)); });
        [DOMElements.productDetailModal, DOMElements.cartViewModal, DOMElements.orderModal, DOMElements.authModal].forEach(modal => { modal.addEventListener('click', e => e.target === modal && closeModal(modal)); });
        
        DOMElements.storeGrid.addEventListener('click', (e) => {
            const target = e.target.closest('.view-details-btn');
            if (target) {
                const projectId = parseInt(target.dataset.productId);
                showProductDetails(projectId);
            }
        });

        DOMElements.detailAddToCartBtn.addEventListener('click', function() { const projectId = parseInt(this.dataset.projectId); addToCart(projectId); closeModal(DOMElements.productDetailModal); });
        DOMElements.cartItemsContainer.addEventListener('click', (e) => { const target = e.target; const itemElement = target.closest('.cart-item'); if (!itemElement) return; const productId = parseInt(itemElement.dataset.productId); if (target.matches('.quantity-btn-plus')) updateCartItem(productId, 1); else if (target.matches('.quantity-btn-minus')) updateCartItem(productId, -1); else if (target.closest('.cart-item-remove')) updateCartItem(productId, 'remove'); });
        
        // UPDATED: Proceed to Checkout now opens Auth Modal
        DOMElements.proceedToCheckoutBtn.addEventListener('click', () => { 
            closeModal(DOMElements.cartViewModal); 
            setTimeout(() => openAuthModal(), 350); 
        });

        // NEW: Auth Modal Toggle Listeners
        DOMElements.authToggleSignIn.addEventListener('click', () => setAuthMode(false));
        DOMElements.authToggleSignUp.addEventListener('click', () => setAuthMode(true));

        // UPDATED: Auth Modal Button Listeners
        DOMElements.loginBtn.addEventListener('click', () => {
            const name = DOMElements.authNameInput.value.trim();
            const email = DOMElements.authEmailInput.value.trim();
            const password = DOMElements.authPasswordInput.value.trim();
            const btnText = DOMElements.loginBtn.querySelector('.btn-text');
            const btnSpinner = DOMElements.loginBtn.querySelector('.btn-spinner');

            // 1. Clear previous errors
            DOMElements.authErrorMsg.textContent = '';
            DOMElements.authErrorMsg.style.display = 'none';

            // 2. Validation
            if (isSignUpMode && !name) {
                DOMElements.authErrorMsg.textContent = 'Please enter your name.';
                DOMElements.authErrorMsg.style.display = 'block';
                return;
            }
            if (!email) {
                DOMElements.authErrorMsg.textContent = 'Please enter your email.';
                DOMElements.authErrorMsg.style.display = 'block';
                return;
            }
            if (!isValidEmail(email)) {
                DOMElements.authErrorMsg.textContent = 'Please enter a valid email address.';
                DOMElements.authErrorMsg.style.display = 'block';
                return;
            }
            if (!password) {
                DOMElements.authErrorMsg.textContent = 'Please enter a password.';
                DOMElements.authErrorMsg.style.display = 'block';
                return;
            }
            if (password.length < 8) {
                DOMElements.authErrorMsg.textContent = 'Password must be at least 8 characters long.';
                DOMElements.authErrorMsg.style.display = 'block';
                return;
            }

            // 3. Validation passed, simulate loading
            DOMElements.loginBtn.disabled = true;
            DOMElements.guestBtn.disabled = true;
            btnText.style.display = 'none';
            btnSpinner.style.display = 'inline-block';

            // 4. Fake network request
            setTimeout(() => {
                // Re-enable UI
                DOMElements.loginBtn.disabled = false;
                DOMElements.guestBtn.disabled = false;
                btnText.style.display = 'inline';
                btnSpinner.style.display = 'none';

                // Close this modal
                closeModal(DOMElements.authModal);

                // Prepare user data
                const userData = {
                    email: email,
                    name: isSignUpMode ? name : 'Valued Customer' // Use name from sign up, or a placeholder for sign in
                };

                // Open next modal
                setTimeout(() => {
                    openOrderModal(false, userData); // Pass user data to order modal
                }, 350);
            }, 1500); // 1.5 second "login" time
        });

        DOMElements.guestBtn.addEventListener('click', () => {
            closeModal(DOMElements.authModal);
            setTimeout(() => openOrderModal(false, {}), 350); // Pass empty user data
        });


        DOMElements.checkoutForm.addEventListener('submit', handleFormSubmit);
        document.addEventListener('languageChange', () => { 
            renderProducts(); 
            if (DOMElements.cartViewModal.classList.contains('visible')) {
                renderCartItems(); 
            }
            // Re-translate auth button if modal is open
            setAuthMode(isSignUpMode);
            Common.applyTranslation(); 
        });
    };
    return { init };
})();

document.addEventListener('DOMContentLoaded', () => {
    Common.init();
    Common.applyTranslation();
    StorePage.init();
});