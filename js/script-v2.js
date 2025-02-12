

let $ = document;

const btnScrollToRight = $.querySelector('.btn_right')
const btnScrollToLeft = $.querySelector('.btn_left')
const footer = $.querySelector('footer')
const portfolioPage = $.querySelector('.portfolio_page')
const backToHomeBtn = $.querySelector('.back_to_home')

// download btn
const downloadBtnPayout = $.querySelectorAll('.download_btn-payout')
const downloadBtnBusiness = $.querySelectorAll('.download_btn-business')
const downloadBtnProduct = $.querySelectorAll('.download_btn-product')
const downloadBtnCanfeex = $.querySelectorAll('.download_btn-canfeex')
const downloadBtnWifi = $.querySelectorAll('.download_btn-wifi')

const workExperienceImg = $.querySelector('.work_experience_img')
const workExperiencePage = $.querySelector('.work_experience_page')


btnScrollToRight.addEventListener('click', function (e) {
    const s1coords = footer.getBoundingClientRect();

    window.scrollTo({
        left: s1coords.left + window.pageXOffset,
        top: s1coords.top + window.pageYOffset,
        behavior: "smooth"
    })
})

btnScrollToLeft.addEventListener('click', function (e) {
    const s2coords = portfolioPage.getBoundingClientRect();

    window.scrollTo({
        left: s2coords.left + window.pageXOffset,
        top: s2coords.top + window.pageYOffset,
        behavior: "smooth"
    })
})


function toggleHorizontalScrollClass() {
    if (window.innerWidth <= 566) {
        workExperienceImg.classList.add('horizental_scroll')
        workExperiencePage.classList.remove('horizental_scroll')
    } else {
        workExperienceImg.classList.remove('horizental_scroll')
        workExperiencePage.classList.add('horizental_scroll')
    }
};

downloadBtnPayout.forEach((btn) => {
    btn.addEventListener('click', function () {
        const link = document.createElement('a');
        link.href = "./pdf/Payout.pdf"; // مسیر صحیح فایل
        link.download = "Payout.pdf";
        link.target = "_blank";        // باز کردن در یک تب جدید
        link.click();
    });
});

downloadBtnBusiness.forEach((btn) => {
    btn.addEventListener('click', function () {
        const link = document.createElement('a');
        link.href = "./pdf/Business Account.pdf";
        link.download = "Business Account.pdf"
        link.target = "_blank";        // باز کردن در یک تب جدید
        link.click();
    })
})

downloadBtnProduct.forEach((btn) => {
    btn.addEventListener('click', function () {
        const link = document.createElement('a');
        link.href = "./pdf/Product Icons.pdf"; // مسیر صحیح فایل
        link.download = "Product Icon.pdf";
        link.target = "_blank";        // باز کردن در یک تب جدید
        link.click();
    });
});
downloadBtnCanfeex.forEach((btn) => {
    btn.addEventListener('click', function () {
        const link = document.createElement('a');
        link.href = "./pdf/Canfeex.pdf"; // مسیر صحیح فایل
        link.download = "Canfeex.pdf";
        link.target = "_blank";        // باز کردن در یک تب جدید
        link.click();
    });
});
downloadBtnWifi.forEach((btn) => {
    btn.addEventListener('click', function () {
        const link = document.createElement('a');
        link.href = "./pdf/Pizza wifi.pdf"; // مسیر صحیح فایل
        link.download = "Pizza wifi.pdf";
        link.target = "_blank";        // باز کردن در یک تب جدید
        link.click();
    });
});


// بررسی تغییرات اندازه صفحه
window.addEventListener('resize', toggleHorizontalScrollClass);

// اجرای اولیه برای بارگذاری صفحه
toggleHorizontalScrollClass();


