const language_btn = document.querySelector(".language-btn");

// ================= These are titles ================================

const title_1 = document.querySelector(".header-content h1");
const title_2 = document.querySelector(".header-content h3");
const titles = document.querySelectorAll(".text-col h2");
const title_3 = document.querySelector(".faq h2");

// ===================== These are button ============================================

const button_1 = document.querySelector("nav button");
const buttons = document.querySelectorAll(".email-sign_up button");

// ================== These are para =================================

const paras = document.querySelectorAll(".text-col p");
const head_para = document.querySelectorAll(".head_para");

// ================== These are labels =================================

const labels = document.querySelectorAll(".accordion label");

// ================== These are labels para =================================

const label_paras = document.querySelectorAll(".accordion p");

// ================== These are inputs =================================

const placeholder = document.querySelectorAll(".email-sign_up input");

// ================== These are footer info =================================

const footer_call = document.querySelector(".footer h2");

// ================== These are footer links =================================

const links = document.querySelectorAll(".col a");

// ================== These are footer india =================================

const india = document.querySelector(".netflix_india span");

// ======================== Languages ==============================

const data = {
  English: {
    title_1: "Unlimited movies, TV shows and more",
    title_2: "Watch anywhere. Cancel anytime.",
    title_3: "Frequently Asked Questions",
    head_para:
      "Ready to watch? Enter your email to create or restart your membership.",
    button_1: "Sign In",
    buttons: "Get Started",

    footer_call: "Questions? Call 000-800-919-1694",

    // ===============================

    placeholder: [
      (placeholder[0].value = "Email address"),
      (placeholder[1].value = "Email address"),
    ],

    // ===============================

    titles: [
      (titles[0] = "Watch everywhere"),
      (titles[1] = "Download your shows to watch offline"),
      (titles[2] = "Watch everywhere"),
      (titles[3] = "Create profiles for kids"),
    ],

    // ===============================

    paras: [
      (paras[0] =
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."),
      (paras[1] =
        "Save your favorites easily and always have something to watch."),
      (paras[2] =
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."),
      (paras[3] =
        "Send children on adventures with their favorite characters in a space made just for them—free with your membership."),
    ],

    // ===============================

    labels: [
      (labels[0] = "What is Netflix?"),
      (labels[1] = "How much does Netflix const?"),
      (labels[2] = "Where can I watch?"),
      (labels[3] = "How do I cancel?"),
      (labels[4] = "What can I watch on Netflix?"),
      (labels[5] = "Is Netflix good for kids?"),
    ],

    // ===============================

    label_paras: [
      (label_paras[0] =
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices."),
      (label_paras[1] =
        "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"),
      (label_paras[2] =
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."),
      (label_paras[3] =
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."),
      (label_paras[4] =
        "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."),
      (label_paras[5] =
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."),
      (label_paras[6] =
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."),
      (label_paras[7] =
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space."),
      (label_paras[8] =
        "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."),
    ],

    // =============================

    links: [
      (links[0] = "FAQ"),
      (links[1] = "Help Center"),
      (links[2] = "Account"),
      (links[3] = "Media Center"),
      (links[4] = "Investor Relation"),
      (links[5] = "Jobs"),
      (links[6] = "Ways to Watch"),
      (links[7] = "Terms of Use"),
      (links[8] = "Privacy"),
      (links[9] = "Cookie Preferences"),
      (links[10] = "Corporate Information"),
      (links[11] = "Contact Us"),
      (links[12] = "Speed Test"),
      (links[13] = "Legal Notices"),
      (links[14] = "Only on Netflix"),
    ],

    india: "India",

    // ===============================
  },

  // ==================================================================================

  Hindi: {
    title_1: "अनलिमिटेड फ़िल्में, टीवी शो के साथ भी बहुत कुछ",
    title_2: "जहां चाहें देखें. जब चाहें कैंसल करें.",
    title_3: "अक्सर पूछे जाने वाले सवाल",
    head_para:
      "देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.",
    button_1: "साइन इन करें",
    buttons: "शुरू करें",

    footer_call: "कोई सवाल है? 000-800-919-1694 पर कॉल करें",

    // ===============================

    placeholder: [
      (placeholder[0].value = "ई-मेल एड्रेस"),
      (placeholder[1].value = "ई-मेल एड्रेस"),
    ],

    // ===============================

    titles: [
      (titles[0] = "अपने टीवी पर आनंद लें"),
      (titles[1] = "ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें"),
      (titles[2] = "हर जगह देखें"),
      (titles[3] = "बच्चों के लिए प्रोफ़ाइल बनाएं"),
    ],

    // ===============================

    paras: [
      (paras[0] =
        "स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें."),
      (paras[1] =
        "अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख सकें."),
      (paras[2] =
        "बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें."),
      (paras[3] =
        "बच्चों को जाने दें अपने पसंदीदा किरदारों के साथ उस रोमांचक सफ़र पर जो सिर्फ़ उनके लिए ही है - आपकी मेंबरशिप के साथ फ़्री."),
    ],

    // ===============================

    labels: [
      (labels[0] = "Netflix क्या है?"),
      (labels[1] = "Netflix की कितनी कीमत है?"),
      (labels[2] = "मैं कहां देख सकता हूं?"),
      (labels[3] = "मैं केसे रद्द कारू?"),
      (labels[4] = "मैं नेटफ्लिक्स पर क्या देख सकता / सकती है?"),
      (labels[5] = "क्या Netflix बच्चों के लिए ठीक है?"),
    ],

    // ===============================

    label_paras: [
      (label_paras[0] =
        "Netflix एक स्ट्रीमिंग सर्विस है जिसके ज़रिए आप हज़ारों इंटरनेट-कनेक्टेड डिवाइस पर तरह-तरह के अवॉर्ड विजेता टीवी शो, फ़िल्में, ऐनिमे, डॉक्यूमेंट्रीज़ का लुत्फ़ उठा सकते हैं."),
      (label_paras[1] =
        "आप जब चाहें, जितना चाहें, बिना किसी विज्ञापन के देख सकते हैं – सारा कॉन्टेंट बहुत कम मासिक शुल्क पर. खोजने के लिए हमेशा कुछ नया होता है और हर हफ़्ते नए टीवी शो और फ़िल्में जोड़ी जाती हैं!"),
      (label_paras[2] =
        "हर महीने की तय फ़ी देकर अपने स्मार्टफ़ोन, टैबलेट, स्मार्ट टीवी, लैपटॉप, या स्ट्रीमिंग डिवाइस पर Netflix देखें. हर महीने ₹149 से ₹649 तक के प्लान. कोई एक्सट्रा कीमत या कॉन्ट्रैक्ट नहीं."),
      (label_paras[3] =
        "कहीं भी, कभी भी देखें अपने पर्सनल कंप्यूटर से या स्मार्ट टीवी, स्मार्टफ़ोन, टैबलेट, स्ट्रीमिंग मीडिया प्लेयर और गेम कंसोल सहित Netflix ऐप ऑफ़र करने वाले किसी भी इंटरनेट-कनेक्टेड डिवाइस पर तुरंत देखने के लिए, वेब पर netflix.com पर अपने Netflix अकाउंट में साइन इन करें."),
      (label_paras[4] =
        "आप iOS, Android या Windows 10 ऐप से भी अपने पसंदीदा शो डाउनलोड कर सकते हैं. चलते-फिरते और बिना इंटरनेट कनेक्शन के देखने के लिए डाउनलोड का उपयोग करें. Netflix को अपने साथ कहीं भी ले जाएं."),
      (label_paras[5] =
        "Netflix लचीला है. कोई परेशान करने वाले कॉन्ट्रैक्ट नहीं और कोई बंधन नहीं हैं. आप आसानी से दो क्लिक में अपना अकाउंट ऑनलाइन कैंसल कर सकते हैं. कोई कैंसलेशन फ़ीस नहीं है – अपना अकाउंट कभी भी शुरू या बंद करें."),
      (label_paras[6] =
        "Netflix की बहुत बड़ी लाइब्रेरी में फ़ीचर फ़िल्मों, डॉक्यूमेंट्री, टीवी शो, ऐनिमे, अवॉर्ड-विनिंग Netflix ओरिजिनल्स के अलावा और भी बहुत कुछ है. आप जितना चाहें, कभी भी देखें."),
      (label_paras[7] =
        "आपकी मेंबरशिप में Netflix किड्स एक्सपीरियंस शामिल है. बच्चे अपनी तरह से पारिवारिक टीवी शो और फ़िल्मों का आनंद लेते हैं, लेकिन आप उनके द्वारा देखे जाने वाले कॉन्टेंट को कंट्रोल कर सकते हैं."),
      (label_paras[8] =
        "बच्चों की प्रोफ़ाइल में PIN से सुरक्षित पैरेंटल कंट्रोल्स होते हैं जिससे आप बच्चों को मेच्योरिटी रेटिंग वाले कॉन्टेंट देखने से रोक सकते हैं और उन टाइटल को ब्लॉक कर सकते हैं जिन्हें आप नहीं चाहते हैं कि बच्चे देखें."),
    ],

    // ===============================

    links: [
      (links[0] = "FAQ"),
      (links[1] = "सहायता केंद्र"),
      (links[2] = "अकाउंट"),
      (links[3] = "मीडिया केंद्र"),
      (links[4] = "इंवेस्टर संबंध"),
      (links[5] = "नौकरियां"),
      (links[6] = "देखने के तरीके"),
      (links[7] = "उपयोग की शर्तें"),
      (links[8] = "प्रायवेसी"),
      (links[9] = "कुकी प्रेफ़रेंस"),
      (links[10] = "कॉरपोरेट जानकारी"),
      (links[11] = "हमसे संपर्क करें"),
      (links[12] = "स्पीड टेस्ट"),
      (links[13] = "कानूनी सूचनाएं"),
      (links[14] = "सिर्फ़ Netflix पर"),
    ],

    // ===============================

    india: "भारत",
  },
};

// ==============================
language_change(localStorage.getItem("language"));

localStorage.getItem("language") === null
  ? (language_btn.value = "English")
  : (language_btn.value = localStorage.getItem("language"));

// ===================  this is function for change language ========================

function language_change() {
  // ============================================  English Language  =====================================

  if (localStorage.getItem("language") === "English") {
    title_1.innerText = data.English.title_1;
    title_2.innerText = data.English.title_2;
    title_3.innerText = data.English.title_3;

    // =======================================

    head_para[0].innerText = data.English.head_para;
    head_para[1].innerText = data.English.head_para;

    // =========================================
    button_1.innerText = data.English.button_1;
    buttons[0].innerText = data.English.buttons;
    buttons[1].innerText = data.English.buttons;

    // ================================================

    titles[0].innerText = data.English.titles[0];
    titles[1].innerText = data.English.titles[1];
    titles[2].innerText = data.English.titles[2];
    titles[3].innerText = data.English.titles[3];

    // ================================================

    paras[0].innerText = data.English.paras[0];
    paras[1].innerText = data.English.paras[1];
    paras[2].innerText = data.English.paras[2];
    paras[3].innerText = data.English.paras[3];

    // ================================================

    placeholder[0].value = data.English.placeholder[0];
    placeholder[1].value = data.English.placeholder[1];

    // ================================================

    labels[0].innerText = data.English.labels[0];
    labels[1].innerText = data.English.labels[1];
    labels[2].innerText = data.English.labels[2];
    labels[3].innerText = data.English.labels[3];
    labels[4].innerText = data.English.labels[4];
    labels[5].innerText = data.English.labels[5];

    // ================================================

    label_paras[0].innerText = data.English.label_paras[0];
    label_paras[1].innerText = data.English.label_paras[1];
    label_paras[2].innerText = data.English.label_paras[2];
    label_paras[3].innerText = data.English.label_paras[3];
    label_paras[4].innerText = data.English.label_paras[4];
    label_paras[5].innerText = data.English.label_paras[5];
    label_paras[6].innerText = data.English.label_paras[6];
    label_paras[7].innerText = data.English.label_paras[7];
    label_paras[8].innerText = data.English.label_paras[8];

    // ================================================

    footer_call.innerText = data.English.footer_call;

    // ================================================

    links[0].innerText = data.English.links[0];
    links[1].innerText = data.English.links[1];
    links[2].innerText = data.English.links[2];
    links[3].innerText = data.English.links[3];
    links[4].innerText = data.English.links[4];
    links[5].innerText = data.English.links[5];
    links[6].innerText = data.English.links[6];
    links[7].innerText = data.English.links[7];
    links[8].innerText = data.English.links[8];
    links[9].innerText = data.English.links[9];
    links[10].innerText = data.English.links[10];
    links[11].innerText = data.English.links[11];
    links[12].innerText = data.English.links[12];
    links[13].innerText = data.English.links[13];
    links[14].innerText = data.English.links[14];

    // ============================================

    india.innerText = data.English.india;

    // ============================================  Hindi Language  =====================================
  } else if (localStorage.getItem("language") === "Hindi") {
    title_1.innerText = data.Hindi.title_1;
    title_2.innerText = data.Hindi.title_2;
    title_3.innerText = data.Hindi.title_3;

    // =======================================

    head_para[0].innerText = data.Hindi.head_para;
    head_para[1].innerText = data.Hindi.head_para;

    // ========================================

    button_1.innerText = data.Hindi.button_1;

    // =======================================

    buttons[0].innerText = data.Hindi.buttons;
    buttons[1].innerText = data.Hindi.buttons;

    // =======================================

    titles[0].innerText = data.Hindi.titles[0];
    titles[1].innerText = data.Hindi.titles[1];
    titles[2].innerText = data.Hindi.titles[2];
    titles[3].innerText = data.Hindi.titles[3];

    // ================================================

    paras[0].innerText = data.Hindi.paras[0];
    paras[1].innerText = data.Hindi.paras[1];
    paras[2].innerText = data.Hindi.paras[2];
    paras[3].innerText = data.Hindi.paras[3];

    // ================================================

    placeholder[0].value = data.Hindi.placeholder[0];
    placeholder[1].value = data.Hindi.placeholder[1];

    // ================================================

    labels[0].innerText = data.Hindi.labels[0];
    labels[1].innerText = data.Hindi.labels[1];
    labels[2].innerText = data.Hindi.labels[2];
    labels[3].innerText = data.Hindi.labels[3];
    labels[4].innerText = data.Hindi.labels[4];
    labels[5].innerText = data.Hindi.labels[5];

    // ================================================

    label_paras[0].innerText = data.Hindi.label_paras[0];
    label_paras[1].innerText = data.Hindi.label_paras[1];
    label_paras[2].innerText = data.Hindi.label_paras[2];
    label_paras[3].innerText = data.Hindi.label_paras[3];
    label_paras[4].innerText = data.Hindi.label_paras[4];
    label_paras[5].innerText = data.Hindi.label_paras[5];
    label_paras[6].innerText = data.Hindi.label_paras[6];
    label_paras[7].innerText = data.Hindi.label_paras[7];
    label_paras[8].innerText = data.Hindi.label_paras[8];

    // ==================================================

    footer_call.innerText = data.Hindi.footer_call;

    // ================================================

    links[0].innerText = data.Hindi.links[0];
    links[1].innerText = data.Hindi.links[1];
    links[2].innerText = data.Hindi.links[2];
    links[3].innerText = data.Hindi.links[3];
    links[4].innerText = data.Hindi.links[4];
    links[5].innerText = data.Hindi.links[5];
    links[6].innerText = data.Hindi.links[6];
    links[7].innerText = data.Hindi.links[7];
    links[8].innerText = data.Hindi.links[8];
    links[9].innerText = data.Hindi.links[9];
    links[10].innerText = data.Hindi.links[10];
    links[11].innerText = data.Hindi.links[11];
    links[12].innerText = data.Hindi.links[12];
    links[13].innerText = data.Hindi.links[13];
    links[14].innerText = data.Hindi.links[14];

    // ============================================

    india.innerText = data.Hindi.india;
  }
}

// ===================  this is event for change language ========================

language_btn.addEventListener("change", (e) => {
  localStorage.setItem("language", language_btn.value);
  language_change(localStorage.getItem("language"));
});
