// داده‌ها - ۱۲ روز کامل
const stories = [
  {
    id: 1,
    title: "شهادت",
    images: [
      { src: "story1-1.jpg", text: "تنها چند ساعت بعد از اعلام وزیر امور خارجه ایران در باره ادامه روند مذاکرات رژیم صهیونیستی به ایران حمله کرد طی این حمله سرداران دلیر کشور به شهادت رسیدن "},
      { src: "story1-2.jpg", text: " حمله رژیم صهیونیستی به منازل مسکونی باعث شهادت کودکان و زنان بیگناه شد" },
      { src: "story1-3.jpg", text: "در همین حین پس از شهادت فرماندهان، جانشین انان توسط رهبر انتخاب شد و در یک پیام تلوزیونی وعده تنبیه متجاوز را دادند" },
       { src: "story1-4.jpg", text: "اولین حمله ایران به تلاویو و بندر حیفا اغاز شد با حدود 200 موشک" },
        { src: "story1-5.jpg", text: "  با وجود چند لایه دفاعی موشک های ایران به اهداف اصابت کرد و باعث تخریب گسترده شد " }
    ]
  },
  {
    id: 2,
    title: "انتقام سخت",
    images: [
      { src: "story2-1.jpg", text: " بعد از حملات روز دوم رژیم صهیونیستی به زیر ساخت های انرژی ایران ،سپاه قلب انرژی در حیفا را  با خاک یکسان کرد" },
      { src: "story2-2.jpg", text: "حمله رگباری  متشکل از چندین پهباد و موشک" },
       { src: "story2-3.jpg", text: "حمله موشکی به زیر ساخت های انرژی رژیم صهیونیستی" },
        { src: "story2-4.jpg", text: "حضور مردم در خیابانها برای جشن عید غدیر و تظاهرات ضد صهیونیستی" },
         { src: "story2-5.jpg", text: "جشن عید غدیر با وجود تهدیدات  جنگ که در تهران 10 کیلومتر طول داشت"}
    ]
  },
  {
    id: 3,
    title: "تنبیه",
    images: [
      { src: "story3-1.jpg", text: "ایران و یمن در یک حمله همزمان شهر بتیام را با موشک زدند" },
      { src: "story3-2.jpg", text: "موسسه وایزمن مورد اصابت قرار گرفت"},
       { src: "story3-3.jpg", text: "بتیام"},
        { src: "story3-4.jpg", text: ""},
        
    ]
  },
  {
    id: 4,
    title: "بیمارستان کرمانشاه",
    images: [
      { src: "story4-1.jpg", text: "حمله رژیم به بیمارستان فارابی کرمانشاه" },
     { src: "story4-2.jpg", text: "حمله به هواپیمای سوخت رسان در مشهد" },
     { src: "story4-4.jpg", text: "حمله رژیم به ساختمان صدا و سیما" },
     { src: "story4-5.jpg", text: "در جواب حملات رژیم سپاه پاسداران به چندین اهداف با موج هشتم شروع شد " },
     { src: "story4-6.jpg", text: "گزارش ها از مدفون شدن دها نفر زیر اوار و تخریب گسترده خبر میداد" },
    ]
  },
  {
    id: 5,
    title: "شروع موج نهم و دهم",
    images: [
      { src: "story5-1.jpg", text: "در این روز حمله به قلب و مقر موساد توسط سپاه پاسداران انحام شد" },
       { src: "story5-2.jpg", text: "حمله به اماند  یا سازمان اطلاعات رژیم صهیونیستی" },
          { src: "story5-3.jpg", text: "حمله سایبری به شبکه تلوزیونی رژیم صهیونیستی باعث قطع برنامه زنده شد" },
             { src: "story5-4.png", text: "حمله وحشیانه به پست ایست بازرسی توسط رژیم صهیونیستی" },
    ]
  },
  {
    id: 6,
    title: "اغاز طوفان فتاح و سجیل",
    images: [
      { src: "story6-1.png", text: "ایران در این روز برای اولین بار از  موشک فتاح استفاده کرد" },
    { src: "story6-2.jpg", text: "همچنین استفاده از موسک سجیل در این روز نشان داد ایران به تکنولژی ساخت موشک های قاره پیما رسیده" },
    { src: "story6-3.jpg", text: "همچنین دومین پیام تلوزیونی رهبر انقلاب هم در این روز داده شد" },
    { src: "story6-4.png", text: "رژیم جنایتکار در این روز هلال احمر را زد و باعث شهادت سه امدادگر شد " },
    ]
  },
  {
    id: 7,
    title: "رژیم صهیونیستی در آتش",
    images: [
      { src: "story7-1.jpg", text: "حمله به مرکز فرماندهی ارتش و اطلاعات رژیم صهیونیستی" },
      { src: "story7-2.jpg", text: "حمله به کمپ اطلاعاتی ارتش در گاویام" },
       { src: "story7-3.jpg", text: "حمله به سامانه های فرماندهی دیجیتال" },
    ]
  },
  {
    id: 8,
    title: "ادامه اتش بازی سپاه پاسداران",
    images: [
      { src: "story8-1.jpg", text: "رژیم صهیونیستی یک خانه مسکونی را مورد هدف قرار داد " },
        { src: "story8-2.jpg", text: "اتش سوزی و انفجار در گاویام" },
          { src: "story8-4.jpg", text: "لرزش صهیونیستها" },
            { src: "story8-5.jpg", text: "حیفا" },
             

    ]
  },
  {
    id: 9,
    title: "بازی با دم شیر",
    images: [
      { src: "story9-1.jpg", text: "هیجدهمین موج حملات وعده صادق" },
     { src: "story9-2.jpg", text: "رژیم صهیونیستی زیر اتش" },
      { src: "story9-3.jpg", text: "صحرای نقب در نزدیکی مرکز هسته ای رژِم صهیونیستی" },
       { src: "story9-4.png", text: "ادامه حملات به رژِیم صهیونیستی" },
        { src: "story9-6.jpg", text: "شهادت سعید ایزدی و  دانشمند ایثار طباطبایی" },
    ]
  },
  {
    id: 10,
    title:"جسارت امریکا",
    images: [
      { src: "story10-1.jpg", text: "حمله امریکا به سایت هسته ای که برخلاف گغته ترامپ  خسارت خیلی زیادی وارد نکرده بود"},
        { src: "story10-2.jpg", text: "استفاده از خیبر شکن برای اولین بار"},
           { src: "story10-3.jpg", text:"40 فروند موشک دور برد که سه نقطه اساسی از جمله برج بادبان را تخریب کرد"},
              { src: "story10-4.jpg", text:"تخریب موشک خیبر شکن  در نزدیکی یک پناهگاه"},
    ]
  },
  {
    id: 11,
    title: "جواب دست درازی امریکا",
    images: [
      { src: "story11-1.jpg", text: "حمله اسراعیل به ساختمان زندان اوین"},
    { src: "story11-2.jpeg", text: "سرنگونی هرمس900 در خرم اباد"},
    { src: "story11-4.jpg", text: "یکی از شدیدترین حملات که  دست کم به 5 نقطه از جمله نیروگاه برق رژیم صهیونیستی بود"},
    { src: "story11-5.jpg", text: "جواب امریکا در پایگاه العدید"},
    ]
  },
  {
    id: 12,
    title: "ایران مقتدر",
    images: [
      { src: "story12-1.jpg", text: "بعد از حمله ایران به العدید ترامپ خواستار اتش بس شد" },
     { src: "story12-2.jpg", text: "حمله وحشیانه به منزل یک دانشمند بنام محمدرضا صدیقی صابر که باعث شهادت 16 نفر دیگر شد" },
     { src: "story12-4.jpeg", text: "در ساعات اخر جنگ موج 22ام حمله بر سر رژیم صهیونیستی " },
     { src: "story12-5.jpg", text: "سنگینترین حمله ایران در طول 12 روز" },
     { src: "story12-6.jpg", text: "خرابی های شدید در رژیم صهیونیستی اخرین حمله این جنگ بود" },
     { src: "story12-8.jpg", text: "در طول حمله رژِیم صهیونیستی کودکان بیگناه زیادی به شهادت رسیدند" },
    ]
  }
];

// عناصر DOM
const listDiv = document.getElementById("story-list");
const storyPage = document.getElementById("story-page");
const storyTitle = document.getElementById("story-title");
const storyContent = document.getElementById("story-content");

// نمایش لیست داستان‌ها
stories.forEach(story => {
  const div = document.createElement("div");
  div.className = "story-card";
  div.innerHTML = `
    <h3>${story.title}</h3>
    <div class="day">روز ${story.id}</div>
  `;
  div.onclick = () => openStory(story.id);
  listDiv.appendChild(div);
});

function openStory(id) {
  const story = stories.find(s => s.id === id);

  listDiv.classList.add("hidden");
  storyPage.classList.remove("hidden");

  storyTitle.innerText = story.title;
  storyContent.innerHTML = "";
//اپلود عکس
  story.images.forEach(img => {
    const image = document.createElement("img");
    image.src = img.src;

    const caption = document.createElement("div");
    caption.className = "caption";
    caption.innerText = img.text;

    storyContent.appendChild(image);
    storyContent.appendChild(caption);
  });
}

function goBack() {
  storyPage.classList.add("hidden");
  listDiv.classList.remove("hidden");
}
