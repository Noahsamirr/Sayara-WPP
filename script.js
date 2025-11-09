function initCountdown() {
    const endTime = Date.now() + (48 * 60 * 60 * 1000);
    
    function updateTimer() {
        const now = Date.now();
        const diff = endTime - now;
        
        if (diff <= 0) {
            document.getElementById('timer').textContent = '00:00:00';
            return;
        }
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('timer').textContent = 
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

const translations = {
    en: {
        'countdown-text': 'Special Offer Ends In: ',
        'logo': 'Sayara',
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-plans': 'Plans',
        'nav-faq': 'FAQ',
        'nav-contact': 'Contact',
        'hero-badge': 'Trusted by 10,000+ Drivers',
        'hero-title': 'Get Your Car Insured Today',
        'hero-description': 'Protect your vehicle with comprehensive coverage at competitive rates. Trusted by thousands of drivers across Saudi Arabia.',
        'hero-feature-1': 'Instant quotes in minutes',
        'hero-feature-2': '24/7 customer support',
        'hero-feature-3': 'Fast claim processing',
        'hero-feature-4': 'Flexible payment options',
        'hero-cta': 'Get Free Quote',
        'content1-title': 'Why Choose Our Car Insurance?',
        'content1-text': 'We provide comprehensive car insurance coverage tailored to your needs. Our policies offer protection against accidents, theft, and natural disasters, ensuring peace of mind on every journey. With competitive rates and exceptional customer service, we make insurance simple and affordable.',
        'form-title': 'Get Your Free Quote',
        'form-name': 'Full Name *',
        'form-email': 'Email *',
        'form-phone': 'Phone *',
        'form-car': 'Car Model',
        'form-message': 'Message',
        'form-submit': 'Submit Request',
        'recaptcha-text': "I'm not a robot",
        'content2-title': 'Comprehensive Coverage Options',
        'content2-text': 'Our car insurance plans are designed to meet diverse needs. Whether you\'re looking for basic protection or comprehensive coverage, we have the right plan for you. All plans include 24/7 roadside assistance and fast claim processing.',
        'table-title': 'Compare Insurance Plans',
        'table-features': 'Features',
        'table-basic': 'Basic',
        'table-standard': 'Standard',
        'table-premium': 'Premium',
        'table-accident': 'Accident Coverage',
        'table-disasters': 'Natural Disasters',
        'table-roadside': 'Roadside Assistance',
        'table-annual': 'Annual Premium',
        'content3-title': 'Trusted by Thousands',
        'content3-text': 'Join thousands of satisfied customers who trust us with their vehicle insurance needs. Our commitment to excellence and customer satisfaction has made us a leading insurance provider in Saudi Arabia.',
        'faq-title': 'Frequently Asked Questions',
        'faq-q1': 'What documents do I need to get car insurance?',
        'faq-a1': 'You\'ll need your vehicle registration, driver\'s license, and ID card. Additional documents may be required depending on your specific situation.',
        'faq-q2': 'How long does it take to process a claim?',
        'faq-a2': 'Most claims are processed within 5-7 business days. We strive to make the process as quick and hassle-free as possible.',
        'faq-q3': 'Can I customize my insurance plan?',
        'faq-a3': 'Yes, we offer flexible plans that can be customized to meet your specific needs. Contact our team to discuss your requirements.',
        'footer-links': 'Quick Links',
        'footer-contact': 'Contact',
        'footer-location': 'Riyadh, Saudi Arabia',
        'footer-follow': 'Follow Us',
        'footer-rights': 'All rights reserved.',
        'form-error-required': 'Please fill in all required fields.',
        'form-error-recaptcha': 'Please verify that you are not a robot.',
        'form-success': 'Thank you! Your request has been submitted. We will contact you soon.'
    },
    ar: {
        'countdown-text': 'ينتهي العرض الخاص خلال: ',
        'logo': 'سيارة',
        'nav-home': 'الرئيسية',
        'nav-services': 'الخدمات',
        'nav-plans': 'الخطط',
        'nav-faq': 'الأسئلة الشائعة',
        'nav-contact': 'اتصل بنا',
        'hero-badge': 'موثوق به من قبل أكثر من 10,000 سائق',
        'hero-title': 'احصل على تأمين سيارتك اليوم',
        'hero-description': 'احمِ مركبتك بتغطية شاملة بأسعار تنافسية. موثوق به من قبل آلاف السائقين في جميع أنحاء المملكة العربية السعودية.',
        'hero-feature-1': 'عروض أسعار فورية في دقائق',
        'hero-feature-2': 'دعم العملاء على مدار الساعة',
        'hero-feature-3': 'معالجة سريعة للمطالبات',
        'hero-feature-4': 'خيارات دفع مرنة',
        'hero-cta': 'احصل على عرض أسعار مجاني',
        'content1-title': 'لماذا تختار تأمين السيارات لدينا؟',
        'content1-text': 'نوفر تغطية شاملة لتأمين السيارات مصممة خصيصاً لاحتياجاتك. تقدم سياساتنا الحماية ضد الحوادث والسرقة والكوارث الطبيعية، مما يضمن راحة البال في كل رحلة. مع أسعار تنافسية وخدمة عملاء استثنائية، نجعل التأمين بسيطاً وبأسعار معقولة.',
        'form-title': 'احصل على عرض أسعار مجاني',
        'form-name': 'الاسم الكامل *',
        'form-email': 'البريد الإلكتروني *',
        'form-phone': 'الهاتف *',
        'form-car': 'طراز السيارة',
        'form-message': 'الرسالة',
        'form-submit': 'إرسال الطلب',
        'recaptcha-text': 'أنا لست روبوت',
        'content2-title': 'خيارات التغطية الشاملة',
        'content2-text': 'تم تصميم خطط تأمين السيارات لدينا لتلبية احتياجات متنوعة. سواء كنت تبحث عن حماية أساسية أو تغطية شاملة، لدينا الخطة المناسبة لك. تتضمن جميع الخطط مساعدة على الطريق على مدار الساعة ومعالجة سريعة للمطالبات.',
        'table-title': 'مقارنة خطط التأمين',
        'table-features': 'المميزات',
        'table-basic': 'أساسي',
        'table-standard': 'قياسي',
        'table-premium': 'مميز',
        'table-accident': 'تغطية الحوادث',
        'table-disasters': 'الكوارث الطبيعية',
        'table-roadside': 'المساعدة على الطريق',
        'table-annual': 'القسط السنوي',
        'content3-title': 'موثوق به من قبل الآلاف',
        'content3-text': 'انضم إلى آلاف العملاء الراضين الذين يثقون بنا في احتياجات تأمين مركباتهم. التزامنا بالتميز ورضا العملاء جعلنا مزود تأمين رائد في المملكة العربية السعودية.',
        'faq-title': 'الأسئلة الشائعة',
        'faq-q1': 'ما هي المستندات التي أحتاجها للحصول على تأمين السيارات؟',
        'faq-a1': 'ستحتاج إلى تسجيل المركبة ورخصة القيادة وبطاقة الهوية. قد تكون هناك مستندات إضافية مطلوبة اعتماداً على وضعك المحدد.',
        'faq-q2': 'كم من الوقت يستغرق معالجة المطالبة؟',
        'faq-a2': 'يتم معالجة معظم المطالبات خلال 5-7 أيام عمل. نسعى جاهدين لجعل العملية سريعة وخالية من المتاعب قدر الإمكان.',
        'faq-q3': 'هل يمكنني تخصيص خطة التأمين الخاصة بي؟',
        'faq-a3': 'نعم، نقدم خططاً مرنة يمكن تخصيصها لتلبية احتياجاتك المحددة. اتصل بفريقنا لمناقشة متطلباتك.',
        'footer-links': 'روابط سريعة',
        'footer-contact': 'اتصل بنا',
        'footer-location': 'الرياض، المملكة العربية السعودية',
        'footer-follow': 'تابعنا',
        'footer-rights': 'جميع الحقوق محفوظة.',
        'form-error-required': 'يرجى ملء جميع الحقول المطلوبة.',
        'form-error-recaptcha': 'يرجى التحقق من أنك لست روبوتاً.',
        'form-success': 'شكراً لك! تم إرسال طلبك. سنتواصل معك قريباً.'
    }
};

function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const html = document.documentElement;
    
    function translatePage(lang) {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            if (lang === 'ar') {
                html.setAttribute('dir', 'rtl');
                html.setAttribute('lang', 'ar');
            } else {
                html.setAttribute('dir', 'ltr');
                html.setAttribute('lang', 'en');
            }
            
            translatePage(lang);
        });
    });
}

function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const isActive = navMenu.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isActive);
        });
    }
}

function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = answer.classList.contains('active');
            
            document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.remove('active'));
            document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
            
            if (!isActive) {
                answer.classList.add('active');
                question.classList.add('active');
            }
        });
    });
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const currentLang = document.documentElement.getAttribute('lang') || 'en';
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const recaptchaCheckbox = document.getElementById('recaptcha');
            
            if (!name || !email || !phone) {
                alert(translations[currentLang]['form-error-required']);
                return;
            }
            
            if (!recaptchaCheckbox.checked) {
                alert(translations[currentLang]['form-error-recaptcha']);
                return;
            }
            
            alert(translations[currentLang]['form-success']);
            form.reset();
            recaptchaCheckbox.checked = false;
        });
    }
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                const navMenu = document.getElementById('navMenu');
                if (navMenu) navMenu.classList.remove('active');
            }
        });
    });
}
function initScrollAnimations() {
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.content-section, .comparison-table, .faq-item, .contact-form').forEach(el => {
            observer.observe(el);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    initLanguageSwitcher();
    initMobileMenu();
    initFAQ();
    initContactForm();
    initSmoothScroll();
    initScrollAnimations();
});

