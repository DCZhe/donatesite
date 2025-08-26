const translations = {
    en: {
        pageTitle: "DCZhe Donate",
        mainTitle: "DCZhe",
        slogan: "Every bit of kindness illuminates the world of others.",
        avatarTooltip: "Every bit of kindness is lighting up the world of others, thank you for your warm journey",
        paypalTitle: "PayPal",
        wechatTitle: "WeChat",
        alipayTitle: "Alipay",
        btcTitle: "Bitcoin",
        ethTitle: "Ethereum",
        copyrightText: "Copyright &copy; 2025 DCZhe | dczhe.org",
        contactMeLink: "Contact Me",
        aboutMeLink: "About Me",
        aboutMeModalTitle: "About Me",
        aboutMeModalContent: "I am DCZhe, a growing developer, <br>passionate about technology, art, movies, blockchain, and everything worth learning.",
        donationThankYouTitle: "Thanks from DCZhe",
        wechatModalTitle: "WeChat Pay",
        alipayModalTitle: "Alipay",
        btcModalTitle: "Bitcoin (BTC)",
        ethModalTitle: "Ethereum (ETH)",
        btcAddressText: "Receiving Address: bitcoin:bc1qvse7hy9nzfdrgngt0y4rrt2ckknufaepg5gx74",
        ethAddressText: "Receiving Address: 0x85279E8a679f72558BAA7c4235d17759471541A6"
    },
    zh: {
        pageTitle: "DCZhe 捐赠",
        mainTitle: "DCZhe",
        slogan: "点点微光,终成星河",
        avatarTooltip: "每一份善意都在点亮他人的世界，感谢您的温暖前行",
        paypalTitle: "PayPal",
        wechatTitle: "微信",
        alipayTitle: "支付宝",
        btcTitle: "比特币",
        ethTitle: "以太坊",
        copyrightText: "Copyright &copy; 2025 DCZhe | dczhe.com",
        contactMeLink: "联系我",
        aboutMeLink: "关于我",
        aboutMeModalTitle: "关于我",
        aboutMeModalContent: "我是DCZhe，一名开发者，<br>对技术、艺术、电影、区块链和一切值得学习的事物保持热情。",
        donationThankYouTitle: "来自DCZhe的感谢",
        wechatModalTitle: "微信支付",
        alipayModalTitle: "支付宝",
        btcModalTitle: "比特币 (BTC)",
        ethModalTitle: "以太坊 (ETH)",
        btcAddressText: "收款地址: bitcoin:bc1qvse7hy9nzfdrgngt0y4rrt2ckknufaepg5gx74",
        ethAddressText: "收款地址: 0x85279E8a679f72558BAA7c4235d17759471541A6"
    }
};

function updatePageLanguage(lang) {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
    document.getElementById('page-title').textContent = translations[lang].pageTitle;
    document.getElementById('main-title').textContent = translations[lang].mainTitle;
    document.getElementById('slogan').textContent = translations[lang].slogan;
    document.getElementById('avatar-tooltip').textContent = translations[lang].avatarTooltip;

    // Update button titles
    document.getElementById('paypal-btn').title = translations[lang].paypalTitle;
    const wechatBtn = document.getElementById('wechat-btn');
    wechatBtn.title = translations[lang].wechatTitle;
    wechatBtn.querySelector('img').alt = translations[lang].wechatTitle;

    const alipayBtn = document.getElementById('alipay-btn');
    alipayBtn.title = translations[lang].alipayTitle;
    alipayBtn.querySelector('img').alt = translations[lang].alipayTitle;

    const btcBtn = document.getElementById('btc-btn');
    btcBtn.title = translations[lang].btcTitle;
    btcBtn.querySelector('img').alt = translations[lang].btcTitle;

    const ethBtn = document.getElementById('eth-btn');
    ethBtn.title = translations[lang].ethTitle;
    ethBtn.querySelector('img').alt = translations[lang].ethTitle;

    document.getElementById('copyright-text').innerHTML = translations[lang].copyrightText;
    document.getElementById('contact-me-link').textContent = translations[lang].contactMeLink;
    document.getElementById('about-me-link').textContent = translations[lang].aboutMeLink;
}

