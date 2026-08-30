"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "zh";

type LanguageContextValue = {
  lang: Lang;
  toggleLang: () => void;
  setLang: (l: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  toggleLang: () => {},
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("hd-lang");
    if (stored === "zh" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);

  function setLang(l: Lang) {
    setLangState(l);
    window.localStorage.setItem("hd-lang", l);
  }

  function toggleLang() {
    setLang(lang === "en" ? "zh" : "en");
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  const t = (dict: { en: string; zh: string }) => dict[ctx.lang];
  return { ...ctx, t };
}

// Pure UI-chrome strings that aren't tied to lib/data.ts content arrays.
// Content arrays (services, industries, whyChooseUs, etc.) carry their own
// `*_zh` fields directly in lib/data.ts.
export const strings = {
  nav: {
    celebrating: { en: "Celebrating {years}+ Years of Trust", zh: "深耕 {years}+ 年，值得信赖" },
    about: { en: "About", zh: "关于我们" },
    services: { en: "Services", zh: "服务项目" },
    industries: { en: "Industries Served", zh: "服务行业" },
    gallery: { en: "Gallery", zh: "作品图库" },
    getQuotation: { en: "Get Quotation", zh: "获取报价" },
    contactUs: { en: "Contact Us", zh: "联系我们" },
    searchPlaceholder: {
      en: "Search our services (e.g. welding, keyway milling)...",
      zh: "搜索我们的服务（例如：焊接、键槽铣削）...",
    },
    callUs: { en: "Call Us", zh: "致电我们" },
    whatsappUs: { en: "WhatsApp Us", zh: "WhatsApp 我们" },
  },
  hero: {
    eyebrow: { en: "Johor Bahru, Malaysia · Est. {year}", zh: "马来西亚新山 · 成立于 {year} 年" },
    title1: { en: "Precision Machining", zh: "精密机械加工" },
    title2: { en: "& Metal Fabrication", zh: "与金属制造" },
    subtitle: {
      en: "Conventional lathe, milling, welding, and custom fabrication for the Malaysian manufacturing industry",
      zh: "为马来西亚制造业提供传统车床、铣削、焊接与定制金属制造服务",
    },
    ctaQuote: { en: "Get a Quote", zh: "获取报价" },
    ctaWhatsapp: { en: "WhatsApp Us", zh: "WhatsApp 我们" },
    statYears: { en: "Years Experience", zh: "年经验" },
    statServices: { en: "Core Services", zh: "核心服务" },
    statTolerance: { en: "mm Tolerance", zh: "毫米公差" },
  },
  featured: {
    heading: { en: "A Capability for Every Job", zh: "每一项工作，都有相应能力" },
    subtitle: {
      en: "From single-piece prototypes to recurring maintenance stock, here is a look at the core work leaving our workshop.",
      zh: "从单件原型到长期维护备件，以下是我们车间的核心作业展示。",
    },
    capability: { en: "Capability", zh: "服务能力" },
    learnMore: { en: "Learn More", zh: "了解更多" },
    viewAll: { en: "View All Services", zh: "查看所有服务" },
  },
  experience: {
    heading: { en: "{years}+ Years of Precision Engineering", zh: "{years}+ 年精密工程经验" },
    body: {
      en: "The accuracy and reliability of every part we deliver is backed by an experienced, hands-on team that has worked with precision machinery for over two decades. Every job, large or small, goes through the same standard of measurement and finish.",
      zh: "我们交付的每一个零件，其精准度与可靠性都由一支拥有二十多年精密机械经验的实干团队所保证。无论工程大小，都遵循同样的测量与工艺标准。",
    },
    cta: { en: "Get a Quote", zh: "获取报价" },
  },
  companyIntro: {
    eyebrow: { en: "Who We Are", zh: "关于我们" },
    heading1: { en: "A Machine Shop Built on", zh: "二十年精密积累" },
    heading2: { en: "Two Decades of Precision", zh: "打造的机械工厂" },
    p1: {
      en: "H&D Hengda Industries Sdn Bhd is a precision machining and metal fabrication company based in Tanah Tampoi, Johor Bahru. For over {years} years, our workshop has supplied manufacturers across Malaysia with turned components, welded structures, and engineering parts — manufactured to drawing, and delivered on a schedule that respects your production line.",
      zh: "H&D Hengda Industries Sdn Bhd 是一家位于新山 Tanah Tampoi 的精密机械加工与金属制造公司。{years} 多年来，我们的车间为马来西亚各地的制造商提供车削零件、焊接结构与工程零件——完全依照图纸制造，并按照贵公司生产线的时间表准时交付。",
    },
    p2: {
      en: "We work with factory owners, maintenance departments, procurement teams, and engineers who need a machining partner that understands industrial equipment, not just a supplier that quotes a price.",
      zh: "我们服务的对象包括工厂业主、维修部门、采购团队与工程师——他们需要的是真正懂工业设备的加工伙伴，而不只是报价的供应商。",
    },
    points: [
      { en: "In-house conventional lathe, milling, and welding capability", zh: "厂内具备传统车床、铣削与焊接能力" },
      { en: "Direct communication with the engineers doing the work", zh: "直接与实际操作的工程师沟通" },
      { en: "Parts measured against your drawing before delivery", zh: "出货前依照图纸逐件检测" },
      { en: "Support for one-off prototypes and recurring production runs", zh: "支持单件打样与长期批量生产" },
    ],
    captionYears: { en: "Years serving Malaysian manufacturers", zh: "年服务马来西亚制造商" },
  },
  whyChooseUs: {
    eyebrow: { en: "Why Choose Us", zh: "为何选择我们" },
    heading: { en: "Reasons Manufacturers Keep Coming Back", zh: "制造商持续信赖我们的原因" },
  },
  machineCapabilities: {
    eyebrow: { en: "Machine Capabilities", zh: "机械设备能力" },
    heading: { en: "What Our Workshop Can Handle", zh: "我们车间的加工能力" },
    subtitle: {
      en: "A working spec sheet of our current capacity — use it as a quick reference when sizing up a job before you call.",
      zh: "以下是我们目前设备能力的规格参考，方便您在来电前快速评估工程需求。",
    },
    specLabel: { en: "Spec", zh: "规格" },
  },
  industries: {
    eyebrow: { en: "Industries We Serve", zh: "服务行业" },
    heading: { en: "Built for Malaysia's Manufacturing Floor", zh: "扎根马来西亚制造业" },
    subtitle: {
      en: "Our work spans several manufacturing sectors across Johor and beyond, each with its own equipment, tolerances, and downtime pressures.",
      zh: "我们的服务涵盖柔佛及全马各制造领域，每个行业对设备、公差与停机时间都有不同的要求。",
    },
  },
  gallery: {
    eyebrow: { en: "Project Gallery", zh: "作品图库" },
    heading: { en: "Work From the Shop Floor", zh: "来自车间的实际作品" },
    viewFull: { en: "View Full Gallery", zh: "查看完整图库" },
    filterHint: {
      en: "Filter by your industry to see the kind of parts we've made for businesses like yours.",
      zh: "按您的行业筛选，看看我们为同类企业制作过的零件。",
    },
    allIndustries: { en: "All Industries", zh: "全部行业" },
    noResults: {
      en: "No photos filed under this industry yet — ask us for references, we likely have relevant work to show you.",
      zh: "此行业暂无图片，欢迎联系我们索取相关案例参考。",
    },
    repairHeading: { en: "Repaired Products Gallery", zh: "维修产品图库" },
    repairSubtitle: {
      en: "Before-and-after photos of equipment we've repaired and reconditioned for clients. This section is updated regularly — check back for the latest work.",
      zh: "这里展示我们为客户维修与翻新设备的前后对比照片，会持续更新，欢迎不定期回来查看最新作品。",
    },
  },
  contactHelp: {
    heading: { en: "We're Here to Help", zh: "我们随时为您服务" },
    body: {
      en: "Our team in Johor Bahru is ready to answer your pre- or post-quotation questions. Call us directly, or send your drawing and let us come back with a quote.",
      zh: "我们在新山的团队随时为您解答报价前后的任何问题。欢迎直接致电，或发送图纸让我们为您报价。",
    },
    getInTouch: { en: "Get in Touch", zh: "联系我们" },
  },
  googleMap: {
    eyebrow: { en: "Find Us", zh: "找到我们" },
    heading: { en: "Our Workshop in Johor Bahru", zh: "我们位于新山的车间" },
    openMaps: { en: "Open in Google Maps", zh: "在 Google 地图中打开" },
    directions: { en: "Get Directions", zh: "获取路线" },
    rateUs: { en: "Rate Us on Google", zh: "在 Google 上给我们评价" },
    rateUsNote: {
      en: "Had a good experience? A quick review helps other factories find us.",
      zh: "对我们的服务满意吗？给个简单的评价，能帮助更多工厂找到我们。",
    },
  },
  cta: {
    eyebrow: { en: "Ready When You Are", zh: "随时为您服务" },
    heading: { en: "Need a Part Machined, Fabricated, or Repaired?", zh: "需要加工、制造或维修零件？" },
    body: {
      en: "Send us your drawing, sample, or photo of the part and we'll come back with a clear quotation.",
      zh: "发送图纸、样品或零件照片给我们，我们将为您提供清楚的报价。",
    },
    quote: { en: "Get Quotation", zh: "获取报价" },
    whatsapp: { en: "WhatsApp Us", zh: "WhatsApp 我们" },
  },
  footer: {
    tagline: {
      en: "Precision machining and metal fabrication for Malaysian manufacturers, backed by over {years} years on the shop floor.",
      zh: "为马来西亚制造商提供精密机械加工与金属制造服务，拥有超过 {years} 年车间实战经验。",
    },
    navHeading: { en: "Navigation", zh: "导航" },
    servicesHeading: { en: "Services", zh: "服务项目" },
    contactHeading: { en: "Contact", zh: "联系方式" },
    hoursHeading: { en: "Business Hours", zh: "营业时间" },
    rateUs: { en: "Rate Us on Google", zh: "Google 评价我们" },
    rights: { en: "All rights reserved.", zh: "版权所有。" },
    registered: { en: "Registered in Johor Bahru, Malaysia.", zh: "注册于马来西亚新山。" },
  },
  about: {
    eyebrow: { en: "About Us", zh: "关于我们" },
    title: { en: "Two Decades on the Shop Floor", zh: "车间里的二十年" },
    description: {
      en: "A closer look at how H&D Hengda Industries works, and why manufacturers across Johor Bahru trust us with their production line.",
      zh: "深入了解 H&D Hengda Industries 的运作方式，以及为何新山各地制造商都信赖我们处理他们的生产线需求。",
    },
    storyEyebrow: { en: "Our Story", zh: "我们的故事" },
    storyHeading1: { en: "From a Small Workshop to a", zh: "从小型工坊" },
    storyHeading2: { en: "Trusted Machining Partner", zh: "成长为值得信赖的加工伙伴" },
    p1: {
      en: "H&D Hengda Industries Sdn Bhd started as a small repair and machining outfit in Tanah Tampoi, Johor Bahru, taking on the jobs that needed a fast, practical fix — a worn shaft, a cracked bracket, a part that no longer existed in any catalogue.",
      zh: "H&D Hengda Industries Sdn Bhd 最初只是新山 Tanah Tampoi 一家小型维修与加工工坊，专门承接需要快速、实际解决方案的工作——磨损的轴、破裂的支架、或是任何目录上都找不到的零件。",
    },
    p2: {
      en: "Over {years} years, that same problem-solving approach has grown into a full precision machining and metal fabrication operation, serving palm oil mills, food and beverage producers, consumer goods manufacturers, oil & gas and marine operators, and industrial plants across Malaysia.",
      zh: "{years} 多年来，这份解决问题的精神，让我们成长为一间完整的精密机械加工与金属制造企业，服务对象涵盖棕油厂、食品饮料生产商、消费品制造商、油气与海事业者，以及马来西亚各地的工业厂房。",
    },
    p3: {
      en: "We remain a hands-on, engineer-led business. When you call, you speak to someone who understands machining — not a call centre reading from a script.",
      zh: "我们始终是一家由工程师亲自主导的实干型企业。您来电时，接听的会是真正懂机械加工的人，而不是照本宣科的客服。",
    },
    missionTitle: { en: "Our Mission", zh: "我们的使命" },
    missionBody: {
      en: "To keep Malaysian manufacturing running by supplying precisely machined parts and dependable repairs, on a timeline that respects our clients' production schedules.",
      zh: "以精准加工的零件与可靠的维修服务，配合客户的生产时间表，持续支持马来西亚制造业的运作。",
    },
    visionTitle: { en: "Our Vision", zh: "我们的愿景" },
    visionBody: {
      en: "To be the machining and fabrication partner Malaysian factory owners and engineers call first, regardless of the size of the job.",
      zh: "无论工程大小，都成为马来西亚工厂业主与工程师第一个想到的加工与制造伙伴。",
    },
    standardTitle: { en: "Our Standard", zh: "我们的标准" },
    standardBody: {
      en: "Every part is checked against the original drawing or sample before it leaves our workshop — no exceptions, no shortcuts.",
      zh: "每一个零件出厂前都会依照原始图纸或样品逐一检测——绝无例外，绝不偷工减料。",
    },
  },
  servicesPage: {
    eyebrow: { en: "Our Services", zh: "我们的服务" },
    title: { en: "Machining & Fabrication Services", zh: "机械加工与金属制造服务" },
    description: {
      en: "Eight core capabilities that cover most of what a manufacturing plant needs to keep its equipment running and its production line supplied with parts.",
      zh: "八项核心能力，涵盖工厂维持设备运转与生产线零件供应所需的大部分需求。",
    },
    serviceLabel: { en: "Service", zh: "服务" },
  },
  industriesPage: {
    eyebrow: { en: "Industries Served", zh: "服务行业" },
    title: { en: "Sectors We Support", zh: "我们支持的行业" },
    description: {
      en: "Different industries put different demands on a part — tolerance, material, hygiene, or turnaround. Here's where our work is most often put to use.",
      zh: "不同行业对零件的要求各不相同——公差、材质、卫生标准或交货速度。以下是我们最常服务的领域。",
    },
  },
  galleryPage: {
    eyebrow: { en: "Project Gallery", zh: "作品图库" },
    title: { en: "A Look at Our Work", zh: "看看我们的作品" },
    description: {
      en: "A sample of machining, welding, and fabrication work from our workshop. Photos shown are representative of our process; ask us for references from your specific industry.",
      zh: "以下是我们车间加工、焊接与制造作品的部分展示，图片仅供参考。若需了解特定行业的实际案例，欢迎与我们联系。",
    },
  },
  projectsPage: {
    eyebrow: { en: "Projects", zh: "项目案例" },
    title: { en: "Completed Projects", zh: "已完成项目" },
    description: {
      en: "Real machining, fabrication, and repair projects delivered for manufacturers across Malaysia, organised by the industry they were made for.",
      zh: "以下是我们为马来西亚各行业制造商完成的实际加工、制造与维修项目，依服务行业分类整理。",
    },
    noProjects: {
      en: "Projects are being added to this page — check back soon, or contact us directly for references.",
      zh: "项目案例正在陆续上传中，请稍后查看，或直接联系我们索取案例参考。",
    },
    viewProject: { en: "View Project", zh: "查看项目" },
  },
  projectDetail: {
    backToProjects: { en: "Back to Projects", zh: "返回项目列表" },
    aboutHeading: { en: "About This Project", zh: "项目详情" },
    industryLabel: { en: "Industry", zh: "服务行业" },
    materialLabel: { en: "Material", zh: "材质" },
    processLabel: { en: "Machine Process", zh: "加工工艺" },
    beforeAfterHeading: { en: "Before & After", zh: "维修前后对比" },
    beforeLabel: { en: "Before", zh: "维修前" },
    afterLabel: { en: "After", zh: "维修后" },
  },
  industryDetail: {
    backToIndustries: { en: "Back to Industries", zh: "返回行业列表" },
    projectsEyebrow: { en: "Projects", zh: "项目案例" },
    projectsHeading: {
      en: "Projects for {industry} Industry",
      zh: "{industry}行业项目案例",
    },
    noProjects: {
      en: "No projects have been added for this industry yet — contact us directly for references.",
      zh: "该行业暂无项目案例，请直接联系我们索取参考案例。",
    },
  },
  contactPage: {
    eyebrow: { en: "Contact Us", zh: "联系我们" },
    title: { en: "Get a Quotation", zh: "获取报价" },
    description: {
      en: "Tell us about the part or repair you need, and we'll respond with a clear quotation. For urgent breakdowns, calling or WhatsApp is fastest.",
      zh: "告诉我们您需要的零件或维修需求，我们将尽快回复清楚的报价。若是紧急故障，致电或 WhatsApp 联系最快。",
    },
    reachUsHeading: { en: "Reach Us Directly", zh: "直接联系我们" },
    callUs: { en: "Call Us", zh: "致电我们" },
    whatsappUs: { en: "WhatsApp Us", zh: "WhatsApp 我们" },
    emailUs: { en: "Email Us", zh: "电邮我们" },
    visitWorkshop: { en: "Visit Our Workshop", zh: "参观我们的车间" },
    businessHours: { en: "Business Hours", zh: "营业时间" },
    formHeading: { en: "Send Us a Message", zh: "给我们留言" },
    formNote: {
      en: "Fields marked * are required. The more detail you can share, the faster we can respond.",
      zh: "标有 * 的栏位为必填项。提供的详情越多，我们回复越快。",
    },
    firstName: { en: "First Name", zh: "名字" },
    lastName: { en: "Last Name", zh: "姓氏" },
    phone: { en: "Phone Number", zh: "电话号码" },
    email: { en: "Email Address", zh: "电邮地址" },
    subject: { en: "Subject", zh: "主题" },
    message: { en: "Message", zh: "留言内容" },
    messagePlaceholder: {
      en: "Describe the part, quantity, material, and drawing/sample availability.",
      zh: "请描述零件详情、数量、材质，以及是否有图纸或样品。",
    },
    submit: { en: "Send Message", zh: "发送留言" },
    sending: { en: "Sending...", zh: "发送中..." },
    successTitle: { en: "Your email app should now be open", zh: "您的电邮应用程序应已打开" },
    successBody: {
      en: "Send the pre-filled message and our team will get back to you shortly. You can also reach us directly by phone or WhatsApp.",
      zh: "请发送已预填好的邮件，我们的团队将尽快回复您。您也可以直接致电或 WhatsApp 联系我们。",
    },
    sendAnother: { en: "Send Another Message", zh: "再发送一则留言" },
  },
  notFound: {
    error: { en: "Error 404", zh: "错误 404" },
    title: { en: "This Part Doesn't Exist", zh: "找不到此页面" },
    body: {
      en: "The page you're looking for may have moved or no longer exists. Let's get you back to the workshop floor.",
      zh: "您要找的页面可能已被移动或不存在，让我们带您回到首页。",
    },
    back: { en: "Back to Home", zh: "返回首页" },
  },
};