async function fetchUserCountryAndSetLanguage() {
    try {
        const response = await fetch('http://ip-api.com/json');
        if (!response.ok) {
            throw new Error('Failed to fetch IP geolocation data');
        }
        const data = await response.json();
        const countryCode = data.countryCode;
        console.log('User country code:', countryCode);

        // Default to Chinese if not 'CN'
        const lang = countryCode === 'CN' ? 'zh' : 'en';
        updatePageLanguage(lang);

    } catch (error) {
        console.error('Error fetching user country:', error);
        // Fallback to Chinese or browser language if API fails
        const browserLang = navigator.language.split('-')[0];
        updatePageLanguage(browserLang === 'zh' ? 'zh' : 'en'); 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchUserCountryAndSetLanguage(); // Fetch country and set language on load
    const paypalBtn = document.getElementById('paypal-btn');
    const wechatBtn = document.getElementById('wechat-btn');
    const alipayBtn = document.getElementById('alipay-btn');
    const btcBtn = document.getElementById('btc-btn');
    const ethBtn = document.getElementById('eth-btn');
    const aboutMeLink = document.getElementById('about-me-link');

    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const modalCloseBtn = document.querySelector('.close-btn'); // Corrected selector
    const modalQrImage = document.getElementById('modal-qr-image');
    const avatarImg = document.querySelector('.avatar');
    const avatarContainer = document.querySelector('.avatar-container'); // Get the avatar container

    // PayPal 按钮
    paypalBtn.addEventListener('click', () => {
        window.open('https://www.paypal.com/paypalme/dczhe889', '_blank');
    });

    // 显示弹窗函数
    // 显示弹窗函数
function showModal(title, qrImagePath, textContent) {
        modalTitle.textContent = title;
        if (qrImagePath) {
            modalQrImage.src = qrImagePath;
            modalQrImage.style.display = 'block';
        } else {
            modalQrImage.style.display = 'none';
        }
        if (textContent) {
            modalText.innerHTML = textContent; // Use innerHTML to allow for HTML content
            modalText.style.display = 'block';
        } else {
            modalText.style.display = 'none';
        }
        modal.style.display = 'flex'; // Changed to flex for better centering if needed
    }

    // 关闭弹窗
    modalCloseBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 点击弹窗外部关闭
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 微信按钮
    wechatBtn.addEventListener('click', () => {
        const currentLang = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
        showModal(translations[currentLang].wechatModalTitle, 'images/wechatqr.jpeg');
    });

    // 支付宝按钮
    alipayBtn.addEventListener('click', () => {
        const currentLang = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
        showModal(translations[currentLang].alipayModalTitle, 'images/alipay_qr.jpeg');
    });

    // 比特币按钮
    btcBtn.addEventListener('click', () => {
        const currentLang = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
        showModal(translations[currentLang].btcModalTitle, 'images/btc_qr.png', translations[currentLang].btcAddressText);
    });

    // 以太坊按钮
    ethBtn.addEventListener('click', () => {
        const currentLang = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
        showModal(translations[currentLang].ethModalTitle, 'images/eth_qr.png', translations[currentLang].ethAddressText);
    });

    // 关于我链接
    aboutMeLink.addEventListener('click', (e) => {
        e.preventDefault(); // 阻止默认的锚点跳转行为
        const currentLang = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
        showModal(translations[currentLang].aboutMeModalTitle, null, translations[currentLang].aboutMeModalContent);
    });

    // 点击头像事件，切换提示气泡显示
    if (avatarContainer) {
        avatarImg.addEventListener('click', (event) => {
            event.stopPropagation(); // 防止事件冒泡到 window 点击事件
            avatarContainer.classList.toggle('active');
            // Update tooltip text based on current language if needed, or ensure it's set initially
            const currentLang = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
            document.getElementById('avatar-tooltip').textContent = translations[currentLang].avatarTooltip;
        });

        // 点击页面其他地方隐藏提示气泡
        window.addEventListener('click', () => {
            if (avatarContainer.classList.contains('active')) {
                avatarContainer.classList.remove('active');
            }
        });

        // 点击提示气泡自身不隐藏（如果需要点击气泡内部链接等）
        const avatarTooltip = document.getElementById('avatar-tooltip');
        if (avatarTooltip) {
            avatarTooltip.addEventListener('click', (event) => {
                event.stopPropagation(); // 防止点击气泡导致其隐藏
            });
        }
    }

    // 提示用户替换图片
    console.warn('请记得在 `images` 文件夹中替换以下占位图片：wechat_qr.jpeg, alipay_qr.jpeg, btc_qr.png, eth_qr.png。头像已使用 DCZhe.png。');
});
